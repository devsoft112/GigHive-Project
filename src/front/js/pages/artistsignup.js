import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Artistsignup() {
  const { store, actions } = useContext(Context);
  const [genre, setGenre] = useState("");
  const [about_info, setAbout_Info] = useState(
    "More info about this venue hasn't been added yet!"
  );
  const [instagram, setInstagram] = useState("");
  const [tikTok, setTikTok] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [spotify, setSpotify] = useState("");
  const [artist_name, setArtistName] = useState("");
  const [performance_type, setPerformance_type] = useState("Other");
  const [images, setImages] = useState("https://www.stopthebreaks.com/wp-content/uploads/2020/10/iStock-161838634.jpg, https://cdn.musichouseschool.com/BandPlayingOnStage_1.jpg, https://media.gq-magazine.co.uk/photos/5ec3ff68db385df92accf28b/16:9/pass/20200519-music-02.jpg")

  const handleSubmit = () => {
    actions.postArtist(
      artist_name,
      genre,
      performance_type,
      about_info,
      instagram,
      facebook,
      twitter,
      soundcloud,
      spotify,
      tikTok,
      images
    );
    console.log("artist created");
  };
  // useEffect(() => {
  //   if (!store.token) {
  //     useNavigate("/login");
  //   }
  //   if (store.token && store.token != "" && store.token != undefined)
  //     actions.Authorization();
  // }, []);
  console.log(store.token);
  return (
    <form>
      {!store.token ? (
        "you're not logged in"
      ) : (
        <>
          <h4 className="mt-2 signup-header"> Artist Info</h4>
          <div className="row px-3 justify-content-start my-2">
            <div className="form-group col-md-3">
              <label htmlFor="artistName">Stage/Artist Name</label>
              <input
                type="text"
                className="form-control"
                id="artistName"
                placeholder="Stage/Artist Name"
                value={artist_name}
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
                <option value="General">General</option>
                <option value="Rock">Rock</option>
                <option value="Hip-Hop">Hip Hop</option>
                <option value="Jazz">Jazz</option>
                <option value="Electronic">Electronic</option>
                <option value="Classical">Classical</option>
                <option value="Other">Other</option>
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
                <option value="Vocalist">Vocalist</option>
                <option value="Rapper">Rapper</option>
                <option value="Instrumentalist">Instrumentalist</option>
                <option value="Band">Band</option>
                <option value="DJ">DJ</option>
                <option value="Other">Other</option>
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
                onChange={(e) => setAbout_Info(e.target.value)}
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
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </Link>
          </div>
        </>
      )}
    </form>
  );
}
