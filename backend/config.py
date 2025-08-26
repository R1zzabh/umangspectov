import os
import logging
from urllib.parse import quote_plus

# ------------------------
# Logging setup
# ------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("config")

class Settings:
    SECRET_KEY = os.getenv("SECRET_KEY")                 # required in prod
    ENV = os.getenv("ENV", "development").lower()
    logger.info(f"ENV={ENV}")

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
            logger.info(f"DB connection string built for MySQL on host={DB_HOST}, db={DB_NAME}, user={DB_USER}")
        else:
            # Development: use SQLite
            DB_URL = "sqlite:///applicant_db.sqlite"
            logger.info("Using SQLite (development fallback)")
    else:
        logger.info(f"Using DB_URL from environment (starts with: {DB_URL.split(':',1)[0]})")

    SQLALCHEMY_DATABASE_URI = DB_URL
    logger.info(f"SQLALCHEMY_DATABASE_URI={SQLALCHEMY_DATABASE_URI}")

    # SQLALCHEMY ENGINE TUNING
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False  # flip to True if debugging SQL locally

    # allow env overrides; sensible defaults
    if DB_URL.startswith("sqlite"):
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_pre_ping": True,
        }
        logger.info("Engine options set for SQLite")
    else:
        # MySQL-specific options
        SQLALCHEMY_ENGINE_OPTIONS = {
            "pool_pre_ping": True,
            "pool_recycle": int(os.getenv("SQL_POOL_RECYCLE", "280")),
            "pool_size": int(os.getenv("SQL_POOL_SIZE", "5")),
            "max_overflow": int(os.getenv("SQL_MAX_OVERFLOW", "10")),
            "connect_args": {"connect_timeout": int(os.getenv("SQL_CONNECT_TIMEOUT", "10"))},
        }
        logger.info(
            f"Engine options set for MySQL (pool_size={SQLALCHEMY_ENGINE_OPTIONS['pool_size']}, "
            f"max_overflow={SQLALCHEMY_ENGINE_OPTIONS['max_overflow']}, "
            f"pool_recycle={SQLALCHEMY_ENGINE_OPTIONS['pool_recycle']})"
        )

    FRONTEND_ORIGINS = [o.strip() for o in os.getenv("FRONTEND_ORIGINS", "").split(",") if o.strip()]
    logger.info(f"FRONTEND_ORIGINS={FRONTEND_ORIGINS}")

    # ------------------------
    # MAIL SETTINGS
    # ------------------------
    MAIL_SERVER = os.getenv("MAIL_SERVER", "smtp.gmail.com")
    MAIL_PORT = int(os.getenv("MAIL_PORT", "587"))
    MAIL_USE_TLS = os.getenv("MAIL_USE_TLS", "1") in ("1", "true", "True")
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER", MAIL_USERNAME)

    logger.info(
        f"MAIL settings -> server={MAIL_SERVER}, port={MAIL_PORT}, "
        f"use_tls={MAIL_USE_TLS}, user={MAIL_USERNAME}, default_sender={MAIL_DEFAULT_SENDER}"
    )
