import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export function Artistsignup() {
  const { store, actions } = useContext(Context);
  const [phone, setPhone] = useState("");
  const [genre, setGenre] = useState("");
  const [aboutInfo, setAboutInfo] = useState("More info about this venue hasn't been added yet!");
  const [instagram, setInstagram] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [spotify, setSpotify] = useState("");
  const [artistName, setArtistName] = useState("");
  const [performance_type, setPerformance_type] = useState("Other");

  const handleSubmit = () => {
    actions.postArtist(
      artistName,
      genre,
      performance_type,
      aboutInfo,
      instagram,
      tikTok,
      facebook,
      twitter,
      soundcloud,
      spotify
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mt-2 signup-header"> Artist Info</h4>
      <div className="row px-3 justify-content-start my-2">
        <div className="form-group col-md-3">
          <label htmlFor="artistName">Stage/Artist Name</label>
          <input
            type="text"
            className="form-control"
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
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
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
            value={performance_type}
            onChange={(e) => setPerformance_type(e.target.value)}
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
      <div className="row px-3 justify-content-start my-2">
      <div className="form-group col-md-9">
            <label htmlFor="aboutInfo">About You</label>
            <textarea
              type="text"
              rows="4"
              className="form-control"
              id="aboutInfo"
              placeholder="Tell us more about you as an artist"
              onChange={(e) => setAboutInfo(e.target.value)}
            />
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
            id="spotifyHandle"
            placeholder="Spotify username/handle"
            value={spotify}
            onChange={(e) => setSpotify(e.target.value)}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <Link to="/">
          <button
            type="submit"
            className="btn btn-primary w-25 mx-auto mt-2 signup-button"
          >
            Sign up
          </button>
        </Link>
      </div>
    </form>
  );
}
