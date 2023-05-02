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
      {/* <div
        id="carousel"
        className="carousel slide w-50 h-50"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/id/608/367/267"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div> */}

      <div>
        {store.venues.map((venue, index) => {
          return (
            <Venuecard
              key={index}
              venue_name={venue.venue_name}
              city={venue.city}
              state={venue.state}
              // imgUrl={venue.images.split(", ")[0]}
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
