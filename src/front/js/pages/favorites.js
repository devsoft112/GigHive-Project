import React from "react";
import { Artistcard } from "../component/artistscards";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Venuecard } from "../component/venuecards.js";

//calling the array
export const Favorites = () => {
  const { store, actions } = useContext(Context);

  console.log(store.favoriteVenues);
  console.log(store.favoriteArtists);

  //these are for add favorites and defavorite one

  return (
    <div className=" container-fluid mt-5">
      <h1 className="mb-4">Favorites</h1>

      <div>
        <h3>Artists</h3>
      </div>
      <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
        {store.favoriteArtists.map((artist, index) => {
          return (
            <Artistcard
              key={index}
              artist_name={artist.artist_name}
              genre={artist.genre}
              performance_type={artist.performance_type}
              imgUrl={artist.imgUrl}
              link={"/artists/" + artist.id}
              id={artist.id}
              starRating="5.0"
            />
          );
        })}
      </div>

      <div>
        <h3>Venues</h3>
      </div>
      <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
        {store.favoriteVenues.map((venue, index) => {
          return (
            <Venuecard
              key={index}
              venue_name={venue.venue_name}
              city={venue.city}
              state={venue.state}
              imgUrl={venue.imgUrl}
              link={"/venues/" + venue.id}
              id={index}
              starRating="5.0"
            />
          );
        })}
      </div>
    </div>
  );
};
