import os
from pathlib import Path
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# Load environment variables
load_dotenv(Path(__file__).resolve().parents[1] / ".env")

# 1: Connection URL
# Format: postgresql://username:password@localhost/dbname
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Check if it's None
if not SQLALCHEMY_DATABASE_URL:
    raise ValueError("DATABASE_URL not found! Check your .env file")

# 2: Create the Engine (The Driver)
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 3: Create the Session (The temporary workspace)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4: Create the Base (The blueprint for your tables)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
