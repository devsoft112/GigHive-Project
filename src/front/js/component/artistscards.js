import React from "react";

import "../../styles/artistCard.css";
import { Link } from "react-router-dom";

export const Artistcard = (props) => {
  return (
    <div className="card artist-card mx-2">
      <div className="crd-img p-0"><img
        className="card-img-top"
        src={props.imgUrl}
        alt="Card image cap"
      ></img></div>
      <span className="fa-regular fa-lg fa-heart card-heart"></span>
      <div className="card-body d-flex flex-column">
        <div className="card-info-row row">
          <div className="col-6 card-title pb-0 my-0">{props.artist_name}</div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <span className="star-rating p-0 align-items-start">{props.starRating}</span>
            <i className="fa-solid fa-star py-1"></i>
          </div>
          <p className="musicGenre">
          {props.genre}/{props.performance_type}
        </p>
        </div>

        
        <div className="buttonDiv">
          <a className="btn btn-sm btn-primary" href={props.link}>
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};
