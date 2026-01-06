

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 1. Connection URL
# Format: postgresql://username:password@localhost/dbname
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:password@localhost/musical_map"

# 2. Create the Engine (The Driver)
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 3. Create the Session (The temporary workspace)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. Create the Base (The blueprint for your tables)
Base = declarative_base()