import React from "react";

import { useContext } from "react";
import { Context } from "../store/appContext";
import { Venuecard } from "../component/venuecards.js";
import { Link } from "react-router-dom";

//calling the array
export const Venues = () => {
  const { store, actions } = useContext(Context);

  //these are for add favorites and defavorite one

  return (
    <div className="venues-container container d-flex flex-column justify-content-md-center">
      <div className="mt-5 mx-5 d-flex justify-content-between">
        <h1 className="mb-5">Venues</h1>
      </div>
      <div className=" mb-5 py-4 card-row mx-auto d-flex flex-row flex-wrap justify-content-start">
        {store.venues.map((venue, index) => {
          return (
            <Venuecard
              key={index}
              venue_name={venue.venue_name}
              city={venue.city}
              state={venue.state}
              imgUrl={
                venue.images == null
                  ? "https://saltplatecity.com/wp-content/uploads/2019/10/vivint-smart-home-concert-venue-salt-lake-city.jpg"
                  : venue.images.split(", ")[0]
              }
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
