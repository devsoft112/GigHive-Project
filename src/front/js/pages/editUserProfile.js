import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Row } from "react-bootstrap";
import "../../styles/editUserProfile.css";
import propTypes from "prop-types";
import { UserProfile } from "./userprofile";
import { useRowSelect } from "react-table";

export function EditUserProfile(props) {
  const { store, actions } = useContext(Context);
  const [editMode, setEditMode] = useState(false);
  const [tempArtist, setTempArtist] = useState("");
  const artists = store.artist;
  const venue = store.venue;
  const user = store.user;

  //  Artist info change events
  // const [artistGenre, setArtistGenre] = useState(user.artist.genre);
  // const [artistInstagram, setArtistInstagram] = useState(user.artist.instagram);
  // const [artistTikTok, setArtistTikTok] = useState(user.artist.tiktok);
  // const [artistFacebook, setArtistFacebook] = useState("");
  // const [artistTwitter, setArtistTwitter] = useState("");
  // const [artistSoundcloud, setArtistSoundcloud] = useState("");
  // const [artistSpotify, setArtistSpotify] = useState("");
  // const [artist_name, setArtistName] = useState("");
  // const [artistPerformance_type, setPerformance_type] = useState("Other");

  // const [artistAbout_info, setArtistAbout_Info] = useState(
  //   "More info about this Artist hasn't been added yet!"
  // );

  // // Venue info change events
  // const [venue_name, setVenue_name] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip_code, setZip_code] = useState("");
  // const [phone_number, setPhone_number] = useState("");
  // const [venue_capacity, setVenue_capacity] = useState("");
  // const [music_type, setMusic_type] = useState("general");
  // const [in_out, setIn_out] = useState("indoor");
  // const [hiring, setIsHiring] = useState("no");
  // const [pay_rate, setPay_rate] = useState("");
  // const [fees, setFees] = useState("");
  // const [equipment, setEquipment] = useState("");
  // const [about_info, setAbout_Info] = useState(
  //   "More info about this venue hasn't been added yet!"
  // );
  // const [instagram, setInstagram] = useState("");
  // const [tikTok, setTikTok] = useState("");
  // const [facebook, setFacebook] = useState("");
  // const [twitter, setTwitter] = useState("");
  // const [soundcloud, setSoundcloud] = useState("");
  // const [spotify, setSpotify] = useState("");

  useEffect(() => {
    actions.getUser();
    actions.getVenue();
    actions.getArtist();
  }, [store.token]);

  // Set up a modal to notify the user to put the social media handles into social media edits
  const editToggle = () => {
    editMode == true ? setEditMode(false) : setEditMode(true);
    console.log(editMode);
  };
  return (
    <div className="container-fluid">
      <div className="row text-center mt-2">
        <h2>Your Profile Info</h2>
        <button className="btn btn-success" onClick={editToggle}>
          EDIT?
        </button>
      </div>
      <div className="row">
        <div className="col-md-10">
          <div className="row align-items-start p-2">
            <h4 className="info-header">Your Basic Info</h4>
          </div>
          <div className="row">
            {editMode == false ? (
              <>
                <p className="card-text">
                  <b>First Name: </b>
                  {user.first_name}
                </p>
              </>
            ) : (
              <>
                <p className="card-text">
                  <b>First Name: </b>
                  <input type="text" value={user.first_name}></input>
                </p>
              </>
            )}
          </div>
          <div className="row">
            {editMode == false ? (
              <>
                <p className="card-text">
                  <b>Last Name: </b>
                  {user.last_name}
                </p>
              </>
            ) : (
              <>
                <p className="card-text">
                  <b>Last Name: </b>
                  <input type="text" value={user.last_name}></input>
                </p>
              </>
            )}
          </div>
          <div className="row">
            {editMode == false ? (
              <>
                <p className="card-text">
                  <b>Email: </b>
                  {user.email}
                </p>
              </>
            ) : (
              <>
                <p className="card-text">
                  <b>Email: </b>
                  <input type="text" value={user.email}></input>
                </p>
              </>
            )}
          </div>
          {/* -----Artist Info----- */}
          {user.artists &&
            user.artists.map((artist) => {
              return (
                <>
                  <Row>
                    <div key={artist.id} className="container d-flex">
                      <div className="flex-fill card">
                        <div className="row">
                          <h4 className="info-header">Artist Info</h4>
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <b>Artist Name: </b>
                                {artist.artist_name}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <b>Artist Name: </b>
                                <input
                                  type="text"
                                  value={artist.artist_name}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <b>Genre: </b>
                                {artist.genre}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <b>Genre: </b>
                                <select
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
                                </select>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <b>Performance Type: </b>
                                {artist.performance_type}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <b>Performance Type: </b>
                                <select
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
                                </select>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <b>About Info: </b>
                                {artist.about_info}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <b>About Info: </b>
                                <input
                                  type="textarea"
                                  value={artist.about_info}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-body">
                          <h4 className="info-header">Artist Social Info</h4>
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-instagram"></i> :{" "}
                                {artist.instagram}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-instagram"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.instagram}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-facebook"></i> :{" "}
                                {artist.facebook}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-facebook"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.facebook}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="card-text">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-twitter"></i> :{" "}
                                {artist.twitter}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-twitter"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.twitter}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="row">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-tiktok"></i> :{" "}
                                {artist.tiktok}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-tiktok"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.tiktok}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="row">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-soundcloud"></i> :{" "}
                                {artist.soundcloud}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-soundcloud"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.soundcloud}
                                  // onChange={}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                        <div className="row">
                          {editMode == false ? (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-spotify"></i> :{" "}
                                {artist.spotify}
                              </p>
                            </>
                          ) : (
                            <>
                              <p className="card-text">
                                <i className="fa-brands fa-spotify"></i> :{" "}
                                <input
                                  type="text"
                                  value={artist.spotify}
                                ></input>
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Row>
                </>
              );
            })}

          {/* -----Venue Info----- */}
          {user.venues &&
            user.venues.map((venue) => {
              return (
                <>
                  <div className="row align-items-start p-2">
                    <h4 className="info-header">Venue Info</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Venue Name: </b>
                            {venue.venue_name}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Venue Name: </b>
                            <input type="text" value={venue.venue_name}></input>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Phone Number: </b>
                            {venue.phone_number}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Phone Number: </b>
                            <input
                              type="number"
                              value={venue.phone_number}
                            ></input>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Street Address: </b>
                            {venue.address}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Street Address: </b>
                            <input type="text" value={venue.address}></input>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>City: </b>
                            {venue.city}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>City: </b>
                            <input type="text" value={venue.city}></input>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>State: </b>
                            {venue.state}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>State: </b>
                            <select className="form-control" id="state">
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
                            </select>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Zipcode: </b>
                            {venue.zip_code}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Zipcode: </b>
                            <input type="number" value={venue.zip_code}></input>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-3 d-flex">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Capacity: </b>
                            {venue.venue_capacity}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Capacity: </b>
                            <input
                              type="number"
                              value={venue.venue_capacity}
                              id="venueCapacity"
                            ></input>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Music Type: </b>
                            {venue.music_type}
                          </p>
                        </>
                      ) : (
                        <>
                          <label
                            htmlFor="VenueMusicGenre"
                            className="card-text"
                          >
                            <b>Music Type: </b>
                          </label>
                          <select className="form-control" id="VenueMusicGenre">
                            <option defaultValue>Choose...</option>
                            <option value="general">General</option>
                            <option value="rock">Rock</option>
                            <option value="hip hop">Hip Hop</option>
                            <option value="jazz">Jazz</option>
                            <option value="electronic">Electronic</option>
                            <option value="classical">Classical</option>
                            <option value="other">Other</option>
                          </select>
                        </>
                      )}
                    </div>
                    <div className="col-md-3 select-inline">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Indoor/Outdoor Staging: </b>
                            {venue.in_out}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Indoor/Outdoor Staging: </b>
                            <select className="form-control" id="staging">
                              <option defaultValue>Choose...</option>
                              <option value="indoor">Indoor</option>
                              <option value="outdoor">Outdoor</option>
                              <option value="both">Both</option>
                            </select>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Hiring: </b>
                            {venue.hiring}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Hiring: </b>
                            <select className="form-control" id="isHiring">
                              <option defaultValue>Choose...</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Pay Rate: </b>
                            {venue.pay_rate}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Pay Rate: </b>
                            <input type="number" value={venue.pay_rate}></input>
                          </p>
                        </>
                      )}
                    </div>
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Fees: </b>
                            {venue.fees}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Fees: </b>
                            <input type="number" value={venue.fees}></input>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      {editMode == false ? (
                        <>
                          <p className="card-text">
                            <b>Equipment Info: </b>
                            {venue.equipment}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="card-text">
                            <b>Equipment Info: </b>
                            <input type="text" value={venue.equipment}></input>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="row align-items-start p-2">
                    <h4 className="info-header">Venue Social Info</h4>
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-instagram"></i> :{" "}
                          {venue.instagram}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-instagram"></i> :{" "}
                          <input type="text" value={venue.instagram}></input>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-facebook"></i> :{" "}
                          {venue.facebook}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-facebook"></i> :{" "}
                          <input type="text" value={venue.facebook}></input>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-twitter"></i> :{" "}
                          {venue.twitter}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-twitter"></i> :{" "}
                          <input type="text" value={venue.twitter}></input>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-tiktok"></i> :{" "}
                          {venue.tiktok}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-tiktok"></i> :{" "}
                          <input type="text" value={venue.tiktok}></input>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-soundcloud"></i> :{" "}
                          {venue.soundcloud}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-soundcloud"></i> :{" "}
                          <input type="text" value={venue.soundcloud}></input>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="row">
                    {editMode == false ? (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-spotify"></i> :{" "}
                          {venue.spotify}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="card-text">
                          <i className="fa-brands fa-spotify"></i> :{" "}
                          <input type="text" value={venue.spotify}></input>
                        </p>
                      </>
                    )}
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
