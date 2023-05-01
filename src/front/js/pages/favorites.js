import React from "react";
import { Artistcard } from "../component/artistscards";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Venuecard } from "./component/venuecards.js";

//calling the array
export const Favorites = () => {
  const { store, actions } = useContext(Context);

  //these are for add favorites and defavorite one

  return (
    <div>
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
      <div>
        {store.FavoriteVenue.map((venue, index) => {
          return (
            <Venuecard
              key={index}
              venue_name={venue.venue_name}
              city={venue.city}
              state={venue.state}
              imgUrl={venue.images.split(", ")[0]}
              link={"/venues/" + index}
              id={index}
              starRating="5.0"
            />
          );
        })}
      </div>
    </div>
  );
};
