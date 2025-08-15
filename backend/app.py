# app.py (unified dev + prod)
import os
from flask import Flask, jsonify
from flask_cors import CORS

from config import Settings
from models import db
from routes import bp

# Helpers
def is_production() -> bool:
    return os.getenv("ENV", "").lower() in ("prod", "production")

def get_allowed_origins():
    # Prod: use FRONTEND_ORIGINS env (comma-separated)
    if is_production():
        return Settings.FRONTEND_ORIGINS or []
    # Dev defaults
    return [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
    ]

def should_auto_create_tables() -> bool:
    # Safe for dev; in prod prefer migrations, but allow toggle via env
    return os.getenv("AUTO_CREATE_TABLES", "1" if not is_production() else "0") in ("1", "true", "True")


def create_app() -> Flask:
    if not is_production():
        try:
            from dotenv import load_dotenv
            load_dotenv()
        except Exception:
            pass

    app = Flask(__name__)


    app.config["SECRET_KEY"] = Settings.SECRET_KEY or ("dev-only" if not is_production() else None)
    app.config["SQLALCHEMY_DATABASE_URI"] = Settings.SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SQLALCHEMY_ENGINE_OPTIONS"] = Settings.SQLALCHEMY_ENGINE_OPTIONS

    CORS(app, resources={r"/api/*": {"origins": get_allowed_origins()}})

    db.init_app(app)
    app.register_blueprint(bp)  # provides /api/submissions (POST) and any other API routes

    if should_auto_create_tables():
        with app.app_context():
            db.create_all()

    @app.get("/health")
    def health():
        return jsonify({"status": "ok"}), 200

    @app.errorhandler(422)
    def handle_422(err):
        return jsonify({"ok": False, "error": "unprocessable entity"}), 422

    @app.errorhandler(500)
    def handle_500(err):
        return jsonify({"ok": False, "error": "internal server error"}), 500

    return app


# Dev entrypoint; in production Passenger/Gunicorn imports create_app() instead
if __name__ == "__main__":
    app = create_app()
    port = int(os.getenv("PORT", "5000"))
    debug = not is_production()
    app.run(host="0.0.0.0", port=port, debug=debug)
