import React, { useEffect, useState } from "react";

import "../../styles/venueCard.css";
import { Link, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Venuecard = (props) => {
  const { store, actions } = useContext(Context);
  let location = useLocation();
  console.log(location.pathname);
  const [activeFav, setActiveFav] = useState(false);
  const handleFavorites = (e) => {
    e.preventDefault();
    if (activeFav === true) {
      actions.venueFavoriteRemove(props);
      setActiveFav(false);
    } else {
      actions.venueFavorite(props);
      setActiveFav(true);
    }
  };
  useEffect(() => {
    if (location.pathname == "/favorites") {
      setActiveFav(true);
    }
  }, []);
  return (
    <div className="card venue-card mx-2">
      <div className="crd-img">
        <img
          className="card-img-top"
          src={props.imgUrl}
          alt="Card image cap"
        ></img>
      </div>

      <div className="card-body d-flex flex-column">
        <div className="card-info-row row">
          <div className="col-6 card-title pb-0 my-0">{props.venue_name}</div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <span className="star-rating p-0 align-items-start">
              {props.starRating}
            </span>
            <i className="fa-solid fa-star py-1"></i>
          </div>
          <p className="location">
            {props.city}, {props.state}
          </p>
        </div>

        <div className="buttonDiv">
          <a className="btn btn-sm purplebutton " href={props.link}>
            View Profile
          </a>
          <i
            className={
              activeFav
                ? "fa-regular fas fa-heart fa-lg card-heart"
                : " fa-regular far fa-heart fa-lg card-heart"
            }
            style={{ color: "#8968CD" }}
            onClick={(e) => handleFavorites(e)}
          ></i>
        </div>
      </div>
    </div>
  );
};
