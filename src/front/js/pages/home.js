import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Artistcard } from "../component/artistscards";
import { Venuecard } from "../component/venuecards";
import { useParams } from "react-router";

import rockMusic from "../../img/RockMusic.png";
import HipHopMusic from "../../img/HipHopMusic.png";
import JazzMusic from "../../img/JazzMusic.png";
import ElectronicMusic from "../../img/ElectronicMusic.png";
import ClassicalMusic from "../../img/ClassicalMusic.png";

export const Home = () => {
  useLayoutEffect(() => {
    actions.getArtist();
    actions.getVenue();
  }, []);
  const { store, actions } = useContext(Context);
  const artists = store.artists;
  const venues = store.venues;
  const { id } = useParams();

  // const [filter, setFilter] = useState(artists)

  // const rockArtists = artists.filter(artist => artist.genre == "rock");
  // const hipHopArtists = artists.filter(artist => artist.genre == "hip hop");
  // const jazzArtists = artists.filter(artist => artist.genre == "jazz");
  // const electronicArtists = artists.filter(artist => artist.genre == "electronic");
  // const classicalArtists = artists.filter(artist => artist.genre == "classical")

  console.log(venues);
  // console.log(rockArtists)

  const rockFilter = () => setArtists(rockArtists);
  const hipHopFilter = () => setArtists(hipHopArtists);
  const jazzFilter = () => setArtists(jazzArtists);
  const electronicFilter = () => setArtists(electronicArtists);
  const classicalFilter = () => setArtists(classicalArtists);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);
  return (
    <div className="container-fluid">
      {/* EVERYTHING ABOVE THIS LINE FOR HEADER TESTS */}
      <div className="row header-image p-3 align-items-center">
        <h1 className="header-text text-center">
          Where <b>Music</b> Meets <b>Opportunity</b>
        </h1>
      </div>
      <div className="row text-center mt-2">
        <h1>Bringing Musicians and Venues Together!</h1>
      </div>
      <div className="row text-center">
        <h4>Genres</h4>
      </div>
      <div className="genre-list row d-flex justify-content-center px-3">
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img className="genreImage" src={rockMusic} onClick={rockFilter} />
          <p className="genreText">Rock</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={HipHopMusic}
            onClick={hipHopFilter}
          />
          <p className="genreText">Hip-Hop</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img className="genreImage" src={JazzMusic} onClick={jazzFilter} />
          <p className="genreText">Jazz</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={ElectronicMusic}
            onClick={electronicFilter}
          />
          <p className="genreText">Electronic</p>
        </div>
        <div className="genre d-flex rounded-circle justify-content-center mx-1">
          <img
            className="genreImage"
            src={ClassicalMusic}
            onClick={classicalFilter}
          />
          <p className="genreText">Classical</p>
        </div>
        <div className="genre other d-flex rounded-circle justify-content-center mx-1">
          <p className="genreText other-Text">Other</p>
        </div>
      </div>
      <div className="row px-3">
        <h1 className="artistitle">Artists</h1>
      </div>
      <div className="card-row px-3 d-flex flex-row flex-wrap justify-content-start">
        {artists.map((artist, index) => {
          return (
            <Artistcard
              artist_name={artist.artist_name}
              genre={artist.genre}
              performance_type={artist.performance_type}
              imgUrl={artist.images == null? "https://cdn.musichouseschool.com/BandPlayingOnStage_1.jpg" : artist.images.split(", ")[0]}
              link={"/artists/" + index}
              id={index}
              starRating="5.0"
            />
          );
        })}
      </div>


      <div className="row px-3 mt-3">
        <h1>Venues</h1>
        <div className="card-row d-flex flex-nowrap px-3">
          {venues.map((venue, index) => {
            return (
              <Venuecard
                venue_name={venue.venue_name}
                city={venue.city}
                state={venue.state}
                imgUrl={venue.images == null? "https://saltplatecity.com/wp-content/uploads/2019/10/vivint-smart-home-concert-venue-salt-lake-city.jpg" : venue.images.split(", ")[0]}
                link={"/venues/" + index}
                id={index}
                starRating="5.0"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
