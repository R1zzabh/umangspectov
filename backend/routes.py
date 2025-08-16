import re
from flask import Blueprint, request, jsonify, url_for
from sqlalchemy.exc import IntegrityError
from models import db, Applicant

bp = Blueprint("api", __name__)

@bp.get("/health")
def health():
    return jsonify({"status": "ok"}), 200

def _as_bool(v):
    if v is None:
        return None
    s = str(v).strip().lower()
    if s in ("1", "true", "yes", "y"): return True
    if s in ("0", "false", "no", "n"): return False
    return None

def _maxlen(s, n):
    return s if len(s) <= n else s[:n]

@bp.post("/api/submissions")
def create_submission():
    """
    Accepts JSON or form-encoded data; returns JSON.
    Fields: name, email, phone, university, university_location,
            graduation_year, preferred_domain, cgpa,
            participated_in_hackathon, linkedin_url
    """
    data = request.get_json(silent=True) or request.form

    # Support both camelCase (frontend) and snake_case (backend) field names
    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip().lower()
    phone = (data.get("phone") or "").strip()
    university = (data.get("university") or "").strip()
    university_location = (data.get("university_location") or data.get("universityLocation") or "").strip()
    graduation_year = (data.get("graduation_year") or data.get("graduationYear") or "").strip()
    preferred_domain = (data.get("preferred_domain") or data.get("preferredDomain") or "").strip()
    cgpa_raw = (data.get("cgpa") or "").strip()
    participated = _as_bool(data.get("participated_in_hackathon") or data.get("participatedInHackathon"))
    linkedin_url = (data.get("linkedin_url") or data.get("linkedinUrl") or "").strip()

    errors = []
    if not name: errors.append("name is required")
    if not email or not re.match(r"^[^@]+@[^@]+\.[^@]+$", email): errors.append("valid email required")
    if not phone: errors.append("phone is required")
    if not university: errors.append("university is required")
    if not university_location: errors.append("university_location is required")
    if not graduation_year.isdigit() or not (1990 <= int(graduation_year) <= 2100):
        errors.append("graduation_year invalid")
    if not preferred_domain: errors.append("preferred_domain is required")

    try:
        cgpa_val = float(cgpa_raw)
        if not (0.0 <= cgpa_val <= 10.0):
            raise ValueError
    except Exception:
        errors.append("cgpa must be between 0 and 10")

    if participated is None:
        errors.append("participated_in_hackathon must be boolean/0/1")

    if linkedin_url and not re.match(r"^https?://(www\.)?linkedin\.com/.*", linkedin_url, flags=re.I):
        errors.append("linkedin_url must be a valid linkedin.com link")

    name = _maxlen(name, 100)
    email = _maxlen(email, 255)
    phone = _maxlen(phone, 20)
    university = _maxlen(university, 150)
    university_location = _maxlen(university_location, 120)
    preferred_domain = _maxlen(preferred_domain, 120)
    linkedin_url = _maxlen(linkedin_url, 255)

    if errors:
        return jsonify({"ok": False, "errors": errors}), 422

    a = Applicant(
        name=name,
        email=email,
        phone=phone,
        university=university,
        university_location=university_location,
        graduation_year=int(graduation_year),
        preferred_domain=preferred_domain,
        cgpa=round(cgpa_val, 2),
        participated_in_hackathon=bool(participated),
        linkedin_url=linkedin_url or None,
    )

    try:
        db.session.add(a)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({"ok": False, "error": "duplicate email"}), 409
    except Exception:
        db.session.rollback()
        return jsonify({"ok": False, "error": "unexpected error"}), 500

    # Return success response
    resp = jsonify({"ok": True, "id": a.id})
    return resp, 201
