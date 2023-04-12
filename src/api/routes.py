"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Artist, Venue
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

artists_var = [{ "username" : "artist1", "email" : "test", "password" : "test" }]

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# to populate the artist cards on the front
@api.route('/', methods=['GET'])
def artist_get():
    artists = Artist.query.all()
    serialized_artists = []
    for artist in artists:
        serialized_artists.append(artist.serialize())
    

    return jsonify(serialized_artists), 200

#to populate the venue cards on the front
@api.route('/', methods=['GET'])
def venue_get():
    artists = Venue.query.all()
    serialized_artists = []
    for artist in artists:
        serialized_artists.append(artist.serialize())

    return jsonify(serialized_artists), 200


# to sign up users
@api.route('/register', methods=['POST'])
def register_user():
    response_body = request.get_json()
    user = User(
                first_name=response_body['first_name'],
                last_name=response_body['last_name'],
                username=response_body["username"], 
                email=response_body["email"], 
                password=response_body["password"]
                )
    print("this is user: ", user)
    db.session.add(user)
    db.session.commit()
    return jsonify(response_body), 200


# to sign up artists
@api.route('/registerartist', methods=['POST'])
def register_artist():
    response_body = request.get_json()
    artist = Artist(artist_name=response_body["artist_name"],
                    genre=response_body["genre"],
                    performance_type=response_body["performance_type"],
                    instagram=response_body["instagram"],
                    facebook=response_body["facebook"],
                    twitter=response_body["twitter"],
                    tiktok=response_body["tiktok"],
                    soundcloud=response_body["soundcloud"],
                    spotify=response_body["spotify"],
                    user_id=response_body["user_id"])
    print("this is artist: ", artist)
    db.session.add(artist)
    db.session.commit()
    return jsonify(response_body), 200

# to sign up venues
@api.route('/registervenue', methods=['POST'])
def register_venue():
    response_body = request.get_json()
    venue = Venue(venue_name=response_body["venue_name"],
                  address=response_body["address"],
                  state=response_body["state"],
                  zip_code=response_body["zip_code"],
                  phone_number=response_body["phone_number"],
                  venue_capacity=response_body["venue_capacity"],
                  music_Type=response_body["music_Type"],
                  in_out=response_body["in_out"],
                  hiring=response_body["hiring"],
                  pay_rate=response_body["pay_rate"],
                  fees=response_body["fees"],
                  equipment=response_body["equipment"],
                  image=response_body["image"],
                  instagram=response_body["instagram"],
                  facebook=response_body["facebook"],
                  twitter=response_body["twitter"],
                  tiktok=response_body["tiktok"],
                  soundcloud=response_body["soundcloud"],
                  spotify=response_body["spotify"],)
    db.session.add(venue)
    db.session.commit()
    return jsonify(response_body = response_body), 200

