import React, { useContext, useState } from "react";

import "../../styles/artistProfile.css";

import { Context } from "../store/appContext";

export function ArtistProfile() {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row px-2 gx-3">
        <div className="col-md-5 mt-2 rounded profile-main-img">
          Image goes here
        </div>
        <div className="col-md-7">
          <div class="d-flex flex-row mb-0">
            <div>
              <h2 className="artistName m-0">Artist Name</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className="btn btn-sm btn-primary">Message</button>
            </div>
          </div>
          <div className="row mt-0">
            <div>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
          <div className="row mt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
