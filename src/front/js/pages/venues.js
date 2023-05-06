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
    <div className="venues-container container-fluid">
      <h2>Venues</h2>
      <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
        {store.venues.map((venue, index) => {
          return (
            <Venuecard
              key={index}
              venue_name={venue.venue_name}
              city={venue.city}
              state={venue.state}
              imgUrl={venue.images == null? "https://saltplatecity.com/wp-content/uploads/2019/10/vivint-smart-home-concert-venue-salt-lake-city.jpg" : venue.images.split(", ")[0]}
              link={"/venues/" + index}
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
