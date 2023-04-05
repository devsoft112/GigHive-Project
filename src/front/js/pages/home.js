import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Artistcard } from "../component/artistscards";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Bringing Musicians and Venues Together!</h1>
      <h4>Genres</h4>
      <div className="genre-list">
        <a>
          <p className="genre">Rap</p>
        </a>
        <a>
          <p className="genre">Jazz</p>
        </a>
        <a>
          <p className="genre">Electro</p>
        </a>
        <a>
          <p className="genre">Hip Hop</p>
        </a>
        <a>
          <p className="genre">Reggae</p>
        </a>
      </div>
      <div>
        <h1 className="artistittle">Artists</h1>
      </div>
      <div>
        <h1 className="venuestittle">Venues</h1>
      </div>

      <Artistcard />
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
    </div>
  );
};
