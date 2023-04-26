import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const users = store.users;
  const history = useNavigate();
  console.log(users);

  // Check if user is authenticated
  useEffect(() => {
    if (!store.isAuthenticated) {
    }
  }, [store.isAuthenticated, history]);


  

  return (
    <div className="container">
      <div className="row mx-2 py-auto align-content-center">
        <div className="col-md-1 my-auto p-0">
          <b>I am a:</b>
        </div>
        <Link to="/register/venue">
          <button type="button">Venue </button>
        </Link>
        <Link to="/register/artist">
          <button type="button">Artist </button>
        </Link>
      </div>
    </div>
  );
};
