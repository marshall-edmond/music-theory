from pydantic import  BaseModel


class UserCreate(BaseModel):
    username: str
    password: str
    email: str


class UserResponse(BaseModel):
    id : int
    username: str
    email: str

    class Config:
        from_attributes=True

class UserLogin(BaseModel):
    username: str
    password: str

#For songs we need title artist and 
class SongSearch(BaseModel):
    title: str
