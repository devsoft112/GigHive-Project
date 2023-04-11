import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center my-2">
        <h2>Sign Up</h2>
      </div>
      <div className="row signup-user-type-select">
        <h4 className="signup-user-type-select">I am a:</h4>

        <Link to="/registervenue">
          <button className="account-type-button btn btn-success">Venue</button>
        </Link>
        <Link to="/registerartist">
          <button className="account-type-button btn btn-primary mx-2">
            Artist
          </button>
        </Link>
      </div>
    </div>
  );
};
