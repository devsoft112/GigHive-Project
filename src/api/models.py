from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.column(db.String(120), unique=True, primary_key= True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, primary_key=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    venue_id = db.relationship('Venue', lazy=True)
    artist_id = db.relationship('Artist', lazy=True)

    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
            # do not serialize the password, its a security breach
        }

class Venue(db.models):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    phone_number = db.Column(db.Integer, nullable=False)
    venue_capacity = db.column(db.String, nullable=False)
    music_type = db.Column(db.String, nullable = False)
    paying_fees = db.column(db.String, nullable=False)
    in_out = db.column(db.String, nullable=False)
    equipment = db.column(db.String, nullable=False)
    parking_lot = db.column(db.String, nullable=False)
    image = db.column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))

    
    def __repr__(self):
         return f'<Venue {self.name}>'
     
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "address": self.address,
            "zip_code": self.zip_Code,
            "phone_number": self.phone_Number,
            "venue_capacity": self.venue_capacity,
            "music_type": self.music_Type,
            "paying_fees": self.paying_fees,
            "in_out": self.in_out,
            "equipment": self.equipment,
            "parking_lot": self.parking_lot,
            "image": self.image
        }
        
class Artist(db.models):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    type_of_music = db.column(db.String, nullable=False)
    social_links = db.column(db.String, nullable=False)
    type_of_artist = db.column(db.String, nullable=False)
    description = db.column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))

    def __repr__(self):
        return f'<Artist {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "type_of_music": self.type_of_music,
            "social_links": self.social_links,
            "type_of_artist": self.type_of_artist,
            "description": self.description
        }


class Messages(db.models):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    id_sender = db.column(db.Integer, nullable=False)
    id_receiver = db.column(db.Integer, nullable=False)
    sent_date = db.column(db.Integer, nullable=False)

    def __repr__(self):
        return f'<Messages {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "id_sender": self.id_sender,
            "id_receiver": self.id_receiver,
            "sent_date": self.sent_date,
        }

