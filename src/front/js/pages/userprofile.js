import React from "react";
import { Link, useParams } from "react-router-dom";

export const UserProfile = () => {
  return (
    <div className="container">
      <div className="row mx-2 py-auto align-content-center">
        <div className="col-md-1 my-auto p-0">
          <b>I am a:</b>
        </div>
        <Link to="/register/venues">
          <button type="button">Venue </button>
        </Link>
        <Link to="/register/artist">
          <button type="button">Artist </button>
        </Link>
      </div>
    </div>
  );
};
