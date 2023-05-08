import "../../styles/artistCard.css";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useLocation } from "react-router-dom";

export const Artistcard = (props) => {
  const { store, actions } = useContext(Context);
  let location = useLocation();
  console.log(location.pathname);

  const [activeFav, setActiveFav] = useState(false);
  const handleFavorites = (e) => {
    e.preventDefault();
    if (activeFav === true) {
      actions.artistFavoriteRemove(props);
      setActiveFav(false);
    } else {
      actions.artistFavorite(props);
      setActiveFav(true);
    }
  };
  useEffect(() => {
    if (location.pathname == "/favorites") {
      setActiveFav(true);
    }
  }, []);
  return (
    <div className="card artist-card mx-2">
      <div className="crd-img p-0">
        <img
          className="card-img-top"
          src={props.imgUrl}
          alt="Card image cap"
        ></img>
      </div>

      <div className="card-body d-flex flex-column">
        <div className="card-info-row row">
          <div className="col-6 card-title pb-0 my-0">{props.artist_name}</div>
          <div className="col-6 d-flex justify-content-end align-items-start">
            <span className="star-rating p-0 align-items-start">
              {props.starRating}
            </span>
            <i className="fa-solid fa-star py-1"></i>
          </div>
          <p className="musicGenre">
            {props.genre}/{props.performance_type}
          </p>
        </div>

        <div className="buttonDiv">
          <a className="btn btn-sm purplebutton" href={props.link}>
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
