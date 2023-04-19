import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import GigHive from "../../img/GigHive.png";

import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={GigHive} alt="" height={50} />
          </span>
        </Link>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </a>

          <ul className="dropdown-menu">
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/profile">Profile</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/artists">Artists</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/venues">Venues</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/artists">Browse Works</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/help">Host an event</Link>
              </a>
            </li>
            <li>
              <Link to="/register">
                <a>Sign up</a>
              </Link>
            </li>
            <li>
              {!store.token ? (
                <Link to="/single">
                  <a>Log in</a>
                </Link>
              ) : (
                <Link to="/single">
                  <a onClick={() => actions.logout()}>Log out</a>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
