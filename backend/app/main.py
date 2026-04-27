from fastapi import FastAPI, Depends, HTTPException, status, Request
from . import models, schemas
from sqlalchemy.orm import Session
from .database import engine, get_db
from .auth import hash_password, verify_password
import os
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import requests
import base64
import json
from requests import post
from dotenv import load_dotenv
from bs4 import BeautifulSoup

load_dotenv()
models.Base.metadata.create_all(bind=engine)
#accepted symbol
client_id = os.getenv("SPOTIFY")
client_secret = os.getenv("SPOTIFY_SECRET")
genius_token = os.getenv("GENIUS_TOKEN")
youtubeKey = os.getenv("YOUTUBE_KEY")
    
    
symbols = ['@',',','.','#','$','%']

def validate(password: str) -> bool:
    #Passwords must have 8 characters, 1 uppercase, and one symbol. 
    if len(password) < 8:
        return False
    
    has_upper = any(char.isupper() for char in password)
    has_symbol = any(char in symbols for char in password)
    
    return has_upper and has_symbol

app = FastAPI();

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message" : "Server is running and Database is connected!"}


@app.post('/signup')
def signup(user: schemas.UserCreate, db: Session = Depends(get_db)):
    #checks if username exists in the database, returns TRUE/FALSE.. If True raise exception
    existing_user = db.query(models.User).filter(models.User.username == user.username).first()
    #if user exists username is taken
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

#function to get access token
def get_token():
    auth_string = client_id + ":" + client_secret
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")
    
    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded",
    }
    
    data = {"grant_type": "client_credentials"}
    result = post(url, headers=headers, data=data)
    
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

#concatenate authorize token
def get_auth_header(token):
    return {"Authorization": "Bearer " + token}

#send to spotify
@app.post('/songsearch')
def search(query: schemas.SongSearch):
    #get token function
    token = get_token()
    #variable for api key
    headers = get_auth_header(token)
    #call Spotify api
    response = requests.get(
        "https://api.spotify.com/v1/search", headers= headers,
        params = {
            #required arguments
            "q": query.query,
            "type": "track",
            "limit": 5,
        }
    )
    
    #Get response from api endpoint 
    data = response.json()
    #list comprehension of data object
    final = [{"cover_art": item["album"]["images"][0]["url"], "track_title" : item["name"] , "artist" : item["artists"][0]["name"], "id" : item["id"]} for item in data["tracks"]["items"]]
    
    return final

    
#get page from genius and scrape lyrics using beautifulsoup
@app.get('/lyrics/{artist}/{track_title}')
def lyrics(artist, track_title):
    header = {"Authorization" : "Bearer " + genius_token} 
    response = requests.get("https://api.genius.com/search?", headers=header, 
         params= {
             "q": f"{artist} {track_title}"
         })
    
    data = response.json()
    lyrics_url = data["response"]["hits"][0]["result"]["url"]
    page = requests.get(lyrics_url)
    soup = BeautifulSoup(page.content, 'html.parser')
    containers = soup.find_all('div', attrs={'data-lyrics-container': 'true'})
    
    for container in containers:
        header = container.find('div', attrs={'data-exclude-from-selection': 'true'})
        if header:
            header.decompose()
    
    text = [container.get_text(separator="\n") for container in containers]
    final = "\n".join(text)
    
    return final
     #function to get song metadata from spotify
@app.get("/metaData/{id}")
def metaData(id : str):
    token = get_token()
    headers = get_auth_header(token)
    
    response = requests.get(f"https://api.spotify.com/v1/audio-features/{id}", headers = headers)
       
    data = response.json()
    print(data)
    print(response.status_code)

    final = {"key" : data["key"], "tempo": data["tempo"], "time_signature" : data["time_signature"]}
    
    
    return final

@app.get('/youtubeSearch/{artist}/{song}')
def youtubeSearch(artist: str, song : str):
    #Generate youtube key and authorization header
    key = youtubeKey
    q = song + " " + artist
    
    response = requests.get("https://www.googleapis.com/youtube/v3/search/", params= {
        "part": "snippet",
        "key": key,
        "q": q
        })
    
    data = response.json()
    
    #return top result video id
    data = data["items"][0]["id"]["videoId"]
    #return id of the 
    final = { "id" : data} 
    return final