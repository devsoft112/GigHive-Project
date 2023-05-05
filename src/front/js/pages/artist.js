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
    <div className="venues-container container-fluid">
      <h1>Artists</h1>
      <div className="d-flex ">
        {store.artists.map((artist, index) => {
          return (
            <Artistcard
              key={index}
              artist_name={artist.artist_name}
              genre={artist.genre}
              performance_type={artist.performance_type}
              imgUrl={artist.images.split(", ")[0]}
              link={"/artists/" + index}
              id={index}
              starRating="5.0"
            />
          );
        })}
      </div>
     
      <div className="mt-5">
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </div>
    </div>
  );
};
