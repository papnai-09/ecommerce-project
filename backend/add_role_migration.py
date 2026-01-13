from sqlalchemy import create_engine, text

DATABASE_URL = "postgresql://postgres:root@localhost:5432/ecommerce"
engine = create_engine(DATABASE_URL)

with engine.connect() as conn:
    conn.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS role VARCHAR DEFAULT 'user'"))
    conn.commit()

print('Migration applied: users.role ensured')
