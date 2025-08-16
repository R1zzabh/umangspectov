import os
from urllib.parse import quote_plus

class Settings:
    SECRET_KEY = os.getenv("SECRET_KEY")                 # required in prod
    ENV = os.getenv("ENV", "development").lower()

    if ENV in ("prod", "production"):
        if not SECRET_KEY:
            raise RuntimeError("SECRET_KEY must be set in production")
        if not os.getenv("DB_URL") and not (
            os.getenv("DB_USER") and os.getenv("DB_HOST") and os.getenv("DB_NAME")
        ):
            raise RuntimeError("Database credentials/DB_URL must be set in production")

    DB_URL = os.getenv("DB_URL")
    if not DB_URL:
        # Use SQLite for development if no DB_URL is provided
        if ENV in ("prod", "production"):
            DB_USER = os.getenv("DB_USER", "root")
            DB_PASS = quote_plus(os.getenv("DB_PASS", ""))
            DB_HOST = os.getenv("DB_HOST", "127.0.0.1")
            DB_NAME = os.getenv("DB_NAME", "applicant_db")
            DB_URL = f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}?charset=utf8mb4"
        else:
            # Development: use SQLite
            DB_URL = "sqlite:///applicant_db.sqlite"

    SQLALCHEMY_DATABASE_URI = DB_URL

    #SQLALCHEMY ENGINE TUNING
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False  # flip to True if debugging SQL locally

    # allow env overrides; sensible defaults
    if DB_URL.startswith("sqlite"):
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_pre_ping": True,
        }
    else:
        # MySQL-specific options
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_pre_ping": True,
            "pool_recycle": int(os.getenv("SQL_POOL_RECYCLE", "280")),
            "pool_size": int(os.getenv("SQL_POOL_SIZE", "5")),
            "max_overflow": int(os.getenv("SQL_MAX_OVERFLOW", "10")),
            "connect_args": {"connect_timeout": int(os.getenv("SQL_CONNECT_TIMEOUT", "10"))},
        }

    FRONTEND_ORIGINS = [o.strip() for o in os.getenv("FRONTEND_ORIGINS", "").split(",") if o.strip()]
