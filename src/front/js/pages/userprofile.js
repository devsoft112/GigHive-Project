import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userprofile.css";
import { Row } from "react-bootstrap";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const user = store.user;
  const history = useNavigate();

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
      actions.getVenue();
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
          <h1 classname="user-card-title" id="special">
            {" "}
            {user.username}'s Profile Page
          </h1>
          <p className="user-card-text">
            {" "}
            Your name :{" "}
            <strong id="special">
              {user.first_name} {user.last_name}{" "}
            </strong>
          </p>
          <p className="user-card-text"> Your Email : {user.email}</p>
        </div>
        <div align="center">
          <p id="addi">
            Hello <strong id="special">{user.first_name}</strong> would you like
            to add a
          </p>
          <Link to="/register/venue">
            <button id="venuebut" type="button">
              Venue{" "}
            </button>
          </Link>
          <Link to="/register/artist">
            <button id="artistbut" type="button">
              Artist{" "}
            </button>
          </Link>
          <p id="addi">Or</p>
          <Link to="/myprofile">
            <button type="button" className="purplebutton">
              Edit Your Profile
            </button>
          </Link>{" "}
        </div>
      </div>
      {/* map users artists and venues on profile */}
      <h2> Your Artist(s) </h2>
      <Row lg={3} md={4} sm={6}>
        {user.artists &&
          user.artists.map((artist, id) => {
            return (
              <>
                <div className="container d-flex" key={artist.id}>
                  <div className="flex-fill card hovercard">
                    <div className="cardheader"></div>
                    <div className="avatar">
                      <img
                        alt=""
                        src="https://www.stopthebreaks.com/wp-content/uploads/2020/10/iStock-161838634.jpg"
                      />
                    </div>
                    <div className="info">
                      <div className="title">
                        <a href={"/artists/" + id}>{artist.artist_name}</a>
                      </div>
                      <div className="desc">
                        {artist.genre} {artist.performance_type}
                      </div>
                      <div className="desc">
                        About Info : {artist.about_info}
                      </div>
                    </div>
                    <div className="bottom">
                      {artist?.twitter ? (
                        <a
                          className="btn btn-primary btn-twitter btn-sm"
                          href={`http://twitter.com/${artist?.twitter}`}
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      ) : null}
                      {artist?.soundcloud ? (
                        <a
                          className="btn btn-danger btn-sm"
                          rel="publisher"
                          href={`http://soundcloud.com/${artist?.soundcloud}`}
                        >
                          <i className="fa-brands fa-soundcloud"></i>
                        </a>
                      ) : null}
                      {artist?.facebook ? (
                        <a
                          className="btn btn-primary btn-sm"
                          rel="publisher"
                          href={`http://facebook.com/${artist.facebook}`}
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      ) : null}
                      {artist?.instagram ? (
                        <a
                          className="btn btn-dark btn-sm"
                          rel="publisher"
                          href={`http://instagram.com/${artist?.instagram}`}
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      ) : null}
                      {artist?.spotify ? (
                        <a
                          className="btn btn-success btn-sm"
                          rel="publisher"
                          href={`http://spotify.com/${artist?.spotify}`}
                        >
                          <i className="fa-brands fa-spotify"></i>
                        </a>
                      ) : null}
                      {artist?.tiktok ? (
                        <a
                          className="btn btn-light btn-sm"
                          rel="publisher"
                          href={`http://tiktok.com/@${artist?.tiktok}`}
                        >
                          <i className="fa-brands fa-tiktok"></i>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Row>
      <h2> Your Venue(s) </h2>
      <Row id="arti" lg={3}>
        {user.venues &&
          user.venues.map((venue, id) => {
            return (
              <>
                <div className="container d-flex" key={venue.id}>
                  <div className="flex-fill card hovercard">
                    <div className="cardheader"></div>
                    <div className="avatar">
                      <img
                        alt=""
                        src="https://saltplatecity.com/wp-content/uploads/2019/10/vivint-smart-home-concert-venue-salt-lake-city.jpg"
                      />
                    </div>
                    <div className="info">
                      <div className="title">
                        <a href={"/venues/" + id}>{venue.venue_name}</a>
                      </div>
                      <div className="desc" >
                        <i className="fa-solid fa-phone fa-bounce"></i>
                        {venue.phone_number}
                      </div>
                      <div className="desc">
                        Address :{venue.address} {venue.city}, {venue.state}
                      </div>
                      <div className="desc">{venue.zip_code}</div>
                      <div className="desc">
                        About Info : {venue.about_info}
                      </div>
                    </div>
                    <div className="bottom">
                      {venue?.twitter ? (
                        <a
                          className="btn btn-primary btn-twitter btn-sm"
                          href={`http://twitter.com/${venue?.twitter}`}
                          target="_blank"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      ) : null}
                      {venue?.soundcloud ? (
                        <a
                          className="btn btn-danger btn-sm"
                          rel="publisher"
                          href={`http://soundcloud.com/${venue?.soundcloud}`}
                        >
                          <i className="fa-brands fa-soundcloud"></i>
                        </a>
                      ) : null}
                      {venue?.facebook ? (
                        <a
                          className="btn btn-primary btn-sm"
                          rel="publisher"
                          href={`http://facebook.com/${venue.facebook}`}
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      ) : null}
                      {venue?.instagram ? (
                        <a
                          className="btn btn-dark btn-sm"
                          rel="publisher"
                          href={`http://instagram.com/${venue?.instagram}`}
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      ) : null}
                      {venue?.spotify ? (
                        <a
                          className="btn btn-success btn-sm"
                          rel="publisher"
                          href={`http://spotify.com/${venue?.spotify}`}
                        >
                          <i className="fa-brands fa-spotify"></i>
                        </a>
                      ) : null}
                      {venue?.tiktok ? (
                        <a
                          className="btn btn-light btn-sm"
                          rel="publisher"
                          href={`http://tiktok.com/@${venue?.tiktok}`}
                        >
                          <i className="fa-brands fa-tiktok"></i>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </Row>
    </div>
  );
};
