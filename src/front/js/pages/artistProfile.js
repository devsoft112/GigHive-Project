import React, { useContext, useEffect, useState} from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import CalendarPlaceholder from "./CalendarPlaceholder.png";

import "../../styles/artistProfile.css";

import { Context } from "../store/appContext";
import { useParams } from "react-router";

export function ArtistProfile() {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  const artists = store.artists;
  
  // <----variables/functions for images/lightbox--->
  const images = artists[id]?.images == null ? ["https://cdn.musichouseschool.com/BandPlayingOnStage_1.jpg", "https://www.stopthebreaks.com/wp-content/uploads/2020/10/iStock-161838634.jpg",  "https://musiciansunion.org.uk/MusiciansUnion/media/content/news/bass-player-on-stage.jpg"] : artists[id]?.images.split(", ")

  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  function ExpandPhoto() {
    setIsOpen(true);
  }
  function changeImgIndex(index){
    setImgIndex(index)
  }

  // <----randomly sets star rating and highlights correct stars--->
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

  return (
  <div className="container-fluid">

      {/* <----Code for LightBox----> */}
      {isOpen && <Lightbox
        mainSrc={images[imgIndex]}
        nextSrc={images[(imgIndex + 1) % images.length]}
        prevSrc={images[(imgIndex + images.length - 1) % images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
      />}



      <div className="row mt-3 px-2 gx-3 d-flex mainRow">
        <div className="col-md-5 mt-2 p-0 h-100">
          <img
            onClick={ExpandPhoto}
            src={images[0]}
            className="profile-main-img object-fit-contain rounded"
          ></img>
        </div>
        <div className="col-md-7 px-3" id="info-section">
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
              <i className={oneStar}></i>
              <i className={twoStar}></i>
              <i className={threeStar}></i>
              <i className={fourStar}></i>
              <i className={fiveStar}></i>
            </div>
          </div>
          <div className="row mt-3">
            <p>{artists[id]?.about_info}</p>
            <p className="my-0">
              <b>Music Type: </b>
              {artists[id]?.genre}
            </p>
            <p>
              <b>Performance Type:</b> {artists[id]?.performance_type}
            </p>
          </div>
          <div className="row px-2">
            {artists[id]?.instagram ? (
              <a
                href={`http://instagram.com/${artists[id]?.instagram}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            ) : null}
            {artists[id]?.tiktok ? (
              <a
                href={`http://tiktok.com/@${artists[id]?.tiktok}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-tiktok fa-xl"></i>
              </a>
            ) : null}
            {artists[id]?.facebook ? (
              <a
                href={`http://facebook.com/${artists[id]?.facebook}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
            ) : null}
            {artists[id]?.twitter ? (
              <a
                href={`http://twitter.com/${artists[id]?.twitter}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
            ) : null}
            {artists[id]?.soundcloud ? (
              <a
                href={`http://soundcloud.com/${artists[id]?.soundcloud}`}
                target="_blank"
                className="social-link rounded-circle mx-2 d-flex justify-content-center align-items-center"
              >
                <i className="fa-brands fa-soundcloud fa-xl"></i>
              </a>
            ) : null}
            {artists[id]?.spotify ? (
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
        <div className="row px-2 d-flex justify-content-between align-items-start">
            <div className="col-md-5 mx-1">
              <div className="row d-flex justify-content-between mt-2">
              {images.map((image, index)=>{
                return <img onClick={() => {
                  ExpandPhoto();
                  changeImgIndex(index);
                }} className="col-md m-2 rounded smImage p-0 object-fit-contain" src={image}></img>

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
      </div>
    </div>
  );
}