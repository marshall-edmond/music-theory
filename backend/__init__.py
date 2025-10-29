from flask import Flask, jsonify
from backend.routes._statics import NOTES_SHARP, NOTES_FLAT
from backend.routes.scales import Major_Scale, Natural_Minor
from backend.routes.chords import major_chord, minor_chord

app = Flask(__name__)

@app.route("/api/users", methods=['GET'])
def home():
    pass