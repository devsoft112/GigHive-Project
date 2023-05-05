import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export function Venuesignup() {
  const { store, actions } = useContext(Context);

  const [venue_name, setVenue_name] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [venue_capacity, setVenue_capacity] = useState("");
  const [music_type, setMusic_type] = useState("general");
  const [in_out, setIn_out] = useState("indoor");
  const [hiring, setIsHiring] = useState("no");
  const [pay_rate, setPay_rate] = useState("");
  const [fees, setFees] = useState("");
  const [equipment, setEquipment] = useState("yes");
  const [about_info, setAbout_Info] = useState(
    "More info about this venue hasn't been added yet!"
  );
  const [instagram, setInstagram] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [spotify, setSpotify] = useState("");
  const [images, setImages] = useState("https://www.stopthebreaks.com/wp-content/uploads/2020/10/iStock-161838634.jpg, https://cdn.musichouseschool.com/BandPlayingOnStage_1.jpg, https://media.gq-magazine.co.uk/photos/5ec3ff68db385df92accf28b/16:9/pass/20200519-music-02.jpg")

  const handleClick = () => {
    actions.postVenue(
      venue_name,
      address,
      state,
      city,
      zip_code,
      phone_number,
      venue_capacity,
      music_type,
      in_out,
      hiring,
      pay_rate,
      fees,
      equipment,
      about_info,
      instagram,
      facebook,
      twitter,
      soundcloud,
      spotify,
      tikTok,
      images
    );
  };

  useEffect(() => {
    if (!store.token) {
      useNavigate("/login");
    }
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  });
  return (
    <form>
      <div className="row">
        <h4 className="mt-2 signup-header"> Venue Info</h4>
      </div>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="venueName">Venue Name</label>
          <input
            type="text"
            className="form-control"
            name="venueName"
            id="venueName"
            placeholder="Venue name"
            value={venue_name}
            onChange={(e) => setVenue_name(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="Phone number"
            pattern="[0-9]{10}"
            maxLength="11"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Street address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="phone">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            id="city"
            placeholder="City"
            maxLength="11"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="col-md-3 pb-0 my-auto">
          <label className="mx-1" htmlFor="state">
            State
          </label>
          <select
            className="form-control"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
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
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="zipcode">Zipcode</label>
          <input
            type="number"
            className="form-control"
            id="zipcode"
            placeholder="Zipcode"
            value={zip_code}
            onChange={(e) => setZip_code(e.target.value)}
            maxLength="5"
            required
          />
        </div>
      </div>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            placeholder="Capacity"
            value={venue_capacity}
            onChange={(e) => setVenue_capacity(e.target.value)}
          />
        </div>
        <div className="col-md-3 pb-0 my-auto">
          <label className="mx-1" htmlFor="VenueMusicGenre">
            Genre
          </label>
          <select
            className="form-control"
            id="VenueMusicGenre"
            value={music_type}
            onChange={(e) => setMusic_type(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="General">General</option>
            <option value="Rock">Rock</option>
            <option value="Hip-Hop">Hip Hop</option>
            <option value="Jazz">Jazz</option>
            <option value="Electronic">Electronic</option>
            <option value="Classical">Classical</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md-3 pb-0 my-auto justify-content-start">
          <label className="mx-1" htmlFor="staging">
            Indoor/Outdoor Staging?
          </label>
          <select
            className="form-control"
            id="staging"
            value={in_out}
            onChange={(e) => setIn_out(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div className="row px-3 justify-content-start">
          <div className="form-group col-md-4">
            <label htmlFor="isHiring">Hiring?</label>
            <select
              className="form-control"
              id="isHiring"
              value={hiring}
              onChange={(e) => setIsHiring(e.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="pay-rate">Pay Rate</label>
            <input
              type="number"
              className="form-control"
              id="pay-rate"
              placeholder="Pay rate (optional)"
              value={pay_rate}
              onChange={(e) => setPay_rate(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="fees">Fees?</label>
            <input
              type="number"
              className="form-control"
              id="fees"
              placeholder="Fees charged to artists (optional)"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </div>
        </div>
        <div className="row px-3 justify-content-start">
          <div className="form-group col-md-8">
            <label htmlFor="equipInfo">Equipment Provided?</label>
            <textarea
              type="text"
              rows="4"
              className="form-control"
              id="equipInfo"
              placeholder="please provide details about equipment on hand (if any)"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
            />
          </div>
        </div>
        <div className="row px-3 justify-content-start">
          <div className="form-group col-md-9">
            <label htmlFor="aboutInfo">About Your Venue</label>
            <textarea
              type="text"
              rows="4"
              className="form-control"
              id="aboutInfo"
              placeholder="Tell us more about your venue"
              value={about_info}
              onChange={(e) => setAbout_Info(e.target.value)}
            />
          </div>
        </div>
      </div>
      <h4 className="mt-2 signup-header"> Social Handles</h4>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="instaHandle">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="instaHandle"
            id="instaHandle"
            placeholder="Instagram username/handle"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="tikTokHandle">
            <i className="fa-brands fa-tiktok fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="tikTokHandle"
            id="tikTokHandle"
            placeholder="TikTok username/handle"
            value={tikTok}
            onChange={(e) => setTikTok(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="facebookHandle">
            <i className="fa-brands fa-facebook fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="facebookHandle"
            id="facebookHandle"
            placeholder="Facebook username/handle"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
      </div>
      <div className="row px-3 justify-content-start my-3">
        <div className="form-group col-md-4">
          <label htmlFor="twitterHandle">
            <i className="fa-brands fa-twitter fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="twitterHandle"
            id="twitterHandle"
            placeholder="Twitter username/handle"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="soundcloudHandle">
            <i className="fa-brands fa-soundcloud fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="soundcloudHandle"
            id="soundcloudHandle"
            placeholder="Soundcloud username/handle"
            value={soundcloud}
            onChange={(e) => setSoundcloud(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="spotifyHandle">
            <i className="fa-brands fa-spotify fa-xl"></i>
          </label>
          <input
            type="text"
            className="form-control-inline mx-2 w-75"
            name="spotifyHandle"
            id="spotifyHandle"
            placeholder="Spotify username/handle"
            value={spotify}
            onChange={(e) => setSpotify(e.target.value)}
          />
        </div>
      </div>
      <div className="row px-3 justify-content-center">
        <button
          type="submit"
          className="btn btn-primary w-25 mx-auto mt-2 signup-button"
          onClick={handleClick}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
