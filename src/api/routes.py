"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Artist, Venue
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/artist', methods=['GET'])
def artist_get():
    artists = Artist.query.all()
    serialized_artists = []
    for artist in artists:
        serialized_artists.append(artist.serialize())
    

    return jsonify(serialized_artists), 200

@api.route('/venues', methods=['GET'])
def venues_get():
    venues = Venue.query.all()
    serialized_venues = []
    for venue in venues:
        serialized_venues.append(venue.serialize())
    return jsonify(serialized_venues), 200

# @api.route('/register', methods=['POST'])
# def create_user():
#     request_body = request.get_json()
#     email = request_body.get('email')
#     password = request_body.get('password')
#     username = request_body.get('username')

#     if not request_body["username"]:
#         return jsonify({"msg": "Name is required"}), 400
#     if not request_body["email"]:
#         return jsonify({"msg": "Email is required"}), 400
#     if not request_body["password"]:
#         return jsonify({"msg": "Password is required"}), 400

#     user = User.query.filter_by(email=email).first()
#     if user is not None:
#         return jsonify({'message': 'User already exists'}), 400

#     new_user = User(email=email, password=password, username=username)
#     db.session.add(new_user)
#     db.session.commit()
#     return jsonify(new_user.serialize()), 201


# @api.route('/register', methods=['POST'])
# def login_user():
#     user = User.query.filter_by(id=id).first()
#     if user is None:
#         return jsonify(User.serialize()), 200
#     return jsonify({'message': 'User does not exist'}), 400