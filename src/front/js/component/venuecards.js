import React from "react";

import "../../styles/venueCard.css";
import { Link } from "react-router-dom";

export const Venuecard = (props) => {
  return (
    <div className="card venue-card mx-2">
      <div className="crd-img"><img
        className="card-img-top"
        src={props.imgUrl}
        alt="Card image cap"
      ></img></div>
      <span className="fa-regular fa-lg fa-heart card-heart"></span>
      <div className="card-body d-flex flex-column">
        <div className="card-info-row row">
          <div className="col-6 card-title pb-0 my-0">{props.venue_name}</div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <span className="star-rating p-0 align-items-start">{props.starRating}</span>
            <i className="fa-solid fa-star py-1"></i>
          </div>
          <p className="location">
          {props.city}, {props.state}
        </p>
        </div>

        
        <div className="buttonDiv">
          <button className="btn btn-sm btn-primary" href={props.link}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};
