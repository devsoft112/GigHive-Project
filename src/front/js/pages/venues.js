import React from "react";

import { useContext } from "react";
import { Context } from "../store/appContext";
import { Venuecard } from "../component/venuecards.js";

//calling the array
export const Venues = () => {
  const { store, actions } = useContext(Context);

  //these are for add favorites and defavorite one

  return (
    <div>
      <div>
        {store.venues.map((venue, index) => {
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
