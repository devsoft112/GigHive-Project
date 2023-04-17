import React, { useContext, useState } from "react";

import "../../styles/editUserProfile.css";
import propTypes from "prop-types";

export function EditUserProfile() {
  const [editMode, setEditMode] = useState(false)
  const editToggle = () => {
    editMode == true ? setEditMode(false): setEditMode(true)
    console.log(editMode)
  }
  return (
    <div className="container-fluid">
      <div className="row text-center mt-2">
        <h2>Your Profile Info</h2>
        <button className="btn btn-success" onClick={editToggle}>EDIT?</button>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row align-items-start p-2">
            <h4 className="info-header">Your Basic Info</h4>
          </div>
          {/* <div className="row my-0 mx-2">
            <b>First Name:</b>{editMode == false ? {artists[user_id].first_name} : <input type="text" value={props.first_name}></input>}
          </div> */}
          <div className="row my-0 mx-2">
            <b>Last Name:</b> {props.last_name}
          </div>
          <div className="row my-0 mx-2">
            <b>Email:</b> {props.last_name}
          </div>
          {/* -----Artist Info----- */}
          <div className="row align-items-start p-2">
            <h4 className="info-header">Artist Info</h4>
          </div>
          <div className="row my-0 mx-2">
            <b>Artist Name:</b> {props.artist_name}
          </div>
          <div className="row my-0 mx-2">
            <b>Artist Info:</b> {props.artist_info}
          </div>
          <div className="row my-0 mx-2">
            <b>Genre:</b> {props.genre}
          </div>
          <div className="row my-0 mx-2">
            <b>Performance Type:</b> {props.performance_type}
          </div>
          <div className="row align-items-start p-2">
            <h4 className="info-header">Social Info</h4>
          </div>
          <div className="row my-0 mx-2">
            <b>Instagram Handle:</b> {props.instagram}
          </div><div className="row my-0 mx-2">
            <b>Facebook Handle:</b> {props.facebook}
          </div><div className="row my-0 mx-2">
            <b>Twitter Handle:</b> {props.twitter}
          </div><div className="row my-0 mx-2">
            <b>TikTok Handle:</b> {props.tiktok}
          </div><div className="row my-0 mx-2">
            <b>Soundcloud Handle:</b> {props.soundcloud}
          </div><div className="row my-0 mx-2">
            <b>Spotify Handle:</b> {props.spotify}
          </div>
          {/* -----Venue Info----- */}
          <div className="row align-items-start p-2">
            <h4 className="info-header">Venue Info</h4>
          </div>
          <div className="row my-0 mx-2">
          <div className="col-md-3">
              <b>Venue Name:</b> {props.venue_name}
            </div><div className="col-md-3">
              <b>Phone Number:</b> {props.phone_number}
            </div>
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              <b>Street Address:</b> {props.address}
            </div>
            <div className="col-md-3">
              <b>City:</b> {props.city}
            </div> 
            <div className="col-md-3">
              <b>State:</b> {props.state}
            </div>
            <div className="col-md-3">
              <b>Zipcode:</b> {props.zip_code}
            </div>    
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              <b>Capacity:</b> {props.venue_capacity}
            </div>
            <div className="col-md-3">
              <b>Music Type:</b> {props.music_type}
            </div> 
            <div className="col-md-3">
              <b>Indoor/Outdoor Staging?:</b> {props.in_out}
            </div>
            
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              <b>Hiring:</b> {props.hiring}
            </div>
            <div className="col-md-3">
              <b>Pay Rate:</b> {props.pay_rate}
            </div>
            <div className="col-md-3">
              <b>Fees:</b> {props.fees}
            </div>
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              <b>Equipment Info:</b> {props.equipment}
            </div>
          </div>
          <div className="row my-0 mx-2">
            <b>Instagram Handle:</b> {props.instagram}
          </div><div className="row my-0 mx-2">
            <b>Facebook Handle:</b> {props.facebook}
          </div><div className="row my-0 mx-2">
            <b>Twitter Handle:</b> {props.twitter}
          </div><div className="row my-0 mx-2">
            <b>TikTok Handle:</b> {props.tiktok}
          </div><div className="row my-0 mx-2">
            <b>Soundcloud Handle:</b> {props.soundcloud}
          </div><div className="row my-0 mx-2">
            <b>Spotify Handle:</b> {props.spotify}
          </div>    
        </div>
      </div>
    </div>
  );
}
