import React, { useContext, useState } from "react";

import "../../styles/editUserProfile.css";
import propTypes from "prop-types";

export function EditUserProfile(props) {
  return (
    <div className="container-fluid">
      <div className="row text-center mt-2">
        <h2>My Profile Info</h2>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row align-items-start p-2">
            <h4 className="info-header">Your Basic Info</h4>
          </div>
          <div className="row my-0 mx-2">
            <b>First Name:</b> {props.first_name}
          </div>
          <div className="row my-0 mx-2">
            <b>Last Name:</b> {props.last_name}
          </div>
        </div>
      </div>
    </div>
  );
}
