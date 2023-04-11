import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">The Gig Hive</span>
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
                <Link to="/">Favorites</Link>
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
              <Link to="/signup">
                <a>Sign up</a>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <a>Log in</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
