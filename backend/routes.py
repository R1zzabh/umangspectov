import re
import logging
from decimal import Decimal, InvalidOperation
from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from flask_mail import Message
from extensions import db, mail
from models import Applicant

logger = logging.getLogger("routes")

bp = Blueprint("api", __name__)

@bp.get("/health")
def health():
    logger.info("Health check called")
    return jsonify({"status": "ok"}), 200


def _as_bool(v):
    """Coerce value into bool; return None if not recognizable."""
    if isinstance(v, bool):
        return v
    if v is None:
        return None
    # numbers
    try:
        if isinstance(v, (int, float)):
            return bool(int(v))
    except Exception:
        pass
    # strings
    s = str(v).strip().lower()
    if s in ("1", "true", "yes", "y", "on"):
        return True
    if s in ("0", "false", "no", "n", "off"):
        return False
    return None


def _maxlen(s, n):
    return s if len(s) <= n else s[:n]


@bp.post("/api/submissions")
def create_submission():
    logger.info("POST /api/submissions called")

    # Accept JSON or form submissions
    data = request.get_json(silent=True) or request.form
    if not data:
        return jsonify({"ok": False, "error": "Invalid data"}), 400

    # For logging, make sure we can stringify
    try:
        logger.info(f"Incoming data: {dict(data)}")
    except Exception:
        logger.info("Incoming data received")

    # Extract fields (support camelCase and snake_case)
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    phone = (data.get("phone") or "").strip()
    university = (data.get("university") or "").strip()
    university_location = (data.get("university_location") or data.get("universityLocation") or "").strip()
    graduation_year = (data.get("graduation_year") or data.get("graduationYear") or "").strip()
    preferred_domain = (data.get("preferred_domain") or data.get("preferredDomain") or "").strip()
    cgpa_raw = (data.get("cgpa") or "").strip()
    # IMPORTANT: don't use `or` for booleans—False would be dropped
    participated_val = data.get("participated_in_hackathon")
    if participated_val is None:
        participated_val = data.get("participatedInHackathon")
    participated = _as_bool(participated_val)
    linkedin_url = (data.get("linkedin_url") or data.get("linkedinUrl") or "").strip()

    # Validation
    errors = []
    if not name:
        errors.append("name is required")
    if not email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", email):
        errors.append("valid email required")
    if not phone:
        errors.append("phone is required")
    if not university:
        errors.append("university is required")
    if not university_location:
        errors.append("university_location is required")
    if not graduation_year.isdigit() or not (1990 <= int(graduation_year) <= 2100):
        errors.append("graduation_year invalid")
    if not preferred_domain:
        errors.append("preferred_domain is required")

    # CGPA validation for DECIMAL(4,2)
    try:
        cgpa_val = Decimal(cgpa_raw)
        if not (Decimal("0.00") <= cgpa_val <= Decimal("10.00")):
            raise ValueError
        cgpa_val = cgpa_val.quantize(Decimal("0.01"))
    except (InvalidOperation, ValueError):
        errors.append("cgpa must be a valid number between 0 and 10")

    if participated is None:
        errors.append("participated_in_hackathon must be boolean/0/1")

    if linkedin_url and not re.match(r"^https?://(www\.)?linkedin\.com/.*", linkedin_url, flags=re.I):
        errors.append("linkedin_url must be a valid linkedin.com link")

    # Enforce max lengths
    name = _maxlen(name, 100)
    email = _maxlen(email, 255)
    phone = _maxlen(phone, 20)
    university = _maxlen(university, 150)
    university_location = _maxlen(university_location, 120)
    preferred_domain = _maxlen(preferred_domain, 120)
    linkedin_url = _maxlen(linkedin_url, 255)

    if errors:
        logger.warning(f"Validation failed: {errors}")
        return jsonify({"ok": False, "errors": errors}), 422

    # Create Applicant row
    a = Applicant(
        name=name,
        email=email,
        phone=phone,
        university=university,
        university_location=university_location,
        graduation_year=int(graduation_year),
        preferred_domain=preferred_domain,
        cgpa=cgpa_val,  # DECIMAL aligns with MySQL DECIMAL(4,2)
        participated_in_hackathon=participated,  # bool → TINYINT(1)
        linkedin_url=linkedin_url or None,
    )

    try:
        db.session.add(a)
        db.session.commit()
        logger.info(f"Applicant inserted successfully: {a}")

        # Attempt confirmation email (non-fatal if it fails)
        try:
            msg = Message(
                subject="Application Received - Sankalp",
                recipients=[email],
                body=f"Hi {name},\n\nThank you for your interest! We have received your application successfully.\n\nRegards,\nSankalp Team",
            )
            mail.send(msg)
            logger.info(f"Confirmation email sent to {email}")
        except Exception:
            logger.exception(f"Failed to send confirmation email to {email}")

    except IntegrityError:
        db.session.rollback()
        logger.warning(f"Duplicate email attempted: {email}")
        return jsonify({"ok": False, "error": "duplicate email"}), 409
    except Exception:
        db.session.rollback()
        logger.exception("Unexpected error while inserting applicant")
        return jsonify({"ok": False, "error": "unexpected error"}), 500

    resp = jsonify({"ok": True, "id": a.id})
    logger.info(f"Submission successful, id={a.id}")
    return resp, 201
