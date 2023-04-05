"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
    venues = Venues.query.all()
    serialized_venues = []
    for venue in venues:
        serialized_venues.append(venue.serialize())
    

    return jsonify(serialized_venues), 200