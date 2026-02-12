from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")
#Hashes password with argon2 algorigthm
def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password : str) -> bool:
    pwd_context.verify(plain_password, hashed_password)
