from . import get_token, search

toke = get_token()
print(toke)
song_search = search(toke, "Japanese Denim")
print(song_search)


