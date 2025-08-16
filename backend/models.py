from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import CheckConstraint

db = SQLAlchemy()

class Applicant(db.Model):
    __tablename__ = "applicants_umang"

    id = db.mapped_column(db.Integer, primary_key=True, autoincrement=True)
    name = db.mapped_column(db.String(100), nullable=False)
    email = db.mapped_column(db.String(255), nullable=False, unique=True)
    phone = db.mapped_column(db.String(20), nullable=False)
    university = db.mapped_column(db.String(150), nullable=False)
    university_location = db.mapped_column(db.String(120), nullable=False)
    graduation_year = db.mapped_column(db.Integer, nullable=False)
    preferred_domain = db.mapped_column(db.String(120), nullable=False)
    cgpa = db.mapped_column(db.Numeric(4, 2), nullable=False)
    participated_in_hackathon = db.mapped_column(db.Boolean, nullable=False, default=False)
    linkedin_url = db.mapped_column(db.String(255))
    created_at = db.mapped_column(db.TIMESTAMP, nullable=False, server_default=db.text("CURRENT_TIMESTAMP"))

    __table_args__ = (
        CheckConstraint("cgpa >= 0.00 AND cgpa <= 10.00", name="ck_cgpa_range"),
    )
