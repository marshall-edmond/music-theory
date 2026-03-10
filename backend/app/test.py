from . import get_token, search


toke = get_token()
song_search = search(toke, "Japanese Denim")
print(song_search)

