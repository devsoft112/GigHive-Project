import React, { useContext, useLayoutEffect} from "react";

import CalendarPlaceholder from "./CalendarPlaceholder.png"

import "../../styles/artistProfile.css";

import { Context } from "../store/appContext";
import { useParams } from "react-router"

export function ArtistProfile(props) {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const artists = store.artists;
  console.log(artists)

  useLayoutEffect(() => {
    actions.getArtist();
    actions.getVenue();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row px-2 gx-3 mt-4 mainRow">
        <div className="col-md-5 mt-2 rounded profile-main-img">
          Image goes here
        </div>
        <div className="col-md-7">
          <div class="d-flex flex-row mb-0">
            <div>
              <h2 className="artistName m-0">{artists[id]?.artist_name}</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className="btn btn-sm btn-primary">Message</button>
            </div>
          </div>
          <div className="row mt-0">
            <div className="star-wrapper">
              <i className="fa-solid fa-star s1"></i>
              <i className="fa-solid fa-star s2"></i>
              <i className="fa-solid fa-star s3"></i>
              <i className="fa-solid fa-star s4"></i>
              <i className="fa-solid fa-star s5"></i>
            </div>
          </div>
          <div className="row mt-3">
            <p>{artists[id]?.about_info}</p>
            <p><b>Music Type: </b>{artists[id]?.genre}</p>
            <b>Performance Type:</b>
          </div>
          <div className="row mt-3 px-2">
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-instagram fa-xl"></i></div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-tiktok fa-xl"></i></div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-facebook fa-xl"></i></div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-twitter fa-xl"></i></div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-soundcloud fa-xl"></i></div>
            <div className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-spotify fa-xl"></i></div>
          </div>
        </div>
        <div className="row px-2 d-flex justify-content-between align-items-center">
            <div className="col-md-5 mx-1">
              <div className="row d-flex justify-content-between">
                <div className="col-md m-2 rounded smImage">
                  Test
                </div>
                <div className="col-md m-2 rounded smImage">
                  Test
                </div>
                <div className="col-md m-2 rounded smImage">
                  Test
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-md rounded m-2 smImage">
                  Test
                </div>
                <div className="col-md rounded m-2 smImage">
                  Test
                </div>
                <div className="col-md rounded m-2 smImage">
                  Test
                </div>
              </div>
            </div>
            <div className="col-md-6"><img className="calendar" src={CalendarPlaceholder} /><img className="calendar mx-5" src={CalendarPlaceholder} /></div>
          </div>
      </div>
    </div>
  );
}
