import React from "react";

import "../../styles/venueCard.css"

export const Venuecard = (props) => {
  return (
    <div className="venue-card">
      <img
        className="card-img-top"
        src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
        alt="Card image cap"
      ></img>
      <span className="fa-regular fa-lg fa-heart card-heart"></span>
      <div className="card-body d-flex flex-column">
        <div className="row d-flex">
          <div className="col-6 card-title my-0">
            {props.name}
          </div>
          <div className="col-6 d-flex justify-content-end align-items-center"><span className="star-rating">{props.starRating}</span><i className="fa-solid fa-star"></i></div>
        </div>
      
        
        <p className="venueLocation">{props.city},{props.state}</p>
        <div className="buttonDiv">
          <button className="btn btn-sm btn-primary" href={props.link}>View Profile</button>
        </div>
      </div>
    </div>
  );
};