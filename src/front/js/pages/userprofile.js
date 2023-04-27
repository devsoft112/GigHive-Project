import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const users = store.users;
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
      <div className="row mx-2 py-auto align-content-center">
        <div className="col-md-1 my-auto p-0">
          <b>I am a:{users.first_name}</b>
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
      {store.users.artists &&
        store.users.artists.map((artist, id) => {
          return (
            <div key={id} className="row mx-2 py-auto align-content-center">
              <div className="col-md-1 my-auto p-0">
                <span>Artist Name :{artist.artist_name}</span>
                <span>Genre :{artist.genre}</span>
                <span>Instagram :{artist.instagram}</span>
                <span>Performance Type :{artist_name}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
