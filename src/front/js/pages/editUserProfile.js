import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/editUserProfile.css";
import propTypes from "prop-types";

export function EditUserProfile(props) {
  const {store, actions} = useContext(Context)
  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    actions.getCurrentUser();
  }, []);

  //----useState Hooks for Artist Info---
  // const [artistGenre, setArtistGenre] = useState(user.artist.genre);
  // const [artistInstagram, setArtistInstagram] = useState(user.artist.instagram);
  // const [tikTok, setTikTok] = useState(user.artist.tiktok);
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [spotify, setSpotify] = useState("");
  const [artistName, setArtistName] = useState("");
  const [performance_type, setPerformance_type] = useState("Other");



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
          <div className="row my-0 pb-0 mx-2 d-flex">
            {editMode == false ?<><p className="mb-0"><b>First Name: </b>TEST</p></> : <><p className="mb-0"><b>First Name: </b><input type="text" value="TEST"></input></p></>}
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Last Name: </b>TEST</p></> : <><p className="mb-0"><b>Last Name: </b><input type="text" value="TEST"></input></p></>}
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Email: </b>TEST</p></> : <><p className="mb-0"><b>Email: </b><input type="text" value="TEST"></input></p></>}
          </div>
          {/* -----Artist Info----- */}
          <div className="row align-items-start p-2">
            <h4 className="info-header">Artist Info</h4>
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Artist Name: </b>TEST</p></> : <><p className="mb-0"><b>Artist Name: </b><input type="text" value="TEST"></input></p></>}
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Artist Info: </b>TEST</p></> : <><p className="mb-0"><b>Artist Info: </b><input type="text" value="TEST"></input></p></>}
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Genre: </b>TEST</p></> : <><p className="mb-0"><b>Genre: </b><select
              className="form-control"
              id="artistMusicGenre"
              
            >
              <option defaultValue>Choose...</option>
              <option value="general">General</option>
              <option value="rock">Rock</option>
              <option value="hip hop">Hip Hop</option>
              <option value="jazz">Jazz</option>
              <option value="electronic">Electronic</option>
              <option value="classical">Classical</option>
              <option value="other">Other</option>
            </select></p></>}
          </div>
          <div className="row my-0 mx-2">
          {editMode == false ?<><p className="mb-0"><b>Performance Type: </b>TEST</p></> : <><p className="mb-0"><b>Performance Type: </b><select
            className="form-control"
            id="ArtistType"

          >
            <option defaultValue>Choose...</option>
            <option value="general">Vocalist</option>
            <option value="rock">Rapper</option>
            <option value="rock">Instrumentalist</option>
            <option value="hip hop">Band</option>
            <option value="jazz">DJ</option>
            <option value="electronic">Other</option>
          </select></p></>}
          </div>
          <div className="row align-items-start p-2">
            <h4 className="info-header">Artist Social Info</h4>
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Instagram Handle: </b>TEST</p></> : <><p className="mb-0"><b>Instagram Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Facebook Handle: </b>TEST</p></> : <><p className="mb-0"><b>Facebook Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Twitter Handle: </b>TEST</p></> : <><p className="mb-0"><b>Twitter Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>TikTok Handle: </b>TEST</p></> : <><p className="mb-0"><b>TikTok Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Soundcloud Handle: </b>TEST</p></> : <><p className="mb-0"><b>Soundcloud Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Spotify Handle: </b>TEST</p></> : <><p className="mb-0"><b>Spotify Handle: </b><input type="text" value="TEST"></input></p></>}
          </div>
          {/* -----Venue Info----- */}
          <div className="row align-items-start p-2">
            <h4 className="info-header">Venue Info</h4>
          </div>
          <div className="row my-0 mx-2">
          <div className="col-md-3">
            {editMode == false ?<><p className="mb-0"><b>Venue Name: </b>TEST</p></> : <><p className="mb-0"><b>Venue Name: </b><input type="text" value="TEST"></input></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Phone Number: </b>9999999999</p></> : <><p className="mb-0"><b>Phone Number: </b><input type="number" value="9999999999"></input></p></>}
            </div>
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Street Address: </b>TEST</p></> : <><p className="mb-0"><b>Street Address: </b><input type="text" value="TEST"></input></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>City: </b>TEST</p></> : <><p className="mb-0"><b>City: </b><input type="text" value="TEST"></input></p></>}
            </div> 
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>State: </b>TEST</p></> : <><p className="mb-0"><b>State: </b><select
            className="form-control"
            id="state"
            // onChange={(e) => setLocationState(e.target.value)}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Zipcode: </b>99999</p></> : <><p className="mb-0"><b>Zipcode: </b><input type="number" value="99999"></input></p></>}
            </div>    
          </div>
          <div className="row my-0 mx-2 d-flex">
            <div className="col-md-3 d-flex">
              {editMode == false ?<><p className="mb-0"><b>Capacity: </b>999</p></> : <><p className="mb-0"><b>Capacity: </b><input type="number" value="999" id="venueCapacity"></input></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Music Type: </b>TEST</p></> : <><label htmlFor="VenueMusicGenre" className="mb-0"><b>Music Type: </b></label><select
            className="form-control"
            id="VenueMusicGenre"
            // onChange={(e) => setMusicGenre(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="general">General</option>
            <option value="rock">Rock</option>
            <option value="hip hop">Hip Hop</option>
            <option value="jazz">Jazz</option>
            <option value="electronic">Electronic</option>
            <option value="classical">Classical</option>
            <option value="other">Other</option>
          </select></>}
            </div> 
            <div className="col-md-3 select-inline">
              {editMode == false ?<><p className="mb-0"><b>Indoor/Outdoor Staging: </b>TEST</p></> : <><p className="mb-0"><b>Indoor/Outdoor Staging: </b><select
            className="form-control"
            id="staging"
            // onChange={(e) => setStaging(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="both">Both</option>
          </select></p></>}
            </div>
            
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Hiring: </b>TEST</p></> : <><p className="mb-0"><b>Hiring: </b><select
              className="form-control"
              id="isHiring"
              // onChange={(e) => setIsHiring(e.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Pay Rate: </b>99</p></> : <><p className="mb-0"><b>Pay Rate: </b><input type="number" value="99"></input></p></>}
            </div>
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Fees: </b>99</p></> : <><p className="mb-0"><b>Fees: </b><input type="number" value="99"></input></p></>}
            </div>
          </div>
          <div className="row my-0 mx-2">
            <div className="col-md-3">
              {editMode == false ?<><p className="mb-0"><b>Equipment Info: </b>TEST</p></> : <><p className="mb-0"><b>Equipment Info: </b><input type="text" value="TEST"></input></p></>}
            </div>
          </div>
          <div className="row align-items-start p-2">
            <h4 className="info-header">Venue Social Info</h4>
          </div>
          <div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Instagram Handle: </b>TEST</p></> : <><p className="mb-0"><b>Instagram Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Facebook Handle: </b>TEST</p></> : <><p className="mb-0"><b>Facebook Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Twitter Handle: </b>TEST</p></> : <><p className="mb-0"><b>Twitter Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>TikTok Handle: </b>TEST</p></> : <><p className="mb-0"><b>TikTok Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Soundcloud Handle: </b>TEST</p></> : <><p className="mb-0"><b>Soundcloud Handle: </b><input type="text" value="TEST"></input></p></>}
          </div><div className="row my-0 mx-2">
            {editMode == false ?<><p className="mb-0"><b>Spotify Handle: </b>TEST</p></> : <><p className="mb-0"><b>Spotify Handle: </b><input type="text" value="TEST"></input></p></>}
          </div>   
        </div>
      </div>
    </div>
  );
}
