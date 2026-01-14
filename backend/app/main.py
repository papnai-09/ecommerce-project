from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .auth.routes import router as auth_router
from .models import User
from .database import Base, engine, SessionLocal
from .utils import hash_password
from sqlalchemy.orm import Session
from sqlalchemy import text
from .admin import router as admin_router

# Create all tables
Base.metadata.create_all(bind=engine)

# Migrate: Add role column if it doesn't exist
try:
    with engine.begin() as conn:
        conn.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR DEFAULT 'user'"))
except Exception as e:
    # Column might already exist, ignore error
    pass

# Seed an admin user for development (admin@example.com / adminpass)
try:
    db: Session = SessionLocal()
    if not db.query(User).filter(User.email == "admin@example.com").first():
        admin_user = User(email="admin@example.com", password=hash_password("adminpass"), is_verified=True, role="admin")
        db.add(admin_user)
        db.commit()
    db.close()
except Exception as e:
    # Ignore errors during seeding (might be first run)
    pass

app = FastAPI()

import os

# Allow requests from frontend origins (dev and production)
frontend_origins = os.getenv("FRONTEND_ORIGINS", "http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(admin_router)
