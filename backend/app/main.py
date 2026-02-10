from fastapi import FastAPI, Depends, HTTPException, status
from . import models, schemas
from sqlalchemy.orm import Session
from .database import engine, get_db
from .auth import hash_password, verify_password

models.base.metadata.create_all(bind=engine)

 symbols = ['@',',','.','#','$','%']

def validate(password: str) -> bool:
    #Passwords must have 8 characters, 1 uppercase, and one symbol. 
    if len(password) < 8:
        return False
    
    has_upper = any(char.isupper() for char in password)
    has_symbol = any(char in symbols for char in password)
    
    return has_upper and has_symbol

app = FastAPI();

@app.get("/")
def read_root():
    return {"message" : "Server is running and Database is connected!"}


@app.post('/signup')
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    #checks if username exists in the database, returns TRUE/FALSE.. If True raise exception
    existing_user = db.query(models.User).filter(models.User.username == user.username).first()
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already taken")
    
    existing_email = db.query(models.User).filter(models.User.email == user.email).first()

    if existing_email:
        raise HTTPException(status_code=400, detail= "Email already exists")
    
    #If password is validated store in db
    if validate(user.password):
        hashed_pw = hash_password(user.password) #store hashed password

        new_user = models.User(
            username= user.username,
            hashed_password = hashed_pw,
            email = user.email
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user
    else:
        raise HTTPException(status_code= 400, detail="Password must be atleast 8 characters long and include 1 upper case letter.")


                            
@app.post('/login') 
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    user_from_db = db.query(models.User).filter(models.User.username == user.username).first()

    if not user_from_db:
        raise HTTPException(status_code=401, detail="Incorrect username or password.")

    if not verify_password(user.password, user_from_db.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect credentials.")
    
    return {"message": "Login successful", "user": user_from_db}

@app.post('/songsearch')
def search(content):
    pass
