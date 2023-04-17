import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      history("/login");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.registerUser(first_name, last_name, username, email, password);
  };
  return (
    <form>
      <div className="container-fluid">
        <div className="form-group col-md-4">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
        </div>

        <div className="row text-center my-2">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="name">username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="name">email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="name">password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="row justify-content-center">
          <Link to="/">
            <button
              type="submit"
              className="btn btn-primary w-25 mx-auto mt-2 signup-button"
              onClick={(e) => handleSubmit(e)}
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};
