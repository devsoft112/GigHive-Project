import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Artistcard } from "../component/artistscards";
import { Venuecard } from "../component/venuecards";

import rockMusic from "../../img/RockMusic.png"
import HipHopMusic from "../../img/HipHopMusic.png"
import JazzMusic from "../../img/JazzMusic.png"
import ElectronicMusic from "../../img/ElectronicMusic.png"
import ClassicalMusic from "../../img/ClassicalMusic.png"

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-flex">
      <div className="row header-image p-3"><h1 className="header-text">Find<br></br>Your Crowd</h1></div>
      <div className="row text-center">
        <h1>Bringing Musicians and Venues Together!</h1>
      </div>
      <div className="row text-center">
        <h4>Genres</h4>
      </div>
      <div className="genre-list row d-flex justify-content-center px-3">
          <div className="genre rock d-flex rounded-circle justify-content-center mx-1">
            <img className="genreImage" src={rockMusic} />
            <p className="genreText">Rock</p>
          </div>
          <div className="genre rock d-flex rounded-circle justify-content-center mx-1">
            <img className="genreImage" src={HipHopMusic} />
            <p className="genreText">Hip-Hop</p>
          </div>
          <div className="genre rock d-flex rounded-circle justify-content-center mx-1">
            <img className="genreImage" src={JazzMusic} />
            <p className="genreText">Jazz</p>
          </div>
          <div className="genre rock d-flex rounded-circle justify-content-center mx-1">
            <img className="genreImage" src={ElectronicMusic} />
            <p className="genreText">Electronic</p>
          </div>
          <div className="genre rock d-flex rounded-circle justify-content-center mx-1">
            <img className="genreImage" src={ClassicalMusic} />
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
          <Artistcard />
        </div>

      <section>
        <h2>Venues</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          <Venuecard />
        </div>
      </section>

      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
    </div>
  );
};
