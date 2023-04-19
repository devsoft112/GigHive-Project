import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Artistcard } from "../component/artistscards";
import { Venuecard } from "../component/venuecards";

import rockMusic from "../../img/RockMusic.png";
import HipHopMusic from "../../img/HipHopMusic.png";
import JazzMusic from "../../img/JazzMusic.png";
import ElectronicMusic from "../../img/ElectronicMusic.png";
import ClassicalMusic from "../../img/ClassicalMusic.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [artists, setArtists] = useState(store.artists);

  const [filter, setFilter] = useState(artists);

  const rockArtists = store.artists.filter((artist) => artist.genre == "Rock");
  const hipHopArtists = artists.filter((artist) => artist.genre == "hip hop");
  const jazzArtists = artists.filter((artist) => artist.genre == "jazz");
  const electronicArtists = artists.filter(
    (artist) => artist.genre == "electronic"
  );
  const classicalArtists = artists.filter(
    (artist) => artist.genre == "classical"
  );

  console.log(rockArtists);

  console.log(artists);

  const rockFilter = () => setArtists(rockArtists);
  const hipHopFilter = () => setArtists(hipHopArtists);
  const jazzFilter = () => setArtists(jazzArtists);
  const electronicFilter = () => setArtists(electronicArtists);
  const classicalFilter = () => setArtists(classicalArtists);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);
  useEffect(() => {
    actions.getArtist();
  }, []);

  return (
    <div className="container-fluid">
      {/* EVERYTHING ABOVE THIS LINE FOR HEADER TESTS */}
      <div className="row header-image p-3 align-items-center">
        <h1 className="header-text text-center">
          Where <b>Music</b> Meets <b>Opportunity</b>
        </h1>
      </div>
      <div className="row text-center mt-2">
        <h1>Bringing Musicians and Venues Together!</h1>
      </div>
      <div className="row text-center">
        <h4>Genres</h4>
      </div>
      <div className="genre-list row d-flex justify-content-center px-3">
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img className="genreImage" src={rockMusic} onClick={rockFilter} />
          <p className="genreText">Rock</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={HipHopMusic}
            onClick={hipHopFilter}
          />
          <p className="genreText">Hip-Hop</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img className="genreImage" src={JazzMusic} onClick={jazzFilter} />
          <p className="genreText">Jazz</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={ElectronicMusic}
            onClick={electronicFilter}
          />
          <p className="genreText">Electronic</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={ClassicalMusic}
            onClick={classicalFilter}
          />
          <p className="genreText">Classical</p>
        </div>
        <div className="genre other d-flex rounded-circle justify-content-center mx-1">
          <p className="genreText other-Text">Other</p>
        </div>
      </div>
      <div className="row px-3">
        <h1 className="artistitle">Artists</h1>
      </div>
      <div className="d-flex flex-row flex-nowrap overflow-auto px-3">
        <Artistcard
          artist_name="Jimi Hendrix"
          genre="rock"
          performance_type="singer"
          starRating="5.0"
        />
      </div>
      <div className="d-flex flex-row flex-nowrap overflow-auto px-3">
        {artists.map((artist, index) => {
          <Artistcard
            name={artist.artist_name}
            genre={artist.genre}
            performance_type={artist.performance_type}
            link={"/artists/" + index}
          />;
        })}
      </div>

      <div className="row px-3 mt-3">
        <h2>Venues</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          <Venuecard />
        </div>
      </div>

      {/* <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div> */}
    </div>
  );
};
