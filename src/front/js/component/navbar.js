import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle rounded-pill"
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
                <Link to="/Works">Browse Works</Link>
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
              <Link to="/login">
                <a>Sign in</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
