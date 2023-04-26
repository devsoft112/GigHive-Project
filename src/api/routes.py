"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, make_response
from api.models import db, User, Artist, Venue
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

api = Blueprint('api', __name__)



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

@api.route('/users', methods=['GET'])
def user_get():
    users = User.query.all()
    serialized_users = []
    for user in users:
        serialized_users.append(user.serialize())

    return jsonify(serialized_users), 200

# to sign up users
@api.route('/register', methods=['POST'])
def register_user():
    response_body = request.get_json()
    user = User(
                first_name=response_body['first_name'],
                last_name=response_body['last_name'],
                username=response_body["username"], 
                email=response_body["email"], 
                password = generate_password_hash(response_body["password"])
                )
    print("this is user: ", user)
    username = request.json.get("username", None)
    access_token = create_access_token(identity=username)
    db.session.add(user)
    db.session.commit()
    return jsonify(response_body, access_token), 200

# to authenticate your users(login) and return JWTs.
@api.route("/login", methods=["POST"])
def create_token():
    if request.method == 'POST':
      username = request.json.get("username")
      password = request.json.get("password")

      if not username:
          return jsonify({"msg": "username is required"}), 400
      if not password:
          return jsonify({"msg": "Password is required"}), 400

      user = User.query.filter_by(username=username).first()
      if not user:
          return jsonify({"msg": "username/Password are incorrect"}), 401

      if not check_password_hash(user.password, password):
          return jsonify({"msg": "Username/Password are incorrect"}), 401

      # create token
      expiration = datetime.timedelta(minutes=120)
      access_token = create_access_token(identity= user.id, expires_delta= expiration)
      return jsonify(access_token=access_token)

    return jsonify(msg="wrong user")
    

# to sign up artists
@api.route('/register/artist', methods=['POST'])
@jwt_required()
def register_artist():
    username = get_jwt_identity()
    user=User.query.filter_by(username=username).first()
    response_body = request.get_json()
    artist = Artist(artist_name=response_body["artist_name"],
                    genre=response_body["genre"],
                    performance_type=response_body["performance_type"],
                    instagram=response_body["instagram"],
                    about_info=response_body["about_info"],
                    facebook=response_body["facebook"],
                    twitter=response_body["twitter"],
                    tiktok=response_body["tiktok"],
                    soundcloud=response_body["soundcloud"],
                    spotify=response_body["spotify"],
                    user_id=user.id
                    )

    db.session.add(artist)
    db.session.commit()
    return jsonify(response_body), 200

#  making register/artist private

# to sign up venues
@api.route('/register/venue', methods=['POST'])
@jwt_required()
def register_venue():
    username = get_jwt_identity()
    user=User.query.filter_by(username=username).first()
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
                  about_info=response_body["about_info"],
                #   images=response_body["images"],
                  instagram=response_body["instagram"],
                  facebook=response_body["facebook"],
                  twitter=response_body["twitter"],
                  tiktok=response_body["tiktok"],
                  soundcloud=response_body["soundcloud"],
                  spotify=response_body["spotify"],
                  user_id=user.id
                  )
    db.session.add(venue)
    db.session.commit()
    return jsonify(response_body), 200

