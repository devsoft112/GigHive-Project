import React, { useContext, useState } from "react";

import "../../styles/venueProfile.css";

import CalendarPlaceholder from "./CalendarPlaceholder.png";
import MapPlaceholder from "./MapPlaceholder.png";

import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function VenueProfile() {
  const { store, actions } = useContext(Context);
  const venues = store.venues;
  const { id } = useParams();

  return (
    <div className="container-fluid">
      <div className="row mt-3 px-2 gx-3 d-flex mainRow">
        <img
          src={venues[id]?.images.split(", ")[0]}
          className="col-md-5 mt-2 p-0 rounded profile-main-img object-fit-contain"
        ></img>
        <div className="col-md-7 px-3">
          <div className="d-flex flex-row mb-0">
            <div>
              <h2 className="venueName m-0">{venues[id]?.venue_name}</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className="btn btn-sm btn-primary">Message</button>
            </div>
          </div>
          <div className="row mt-0">
            <p className="my-0 small">
              <b>
                {venues[id]?.address},{venues[id]?.city}, {venues[id]?.state}{" "}
                {venues[id]?.zip_code}
              </b>
            </p>

            <div className="row mt-0">
              <div className="star-wrapper">
                <i className="fa-solid fa-star s1"></i>
                <i className="fa-solid fa-star s2"></i>
                <i className="fa-solid fa-star s3"></i>
                <i className="fa-solid fa-star s4"></i>
                <i className="fa-solid fa-star s5"></i>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <p>{venues[id]?.about_info}</p>
            <p className="my-0">
              <b>Capacity: </b>
              {venues[id]?.capacity}
            </p>
            <p className="my-0">
              <b>Music Type: </b>
              {venues[id]?.music_type}
            </p>
            <p className="my-0">
              <b>Hiring?: </b>
              {venues[id]?.hiring}
            </p>
            <p className="my-0">
              <b>Pay Rate: </b>
              {venues[id]?.pay_rate}
            </p>
            <p className="my-0">
              <b>Fee Rate: </b>
              {venues[id]?.fees}
            </p>
            <p className="my-0">
              <b>Indoor/Outdoor Staging: </b>
              {venues[id]?.in_out}
            </p>
            <p className="my-0">
              <b>Equipment Info: </b>
              {venues[id]?.equipment}
            </p>
          </div>
          <div className="row mt-3 px-2">
            {venues[id]?.instagram ? (
              <a
                href={`http://instagram.com/${venues[id]?.instagram}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            ) : null}
            {venues[id]?.tiktok ? (
              <a
                href={`http://tiktok.com/@${venues[id]?.tiktok}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-tiktok fa-xl"></i>
              </a>
            ) : null}
            {venues[id]?.facebook ? (
              <a
                href={`http://facebook.com/${venues[id]?.facebook}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
            ) : null}
            {venues[id]?.twitter ? (
              <a
                href={`http://twitter.com/${venues[id]?.twitter}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
            ) : null}
            {venues[id]?.soundcloud ? (
              <a
                href={`http://soundcloud.com/${venues[id]?.soundcloud}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-soundcloud fa-xl"></i>
              </a>
            ) : null}
            {venues[id]?.spotify ? (
              <a
                href={`http://spotify.com`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-spotify fa-xl"></i>
              </a>
            ) : null}
          </div>
        </div>
        <div className="row px-2 d-flex justify-content-between align-items-center secondRow">
          <div className="col-md-5 mx-1">
            <div className="row d-flex justify-content-between">
              {venues[id]?.images.split(", ").map((image) => {
                return (
                  <img
                    className="col-md m-2 rounded smImage p-0 object-fit-contain"
                    src={image}
                  ></img>
                );
              })}
            </div>
          </div>
          {/* <div className="col-md-5 mx-1">
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
            </div> */}
          <div className="col-md-6">
            <img className="calendar" src={CalendarPlaceholder} />
            <img className="calendar mx-5" src={CalendarPlaceholder} />
          </div>
        </div>
        <div className="row rounded">
          <img src={MapPlaceholder} />
        </div>
      </div>
    </div>
  );
}
