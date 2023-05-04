import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userprofile.css";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const user = store.user;
  const artist = store.artists;
  const history = useNavigate();
  console.log(user.artist, "userprofile");

  // Check if user is authenticated
  useEffect(() => {
    if (!store.isAuthenticated) {
    }
  }, [store.isAuthenticated, history]);
  useEffect(() => {
    if (!store.token) {
      history("/login");
    } else {
      actions.getUser();
      actions.getArtist();
    }
  }, [store.token]);

  return (
    <div className="container">
      <div className="user-card">
        <img
          className="card-img-top "
          style={{ width: 200, height: 200 }}
          src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
          alt=""
        ></img>
        <div className="user-card-body">
          <h1 classname="user-card-title"> Welcome {user.username}</h1>
          <p className="user-card-text">
            {" "}
            Your name : {user.first_name} {user.last_name}
          </p>
          <p className="user-card-text"> Your Email {user.email}</p>
        </div>
      </div>
      <div className="Jumbotron">
        <div className="card">
          <p>I am {user.first_name} and i would like to Add a</p>
        </div>
        <Link to="/register/venue">
          <button type="button">Venue </button>
        </Link>
        <Link to="/register/artist">
          <button type="button">Artist </button>
        </Link>
        <Link to="/myprofile">
          <button type="button">Edit Your Profile</button>
        </Link>
      </div>
      {/* map users artists and venues on profile */}
      {user.artists &&
        user.artists.map((artist) => {
          return (
            <div key={artist.id} className="artists-container">
              <div className="card">
                <p className="card-title">Artist Name :{artist.artist_name}</p>
                <p className="card-text">Genre :{artist.genre}</p>
                <p className="card-text">Instagram :{artist.instagram}</p>
                <p className="card-text">
                  Performance Type :{artist.performance_type}
                </p>
                <p className="card-text">TikTok : {artist.tiktok}</p>
                <p className="card-text">Twitter : {artist.twitter}</p>
                <p className="card-text">Spotify : {artist.spotify}</p>
                <p className="card-text">Sound Cloud : {artist.soundcloud}</p>
                <p className="card-text">Facebook: {artist.facebook}</p>
                <p className="card-text">About Info : {artist.about_info}</p>
              </div>
            </div>
          );
        })}
      {user.venues &&
        user.venues.map((venue) => {
          return (
            <div key={venue.id} className="venue-container">
              <div className="card">
                <p className="card-title">Venue Name :{venue.venue_name}</p>
                <p className="card-text">Address :{venue.address}</p>
                <p className="card-text">City :{venue.city}</p>
                <p className="card-text">State :{venue.state}</p>
                <p className="card-text">Zip Code : {venue.zip_code}</p>
                <p className="card-text">Phone Number : {venue.phone_number}</p>
                <p className="card-text">Spotify : {venue.spotify}</p>
                <p className="card-text">Sound Cloud : {venue.soundcloud}</p>
                <p className="card-text">Facebook: {venue.facebook}</p>
                <p className="card-text">About Info : {venue.aboout_info}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

