from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(120), unique= True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    venue = db.relationship('Venue',  lazy=True)
    artist = db.relationship('Artist', lazy=True) 

    
    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Venue(db.Model):
    __tablename__ = "venue"

    id = db.Column(db.Integer, primary_key=True)
    venue_name = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    city = db.Column (db.String(120), nullable=False) 
    state = db.Column(db.String(120), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    phone_number = db.Column(db.Integer, nullable=False)
    venue_capacity = db.Column(db.String(120), nullable=False)
    music_type = db.Column(db.String(120), nullable = False)
    in_out = db.Column(db.String(120), nullable=False)
    hiring = db.Column(db.String(120), nullable=False)
    pay_rate = db.Column(db.String(120), nullable=False)
    fees = db.Column(db.String(120), nullable=False)
    equipment = db.Column(db.String(120), nullable=False)
    about = db.Column(db.String(120), nullable=True)
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))

    
    def __repr__(self):
         return f'<Venue {self.venue_name}>'
     
    def serialize(self):
        return {
            "id": self.id,
            "venue_name": self.venue_name,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_Code,
            "phone_number": self.phone_Number,
            "venue_capacity": self.venue_capacity,
            "music_type": self.music_Type,
            "in_out": self.in_out,
            "hiring": self.hiring,
            "pay_rate": self.pay_rate,
            "fees": self.fees,
            "equipment": self.equipment,
            "about": self.about,
            "instagram": self.instagram,
            "facebook": self.facebook,
            "twitter": self.twitter,
            "tiktok": self.tiktok,
            "soundcloud": self.soundcloud,
            "spotify": self.spotify,
            "images": self.images
        }
        
class Artist(db.Model):
    __tablename__ = "artist"

    id = db.Column(db.Integer, primary_key=True)
    artist_name = db.Column(db.String(120), nullable=False)
    genre = db.Column(db.String(120), nullable=False)
    performance_type = db.Column(db.String(120), nullable=False)
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))


    def __repr__(self):
        return f'<Artist {self.first_name}>'
    
    def serialize(self):
        return {
        "id": self.id,
        "artist_name": self.artist_name,
        "genre": self.genre,
        "performance_type": self.performance_type,
        "instagram": self.instagram,
        "facebook": self.facebook,
        "twitter": self.twitter,
        "tiktok": self.tiktok,
        "soundcloud": self.soundcloud,
        "spotify": self.spotify,
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

