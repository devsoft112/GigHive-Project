from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)# public
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(120), unique= True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    venues = db.relationship('Venue', backref="venuesUser", lazy='subquery') 
    artists = db.relationship('Artist', backref="artistUser", lazy='subquery') 
    favorites = db.Column('Favorites', db.Integer, db.ForeignKey('favorites.id'))
    
    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "email": self.email,
            "artists": list(map(lambda x: x.serialize(), self.artists)),
            "venues": list(map(lambda x: x.serialize(), self.venues)),
            "favorites": list(map(lambda x: x.serialize(), self.favorites))

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
    phone_number = db.Column(db.String(120), nullable=False)
    venue_capacity = db.Column(db.String(120), nullable=False)
    music_type = db.Column(db.String(120), nullable = False)
    in_out = db.Column(db.String(120), nullable=False)
    hiring = db.Column(db.String(120), nullable=False)
    pay_rate = db.Column(db.String(120), nullable=False)
    fees = db.Column(db.String(120), nullable=False)
    equipment = db.Column(db.String(), nullable=False)
    about_info = db.Column(db.String(), nullable=True)
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
    images = db.Column(db.String(), nullable=True)
    user_id = db.Column('User', db.Integer, db.ForeignKey('user.id'),nullable=False)
    favorites_id = db.Column('Favorites', db.Integer, db.ForeignKey('favorites.id'))

    
    def __repr__(self):
         return f'<Venue {self.venue_name}>'
     
    def serialize(self):
        return {
            "id": self.id,
            "venue_name": self.venue_name,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "phone_number": self.phone_number,
            "venue_capacity": self.venue_capacity,
            "music_type": self.music_type,
            "in_out": self.in_out,
            "hiring": self.hiring,
            "pay_rate": self.pay_rate,
            "fees": self.fees,
            "equipment": self.equipment,
            "about_info": self.about_info,
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
    about_info = db.Column(db.String(), nullable=True)
    instagram = db.Column(db.String(120), nullable=True)
    facebook = db.Column(db.String(120), nullable=True)
    twitter = db.Column(db.String(120), nullable=True)
    tiktok = db.Column(db.String(120), nullable=True)
    soundcloud = db.Column(db.String(120), nullable=True)
    spotify = db.Column(db.String(120), nullable=True)
    images = db.Column(db.String(), nullable=True)
    user_id = db.Column('User', db.Integer, db.ForeignKey('user.id'),nullable=False)
    favorites_id = db.Column('Favorites', db.Integer, db.ForeignKey('favorites.id'))



    def __repr__(self):
        return f'<Artist {self.artist_name}>'
    
    def serialize(self):
        return {
        "id": self.id,
        "artist_name": self.artist_name,
        "genre": self.genre,
        "performance_type": self.performance_type,
        "about_info": self.about_info,
        "instagram": self.instagram,
        "facebook": self.facebook,
        "twitter": self.twitter,
        "tiktok": self.tiktok,
        "soundcloud": self.soundcloud,
        "spotify": self.spotify, 
        "images": self. images
    }


class Favorites(db.Model):
    __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True)# public
    user = db.relationship('User', backref="userFavorites", lazy='subquery') 
    venues = db.relationship('Venue', backref="venueFavorites", lazy='subquery') 
    artists = db.relationship('Artist', backref="artistFavorites", lazy='subquery') 

    
    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user": self.user,
            "artists": list(map(lambda x: x.serialize(), self.artists)),
            "venues": list(map(lambda x: x.serialize(), self.venues))
            # do not serialize the password, its a security breach
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
            "sent_date": self.sent_date
        }

