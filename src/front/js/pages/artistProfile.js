import React, { useContext, useState } from "react";

import "../../styles/artistProfile.css";

import { Context } from "../store/appContext";

export function ArtistProfile() {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row px-2 gx-3">
        <div className="col-md-5 profile-main-img">Image goes here</div>
        <div class="col-md-7">
          <div className="artistName">
            <h2 className="artistName">Artist Name</h2>
            <button className="btn btn-primary">Message</button>
            <div>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
