from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class User(Base):

    __tablename__ = "users"


    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)


class Artist(Base):

    __tablename__ = "artists"
    id = Column(String, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    genre = Column(String)

    #Relationship
    songs = relationship("Song", back_populates="artist")


class Song(Base):

    __tablename__ = "songs"
    id = Column(String, primary_key=True, index=True)
    title = Column(String, unique= True, index=True)
    key = Column(String, unique=False, index=True)
    tempo = Column(Integer, unique=False, index=True)


    artist_id = Column(Integer, ForeignKey("artists.id"))

    #relationships 

    artist = relationship("Artist", back_populates="songs")
    progressions = relationship("Progression", back_populates="song")


class Progression(Base):

    __tablename__ = "progressions"


    id = Column(String, primary_key=True, index=True)
    chords = Column(String)
    roman_numerals = Column(String, nullable=True)


    song_id = Column(Integer, ForeignKey("songs.id"))

    #relationship
    song = relationship("Song", back_populates="progressions")



