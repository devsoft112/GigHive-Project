"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Artist, Venue
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


artists_var = [{ "username" : "artist1", "email" : "test", "password" : "test" }]

# to populate the artist cards on the front

@api.route('/artists', methods=['GET'])
def artist_get():
    artists = Artist.query.all()
    serialized_artists = []
    for artist in artists:
        serialized_artists.append(artist.serialize())
    

    return jsonify(serialized_artists), 200

#to populate the venue cards on the front

@api.route('/venues', methods=['GET'])
def venue_get():
    venues = Venue.query.all()
    serialized_venues = []
    for venue in venues:
        serialized_venues.append(venue.serialize())

    return jsonify(serialized_venues), 200

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
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    access_token = create_access_token(identity=username)
    db.session.add(user)
    db.session.add(user)
    db.session.commit()
    return jsonify(response_body, access_token), 200

# to authenticate your users(login) and return JWTs.
@api.route('/login', methods=['POST'])
def login_user():
    response_body = request.get_json()
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=username)
        return jsonify(response_body, access_token), 200
    else:
        return jsonify(response_body), 401

# to sign up artists
@api.route('/register/artist', methods=['POST'])
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
                    )
    print("this is artist: ", artist)
    db.session.add(artist)
    db.session.commit()
    return jsonify(response_body), 200

# to sign up venues
@api.route('/register/venue', methods=['POST'])
def register_venue():
    response_body = request.get_json()
    venue = Venue(venue_name=response_body["venue_name"],
                  address=response_body["address"],
                  city=response_body["city"],
                  state=response_body["state"],
                  zip_code=response_body["zip_code"],
                  phone_number=response_body["phone_number"],
                  venue_capacity=response_body["venue_capacity"],
                  music_type=response_body["music_type"],
                  in_out=response_body["in_out"],
                  hiring=response_body["hiring"],
                  pay_rate=response_body["pay_rate"],
                  fees=response_body["fees"],
                  equipment=response_body["equipment"],
                  about=response_body["about"],
                #   images=response_body["images"],
                  instagram=response_body["instagram"],
                  facebook=response_body["facebook"],
                  twitter=response_body["twitter"],
                  tiktok=response_body["tiktok"],
                  soundcloud=response_body["soundcloud"],
                  spotify=response_body["spotify"])
    print("this is venue: ", venue)
    db.session.add(venue)
    db.session.commit()
    return jsonify(response_body), 200

