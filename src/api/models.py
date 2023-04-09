from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique= True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    venue = db.relationship('Venue',  lazy=True)
    artist = db.relationship('Artist', back_populates="user", lazy=True) 

    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
            # do not serialize the password, its a security breach
        }

class Venue(db.Model):
    __tablename__ = "venue"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(120), nullable=False)
    venue_name = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    state = db.Column(db.String(120), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    phone_number = db.Column(db.Integer, nullable=False)
    venue_capacity = db.Column(db.String(120), nullable=False)
    music_type = db.Column(db.String(120), nullable = False)
    in_out = db.Column(db.String(120), nullable=False)
    hiring = db.Column(db.Boolean, nullable=False)
    pay_rate = db.Column(db.String(120), nullable=False)
    fees = db.Column(db.String(120), nullable=False)
    equipment = db.Column(db.String(120), nullable=False)
    image = db.Column(db.String(120), nullable=True)
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
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
        
class Artist(db.Model):
    __tablename__ = "artist"

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    password = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(120), nullable=False)
    artist_name = db.Column(db.String(120), nullable=False)
    genre = db.Column(db.String(120), nullable=False)
    performance_type = db.Column(db.String(120), nullable=False)
    image = db.Column(db.String(120), nullable=True)   
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    user = db.relationship('User', back_populates="artist", lazy=True) 

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


class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(120), nullable=False)
    id_sender = db.Column(db.Integer, nullable=False)
    id_receiver = db.Column(db.Integer, nullable=False)
    sent_date = db.Column(db.Integer, nullable=False)

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

