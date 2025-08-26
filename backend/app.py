import os
import logging
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail
from dotenv import load_dotenv

load_dotenv()

from config import Settings
from models import db
from routes import bp

# ------------------------
# Logging setup
# ------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

# Flask-Mail instance
mail = Mail()

def is_production() -> bool:
    return os.getenv("ENV", "").lower() in ("prod", "production")

def get_allowed_origins():
    if is_production():
        origins = ["https://umang.sankalp.spectov.in"] + (Settings.FRONTEND_ORIGINS or [])
        logger.info(f"Allowed origins (prod): {origins}")
        return origins

    dev_origins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
    ]
    logger.info(f"Allowed origins (dev): {dev_origins}")
    return dev_origins

def should_auto_create_tables() -> bool:
    val = os.getenv("AUTO_CREATE_TABLES", "1" if not is_production() else "0")
    logger.info(f"AUTO_CREATE_TABLES={val}")
    return val in ("1", "true", "True")

def create_app() -> Flask:
    app = Flask(__name__)

    # DB config
    app.config["SECRET_KEY"] = Settings.SECRET_KEY or ("dev-only" if not is_production() else None)
    app.config["SQLALCHEMY_DATABASE_URI"] = Settings.SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = Settings.SQLALCHEMY_ENGINE_OPTIONS

    logger.info(f"Using database: {app.config['SQLALCHEMY_DATABASE_URI']}")

    # CORS config
    CORS(app, resources={r"/api/*": {"origins": get_allowed_origins()}})

    # DB init
    db.init_app(app)
    app.register_blueprint(bp)

    # Auto-create tables (if enabled)
    if should_auto_create_tables():
        with app.app_context():
            logger.info("Auto-creating tables...")
            db.create_all()

    # Mail config
    app.config.update(
        MAIL_SERVER=Settings.MAIL_SERVER,
        MAIL_PORT=Settings.MAIL_PORT,
        MAIL_USE_TLS=Settings.MAIL_USE_TLS,
        MAIL_USERNAME=Settings.MAIL_USERNAME,
        MAIL_PASSWORD=Settings.MAIL_PASSWORD,
        MAIL_DEFAULT_SENDER=Settings.MAIL_DEFAULT_SENDER,
    )
    mail.init_app(app)
    logger.info(f"Mail configured: server={Settings.MAIL_SERVER}, sender={Settings.MAIL_DEFAULT_SENDER}")

    # Request/response logging
    @app.before_request
    def log_request():
        logger.info(f"Incoming {request.method} {request.path} from {request.remote_addr}")

    @app.after_request
    def log_response(response):
        logger.info(f"Response {response.status_code} for {request.method} {request.path}")
        return response

    # Health endpoint
    @app.get("/health")
    def health():
        return jsonify({"status": "ok"}), 200

    # Error handlers
    @app.errorhandler(422)
    def handle_422(err):
        logger.error(f"422 Error: {err}")
        return jsonify({"ok": False, "error": "unprocessable entity"}), 422

    @app.errorhandler(500)
    def handle_500(err):
        logger.exception("500 Error encountered")
        return jsonify({"ok": False, "error": "internal server error"}), 500

    return app

if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", "5000"))
    debug = not is_production()
    logger.info(f"Starting server on port {port}, debug={debug}")
    app.run(host="0.0.0.0", port=port, debug=debug)
