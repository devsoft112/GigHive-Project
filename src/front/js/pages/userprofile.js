import React, { useContext, useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
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
          <h1 classname="user-card-title">
            {" "}
            Welcome to your profile {user.username}
          </h1>
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
      <h1> Your Artist(s) Info </h1>
      {user.artists &&
        user.artists.map((artist) => {
          return (
            <>
              <div key={artist.id} className="card hovercard">
                <div className="cardheader"></div>
                <div className="avatar">
                  <img
                    alt=""
                    src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
                  />
                </div>
                <div className="info">
                  <div className="title">
                    <a target="_blank" href={"artist/" + { artist }}>
                      {artist.artist_name}
                    </a>
                  </div>
                  <div className="desc">{artist.genre}</div>
                  <div className="desc">{artist.performance_type}</div>
                  <div className="desc">About Info : {artist.about_info}</div>
                </div>
                <div className="bottom">
                  <a
                    className="btn btn-primary btn-twitter btn-sm"
                    href={artist.twitter}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-danger btn-sm"
                    rel="publisher"
                    href={artist.soundcloud}
                  >
                    <i className="fa-brands fa-soundcloud"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm"
                    rel="publisher"
                    href={artist.facebook}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-sm"
                    rel="publisher"
                    href={artist.instagram}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-success btn-sm"
                    rel="publisher"
                    href={artist.spotify}
                  >
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                  <a
                    className="btn btn-light btn-sm"
                    rel="publisher"
                    href={artist.tiktok}
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      {user.venues &&
        user.venues.map((venue) => {
          return (
            <div key={venue.id} className="card hovercard">
              <div className="cardheader">
                <div className="avatar">
                  <img
                    alt=""
                    src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-school-building-icon-png-image_1753757.jpg"
                  />
                </div>
                <div className="info">
                  <div className="title">
                    <a target="_blank" href={"venue/" + { venue }}>
                      {venue.venue_name}
                    </a>
                  </div>
                  <div className="desc">Venue Name :{venue.venue_name}</div>
                  <div className="desc">{venue.phone_number}</div>
                  <div className="desc">Address :{venue.address}</div>
                  <div className="desc">City : {venue.city}</div>
                  <div className="desc">State: {venue.state}</div>
                  <div className="desc">Zip Code: {venue.zip_code}</div>
                  <div className="desc">About Info : {venue.about_info}</div>
                </div>
                <div className="bottom">
                  <a
                    className="btn btn-primary btn-twitter btn-sm"
                    href={venue.twitter}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-danger btn-sm"
                    rel="publisher"
                    href={venue.soundcloud}
                  >
                    <i className="fa-brands fa-soundcloud"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm"
                    rel="publisher"
                    href={venue.facebook}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-sm"
                    rel="publisher"
                    href={venue.instagram}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-success btn-sm"
                    rel="publisher"
                    href={venue.spotify}
                  >
                    <i className="fa-brands fa-spotify"></i>
                  </a>
                  <a
                    className="btn btn-light btn-sm"
                    rel="publisher"
                    href={venue.tiktok}
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
