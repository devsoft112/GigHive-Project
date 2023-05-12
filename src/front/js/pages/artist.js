import React from "react";
import { Artistcard } from "../component/artistscards";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//calling the array
export const Artists = () => {
  const { store, actions } = useContext(Context);

  //these are for add favorites and defavorite one

  return (
    <div className="venues-container container d-flex flex-column justify-content-md-center">
      <div className="mt-5 mx-5 d-flex justify-content-between">
        <h1 className="mb-5">Artists</h1>
      </div>
      <div className="mb-5 py-4 card-row mx-auto d-flex flex-row flex-wrap justify-content-start ">
        {store.artists.map((artist, index) => {
          return (
            <Artistcard
              key={index}
              artist_name={artist.artist_name}
              genre={artist.genre}
              performance_type={artist.performance_type}
              imgUrl={
                artist.images == null
                  ? "https://cdn.musichouseschool.com/BandPlayingOnStage_1.jpg"
                  : artist.images.split(", ")[0]
              }
              link={"/artists/" + index}
              id={index}
              className="artistCard"
              starRating="5.0"
            />
          );
        })}
      </div>
    </div>
  );
};
