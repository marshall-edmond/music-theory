from passlib.context import CryptContext
import jwt
import os
import datetime


pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")
#Hashes password with argon2 algorigthm
def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password : str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


#Generate JSON web token.. 
key = os.getenv("SIG_KEY")


#function to sign JWT 
def create_access_token(username):
    expiration = datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    token = jwt.encode({"sub" : username, "exp" : expiration}, key, algorithm="HS256")

    return token

def get_current_token(token: str):
    decoded = jwt.decode(token)  