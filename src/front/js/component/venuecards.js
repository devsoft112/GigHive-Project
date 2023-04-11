import React from "react";

export const Venuecard = () => {
  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img
        className="card-img-top"
        src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png"
        alt="Card image cap"
      ></img>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">venue.name</h5>
      </div>
    </div>
  );
};
