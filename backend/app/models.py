from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):

    __tablename__ = "users"


    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    email = Column(String, unique=True, index=True)


class Artist(Base):

    __tablename__ = "artists"


    id = Column(String, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    genre = Column(String)

    #Relationship
    songs = relationship("Song", back_populates="artist")


class Song(Base):

    __tablename__ = "song" 
    
    id = Column(String, primary_key=True, index=True)
    title = Column(String, unique= True, index=True)
    key = Column(String, unique=False)
    tempo = Column(Integer, unique=False, index=True)


    artist_id = Column(String, ForeignKey("artists.id"))

    #relationships 

    artist = relationship("Artist", back_populates="songs")
    progressions = relationship("Progression", back_populates="song")


class Progression(Base):

    __tablename__ = "progressions"


    id = Column(String, primary_key=True, index=True)
    chords = Column(String)
    roman_numerals = Column(String, nullable=True)


    song_id = Column(String, ForeignKey("songs.id"))

    #relationship
    song = relationship("Song", back_populates="progressions")


class UserProgress(Base):
    __tablename__ = "user_progress"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    lesson_id = Column(String)
    completed = Column(Boolean, default=False)
    completed_at = Column(DateTime, nullable=True)
