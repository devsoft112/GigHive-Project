import React, { useContext, useState, useLayoutEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import GigHive from "../../img/GigHive.png";


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
      <div className="gradient-bg"></div>
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={GigHive} alt="" height={50} />
          </span>
        </Link>
        <div className="dropdown">
          {isLoggedIn === false && (
            <button
              className="btn btn-secondary dropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Welcome
            </button>
          )}{" "}
          {isLoggedIn === true && (
            <button
              className="btn btn-secondary dropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                alt=""
                src="https://cdn.vectorstock.com/i/preview-1x/15/40/blank-profile-picture-image-holder-with-a-crown-vector-42411540.webp"
              />
              Welcome {user.username}
            </button>
          )}
          <ul className="dropdown-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn === true && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/venues">Venues</Link>
            </li>
            {isLoggedIn === false && (
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            )}
            <li>
              {!store.token ? (
                <Link to="/login">Log in</Link>
              ) : (
                <Link to="/">
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
