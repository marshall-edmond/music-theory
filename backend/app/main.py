from fastapi import FastAPI
from . import models
from .database import engine

#models.base.metadata.create_all(bind=engine)

app = FastAPI();

@app.get("/")
def read_root():
    return {"message" : "Server is running and Database is connected!"}