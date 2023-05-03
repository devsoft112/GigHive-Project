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
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div>
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
      <div>
        <button onClick={() => console.log(store.favoriteArtists)}>
          Favorites
        </button>
      </div>
    </div>
  );
};
