import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

# Use Neon database URL from environment variable, fallback to local for development
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:root@localhost:5432/ecommerce")

# For Neon, use postgresql+psycopg2:// if needed, or keep as is
# Neon connection strings are typically in format: postgresql://user:password@host/dbname?sslmode=require
engine = create_engine(DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()
