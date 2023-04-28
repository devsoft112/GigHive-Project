import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userprofile.css";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const users = store.user;
  const artist = store.artists;
  const history = useNavigate();
  console.log(id, "this is from userprofile");

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
          <h1 classname="user-card-title"> Welcome {users.username}</h1>
          <p className="user-card-text">
            {" "}
            Your name : {users.first_name} {users.last_name}
          </p>
          <p className="user-card-text"> Your Email {users.email}</p>
        </div>
      </div>
      <div className="Jumbotron">
        <div className="card">
          <p>I am {users.first_name} and i would like to Add a</p>
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
      <div key={id} className="container">
        <div className="card">
          <p className="card-title">Artist Name :{users.artists}</p>
          <p className="card-text">Genre :{artist.genre}</p>
          <p className="card-text">Instagram :{artist.instagram}</p>
          <p className="card-text">Performance Type :{}</p>
        </div>
      </div>

      {/* {store.users.artists &&
        store.users.artists.map((artist, id) => {
          return (
            <div key={id} className="row mx-2 py-auto align-content-center">
              <div className="col-md-1 my-auto p-0">
                <span>Artist Name :{users.artist_name}</span>
                <span>Genre :{artist.genre}</span>
                <span>Instagram :{artist.instagram}</span>
                <span>Performance Type :{artist_name}</span>
              </div>
            </div>
          );
        })} */}
    </div>
  );
};
