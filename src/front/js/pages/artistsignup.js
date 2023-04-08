import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export default function Artistsignup() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("artist");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const [instaHandle, setInstaHandle] = useState("");
  const [tikTokHandle, setTikTokHandle] = useState("");
  const [facebookHandle, setFacebookHandle] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [soundcloudHandle, setSoundcloudHandle] = useState("");
  const [spotifyHandle, setSpotifyHandle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistType, setArtistType] = useState("Other");

  const handleClick = () => {
    actions.signup(
      userType,
      firstName,
      lastName,
      email,
      password,
      phone,
      aboutInfo,
      instaHandle,
      tikTokHandle,
      facebookHandle,
      twitterHandle,
      soundcloudHandle,
      spotifyHandle
    );
  };

  if (store.token && store.token != "" && store.token != undefined) {
    navigate("/login");
  }

  return (
    <form>
      <h4 className="mt-2 signup-header"> Basic Info</h4>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row px-3 justify-content-start">
        <div className="form-group col-md-4">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="inputEmail4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Desired username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </div>
      <h4 className="mt-2 signup-header"> Artist Info</h4>
      <div className="row px-3 justify-content-start my-2">
        <div className="form-group col-md-3">
          <label htmlFor="artistName">Stage/Artist Name</label>
          <input
            type="text"
            className="form-control"
            name="artistName"
            id="artistName"
            placeholder="Stage/Artist Name"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>

        <div className="col-md-3 pb-0 my-auto">
          <label className="mx-1" htmlFor="artistMusicGenre">
            Genre
          </label>
          <select
            className="form-control"
            id="artistMusicGenre"
            onChange={(e) => setMusicGenre(e.target.value)}
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
        </div>
        <div className="col-md-3 pb-0 my-auto">
          <label className="mx-1" htmlFor="ArtistType">
            Performance Type
          </label>
          <select
            className="form-control"
            id="ArtistType"
            onChange={(e) => setArtistType(e.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="general">Vocalist</option>
            <option value="rock">Rapper</option>
            <option value="rock">Instrumentalist</option>
            <option value="hip hop">Band</option>
            <option value="jazz">DJ</option>
            <option value="electronic">Other</option>
          </select>
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
            value={instaHandle}
            onChange={(e) => setInstaHandle(e.target.value)}
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
            value={tikTokHandle}
            onChange={(e) => setTikTokHandle(e.target.value)}
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
            value={facebookHandle}
            onChange={(e) => setFacebookHandle(e.target.value)}
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
            value={twitterHandle}
            onChange={(e) => setTwitterHandle(e.target.value)}
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
            value={soundcloudHandle}
            onChange={(e) => setSoundcloudHandle(e.target.value)}
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
            value={spotifyHandle}
            onChange={(e) => setSpotifyHandle(e.target.value)}
          />
        </div>
      </div>

      <div className="row justify-content-center">
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
