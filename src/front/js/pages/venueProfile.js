import React, { useContext, useEffect,useLayoutEffect, useState, useRef } from "react";

import Modal from 'react-bootstrap/Modal';

import CalendarPlaceholder from '../pages/CalendarPlaceholder.png'

import Carousel from "better-react-carousel";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import "../../styles/venueProfile.css";
import { Map } from "../component/Map/Map.jsx";

import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function VenueProfile() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const venues = store.venues;
  const venue = venues.filter(venue => venue.id == id)[0]  

  // <---variables/functions for mesaging modal--->
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [enableMessage, setEnableMessage] = useState("btn btn-sm purplebutton disabled")

  useLayoutEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      setIsLoggedIn(true);
      setEnableMessage("btn btn-sm purplebutton");
    }
  }, [store.token, isLoggedIn]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [messageBody, setMessageBody] = useState("")
  const [messageSubject, setMessageSubject] = useState("")

  const testSenderID = 123
  const testReceiverID = 456

  useEffect(() => {
    // actions.getUser();
    // console.log(store.user)
  }, []);

  const sendMessage = () => {
    const date= new Date()
    const formattedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    
    actions.sendMessage ( 
      messageSubject,
      messageBody,
      testSenderID,
      testReceiverID,
      formattedDate
    )

    handleClose()
  }

  // <----variables/functions for images/lightbox--->
  const images =
    venue?.images == null
      ? [
          "https://saltplatecity.com/wp-content/uploads/2019/10/vivint-smart-home-concert-venue-salt-lake-city.jpg",
          "https://lajolla.com/wp-content/uploads/2019/01/hob.jpg",
          "https://pyxis.nymag.com/v1/imgs/1a0/d70/15535af3e89c90d627f4c19af4f74f2064-best-concert-venue-music-hall-of-william.rsquare.w700.jpg",
        ]
      : venue?.images.split(", ");

  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  function ExpandPhoto() {
    setIsOpen(true);
  }
  function changeImgIndex(index) {
    setImgIndex(index);
  }

  // <----randomly sets star rating and highlights correct stars--->
  const [oneStar, setOneStar] = useState("fa-solid fa-star s1");
  const [twoStar, setTwoStar] = useState("fa-solid fa-star s2");
  const [threeStar, setThreeStar] = useState("fa-solid fa-star s3");
  const [fourStar, setFourStar] = useState("fa-solid fa-star s4");
  const [fiveStar, setFiveStar] = useState("fa-solid fa-star s5");

  let starRating = Math.ceil(Math.random() * 5);
  // console.log(starRating);
  useEffect(() => {
    if (starRating == 5) {
      setOneStar("fa-solid fa-star s1 goldRating");
      setTwoStar("fa-solid fa-star s2 goldRating");
      setThreeStar("fa-solid fa-star s3 goldRating");
      setFourStar("fa-solid fa-star s4 goldRating");
      setFiveStar("fa-solid fa-star s5 goldRating");
    } else if (starRating == 4) {
      setTwoStar("fa-solid fa-star s2 goldRating");
      setThreeStar("fa-solid fa-star s3 goldRating");
      setFourStar("fa-solid fa-star s4 goldRating");
      setFiveStar("fa-solid fa-star s5 goldRating");
    } else if (starRating == 3) {
      setThreeStar("fa-solid fa-star s3 goldRating");
      setFourStar("fa-solid fa-star s4 goldRating");
      setFiveStar("fa-solid fa-star s5 goldRating");
    } else if (starRating == 2) {
      setFourStar("fa-solid fa-star s4 goldRating");
      setFiveStar("fa-solid fa-star s5 goldRating");
    } else {
      setFiveStar("fa-solid fa-star s5 goldRating");
    }
  }, []);

  // <-----location object & fetch for map component----->
  const Address = `${venue?.address}, ${venue?.city}, ${venue?.state}`;
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  
  const map = useRef(null)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY < 300) {
            setScrollCheck(true);
            setFade(0)
        } else {
            setFade(1)
        }
        if (window.scrollY >= 700){
          setScrollCheck(false);
        }
    });
}, []);
  const [fade, setFade] = useState(0)

  const [scrollCheck, setScrollCheck] = useState(true)

  const scrollToMap = () => {
    map.current?.scrollIntoView({behavior: 'smooth'});
    setFade(1)    
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'})
    setFade(0)
  }

  const location = {
    address: Address,
    lat: lat,
    lng: lng,
    name: venue?.venue_name,
  };

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${Address}&key=AIzaSyDecCwDfJgrb7eqAPY9il-YWvcs5RdPmuE`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      setLat(jsonData.results[0].geometry.location.lat);
      setLng(jsonData.results[0].geometry.location.lng);
    })
    .catch((error) => {
      // console.log(error);
    });

  return (
    <div className="container-fluid d-block">
      <div className="mainContent">
      {/* <----Code for LightBox----> */}
      {isOpen && (
        <Lightbox
          mainSrc={images[imgIndex]}
          nextSrc={images[(imgIndex + 1) % images.length]}
          prevSrc={images[(imgIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImgIndex((imgIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
      )}

{/* <-----------------Code for Messaging Modal---------------------> */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send {venue?.venue_name} a message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <input type="text" className="form-control mb-2" id="messageSubject" placeholder="Message Subject" onChange={(e) => setMessageSubject(e.target.value)}/>
          <textarea className="form-control" id="messageBody" rows="3" placeholder="Write your message here" onChange={(e) => setMessageBody(e.target.value)}></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </Modal.Footer>
    </Modal>
      
      <div className="row mt-3 px-2 gx-3 d-flex">
        <div className="col-md-5 mt-2 p-0 h-100">
          <img
            onClick={() => {
              ExpandPhoto();
              changeImgIndex(0);
            }}
            src={images[0]}
            className="profile-main-img object-fit-contain rounded h-100"
          ></img>
        </div>
        <div className="col-md-7 px-3">
          <div className="d-flex flex-row mb-0">
            <div>
              <h2 className="venueName m-0">{venue?.venue_name}</h2>
            </div>
            <div className="mx-2 pt-1">
              <button className={enableMessage} onClick={handleShow}>Message</button>
            </div>
          </div>
          
            
            <div className="row mt-0 ">
              <p className="my-0 small">
                <b>
                  {venue?.address},{venue?.city}, {venue?.state}{" "}
                  {venue?.zip_code}
                </b>
              </p>

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
          
          <div className="row mt-1">
            <p className="mb-1">{venue?.about_info == "" || venue?.about_info == null ? "More info about this venue hasn't been added yet!" : venue?.about_info}</p>
            <p className="my-0">
              <b>Capacity: </b>
              {venue?.capacity}
            </p>
            <p className="my-0">
              <b>Music Type: </b>
              {venue?.music_type}
            </p>
            <p className="my-0">
              <b>Hiring?: </b>
              {venue?.hiring}
            </p>
            <p className="my-0">
              <b>Pay Rate: </b>
              {venue?.pay_rate}
            </p>
            <p className="my-0">
              <b>Fee Rate: </b>
              {venue?.fees}
            </p>
            <p className="my-0">
              <b>Indoor/Outdoor Staging: </b>
              {venue?.in_out}
            </p>
            <p className="my-0">
              <b>Equipment Info: </b>
              {venue?.equipment}
            </p>
          </div>
          <div className="row mt-3 px-2">
            {venue?.instagram ? (
              <a
                href={`http://instagram.com/${venue?.instagram}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            ) : null}
            {venue?.tiktok ? (
              <a
                href={`http://tiktok.com/@${venue?.tiktok}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-tiktok fa-xl"></i>
              </a>
            ) : null}
            {venue?.facebook ? (
              <a
                href={`http://facebook.com/${venue?.facebook}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
            ) : null}
            {venue?.twitter ? (
              <a
                href={`http://twitter.com/${venue?.twitter}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
            ) : null}
            {venue?.soundcloud ? (
              <a
                href={`http://soundcloud.com/${venue?.soundcloud}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-soundcloud fa-xl"></i>
              </a>
            ) : null}
            {venue?.spotify ? (
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
        <div className="row px-2 d-flex justify-content-between align-items-start secondRow">
          <div className="col-md-5 mx-1">
          <div className="row mt-2">
              <Carousel cols={3} rows={1} gap={35} loop>
              {images.map((image, index) => {
                return ( <Carousel.Item><img
                  onClick={() => {
                    ExpandPhoto();
                    changeImgIndex(index);
                  }}
                  className="col-md m-2 rounded smImage object-fit-cover"
                  src={image}
                ></img></Carousel.Item>
        
        )})}</Carousel>

            </div>
          </div>
          <div className="col-md-6">
              <div className="row mt-2">
                <div className="col-md-6">
                  <img className="calendar" src={CalendarPlaceholder} />
                </div>
                <div className="col-md-6">
                  <img className="calendar" src={CalendarPlaceholder} />
                </div>
              </div>
            </div>
        </div>
        
        </div>
        <div className="row where-we-are mb-0 mt-2">
          {scrollCheck ?   <h2 onClick={scrollToMap}><i className="fa-solid fa-arrow-down"></i>  Where We Are  <i className="fa-solid fa-arrow-down"></i></h2> : <h2 onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i>  Back to Profile  <i className="fa-solid fa-arrow-up"></i></h2>
}
        </div>
        </div>
        <div className="row rounded mt-1" ref={map} id="map" fade={fade}>

          <Map location={location} zoomLevel={18} />
        </div>
      
    </div>
  );
}