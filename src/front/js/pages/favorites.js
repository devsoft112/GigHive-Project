import React from "react";
import { Artistcard } from "../component/artistscards";
import { useContext } from "react";
import { Context } from "../store/appContext";
//calling the array
export const Favorites = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.FavoriteArtist.map((artist, index) => {
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
  );
};
