import React, { useContext, useEffect, useState } from "react";



import "../../styles/venueProfile.css";
import { Map } from "../component/Map/Map.jsx";

import CalendarPlaceholder from './CalendarPlaceholder.png'
import MapPlaceholder from './MapPlaceholder.png'

import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function VenueProfile() {
  const { store, actions } = useContext(Context);
  const venues = store.venues
  const { id } = useParams();

  const Address = `${venues[id]?.address}, ${venues[id]?.city}, ${venues[id]?.state}`
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  const [oneStar, setOneStar] = useState ("fa-solid fa-star s1")
  const [twoStar, setTwoStar] = useState ("fa-solid fa-star s2")
  const [threeStar, setThreeStar] = useState ("fa-solid fa-star s3")
  const [fourStar, setFourStar] = useState ("fa-solid fa-star s4")
  const [fiveStar, setFiveStar] = useState ("fa-solid fa-star s5")
  
  let starRating = Math.ceil(Math.random() * 5)
  console.log(starRating)
  useEffect(()=>{
    if (starRating == 5){
      setOneStar("fa-solid fa-star s1 goldRating")
      setTwoStar("fa-solid fa-star s2 goldRating")
      setThreeStar("fa-solid fa-star s3 goldRating")
      setFourStar("fa-solid fa-star s4 goldRating")
      setFiveStar("fa-solid fa-star s5 goldRating")
    }
    else if (starRating == 4){
      setTwoStar("fa-solid fa-star s2 goldRating")
      setThreeStar("fa-solid fa-star s3 goldRating")
      setFourStar("fa-solid fa-star s4 goldRating")
      setFiveStar("fa-solid fa-star s5 goldRating")
    }
    else if (starRating == 3){
      setThreeStar("fa-solid fa-star s3 goldRating")
      setFourStar("fa-solid fa-star s4 goldRating")
      setFiveStar("fa-solid fa-star s5 goldRating")
    }
    else if (starRating == 2){
      setFourStar("fa-solid fa-star s4 goldRating")
      setFiveStar("fa-solid fa-star s5 goldRating")
    }
    else {
      setFiveStar("fa-solid fa-star s5 goldRating")
    }
  }, [])

  const location = {
    address: Address,
    lat: lat,
    lng: lng,
    name: venues[id]?.venue_name
  }

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Address}&key=AIzaSyDecCwDfJgrb7eqAPY9il-YWvcs5RdPmuE`)
  .then((response) => {
    return response.json();
  })
  .then(jsonData => {
    setLat(jsonData.results[0].geometry.location.lat);
    setLng(jsonData.results[0].geometry.location.lng); // {lat: 45.425152, lng: -75.6998028}
  })
  .catch(error => {
    console.log(error);
  })

  return (
    <div className="container-fluid">
      <div className="row mt-3 px-2 gx-3 d-flex mainRow">
        <div className="col-md-5 mt-2 p-0">
      <img src={venues[id]?.images.split(", ")[0]} className="profile-main-img object-fit-contain rounded">
          
          </img>
          
          </div>
        <div className="col-md-7 px-3">
          <div class="d-flex flex-row mb-0">
            <div>
              <h2 className="venueName m-0">{venues[id]?.venue_name}</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className="btn btn-sm btn-primary">Message</button>
            </div>
          </div>
          <div className="row mt-0">
          <p className="my-0 small"><b>{venues[id]?.address},{venues[id]?.city}, {venues[id]?.state} {venues[id]?.zip_code}</b></p>

          <div className="row mt-0">
            <div className="star-wrapper">
              <i className={oneStar}></i>
              <i className={twoStar}></i>
              <i className={threeStar}></i>
              <i className={fourStar}></i>
              <i className={fiveStar}></i>
            </div>
          </div>
          </div>
          <div className="row mt-3">
            

            <p>{venues[id]?.about_info}</p>
            <p className="my-0"><b>Capacity: </b>{venues[id]?.capacity}</p>
            <p className="my-0"><b>Music Type: </b>{venues[id]?.music_type}</p>
            <p className="my-0"><b>Hiring?: </b>{venues[id]?.hiring}</p>
            <p className="my-0"><b>Pay Rate: </b>{venues[id]?.pay_rate}</p>
            <p className="my-0"><b>Fee Rate: </b>{venues[id]?.fees}</p>
            <p className="my-0"><b>Indoor/Outdoor Staging: </b>{venues[id]?.in_out}</p>
            <p className="my-0"><b>Equipment Info: </b>{venues[id]?.equipment}</p>
          </div>
          <div className="row mt-3 px-2">
          {venues[id]?.instagram ? <a href={`http://instagram.com/${venues[id]?.instagram}`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-instagram fa-xl"></i></a> : null}
          {venues[id]?.tiktok ?<a href={`http://tiktok.com/@${venues[id]?.tiktok}`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-tiktok fa-xl"></i></a> : null}
          {venues[id]?.facebook ?<a href={`http://facebook.com/${venues[id]?.facebook}`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-facebook fa-xl"></i></a> : null}
          {venues[id]?.twitter ? <a href={`http://twitter.com/${venues[id]?.twitter}`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-twitter fa-xl"></i></a> : null}
          {venues[id]?.soundcloud ? <a href={`http://soundcloud.com/${venues[id]?.soundcloud}`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-soundcloud fa-xl"></i></a> : null}
          {venues[id]?.spotify ? <a href={`http://spotify.com`} target="_blank" className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"><i className="fa-brands fa-spotify fa-xl"></i></a> : null}
          </div>
        </div>
        <div className="row px-2 d-flex justify-content-between align-items-start">
            <div className="col-md-5 mx-1">
            <div className="row d-flex justify-content-between mt-2">
              {venues[id]?.images.split(", ").map((image)=>{
                return <img className="col-md m-2 rounded smImage p-0 object-fit-contain" src={image}></img>
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
            <div className="row">
                <div className="col-md-6">
                  <img className="calendar" src={CalendarPlaceholder} />
                </div>
                <div className="col-md-6">
                  <img className="calendar" src={CalendarPlaceholder} />
                </div>
              </div>
            </div>
          </div>
          <div className="row rounded mt-1"><Map location={location} zoomLevel={17} /></div>
      </div>
           
      </div>
  );
}