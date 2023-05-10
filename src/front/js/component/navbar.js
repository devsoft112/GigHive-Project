import React, { useContext, useState, useLayoutEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import GigHive from "../../img/GigHive.png";
import GigHivePurple from "../../img/GigHive_Purple.png"
import GigHivePurple2 from "../../img/GigHive_Purple_v2.png"


import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = store.user;
  const handleLogOut = (e) => {
    e.preventDefault();
    actions.logout();
    setIsLoggedIn(false);
  };

  useLayoutEffect(() => {
    if (store.token && store.token != "" && store.token != undefined) {
      setIsLoggedIn(true);
    }
  }, [store.token, isLoggedIn]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={GigHive} alt="" height={50} />
          </span>
        </Link>
        <div className="dropdown">
          {isLoggedIn === false && (
            <button
              className="btn btn-gold dropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp;Welcome
            </button>
          )}{" "}
          {isLoggedIn === true && (
            <button
              className="btn btn-gold dropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                alt=""
                src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
              />
              &nbsp;Welcome {user.username}
            </button>
          )}
          <ul className="dropdown-menu">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            {isLoggedIn === true && (
              <li>
                <Link to="/profile" className="navbar-link">Profile</Link>
              </li>
            )}
            <li>
              <Link to="/artists" className="navbar-link">Artists</Link>
            </li>
            <li>
              <Link to="/venues" className="navbar-link">Venues</Link>
            </li>
            {isLoggedIn === false && (
              <li>
                <Link to="/register" className="navbar-link">Sign Up</Link>
              </li>
            )}
            <li>
              <Link to="/favorites" className="navbar-link">Favorites</Link>
            </li>
            <li>
              {!store.token ? (
                <Link to="/login" className="navbar-link">Log in</Link>
              ) : (
                <Link to="/" className="navbar-link logout">
                  <span onClick={(e) => handleLogOut(e)}>Log out</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
