import React, { useContext, useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import GigHive from "../../img/GigHive.png";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
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
  console.log(username);
  console.log(password);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      history("/");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.registerUser(first_name, last_name, username, email, password);
  };
  return (
    <>
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-0 border-primary"></div>
              <Card className="shadow">
                <Card.Body className="card-body-signpage">
                  <div className="">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      <img src={GigHive} alt="" height={55} />
                    </h2>

                    <span className=" signup-white-text text-center">
                      Please Enter your Info
                    </span>
                    <div className="mb-3 justify-content-center">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            First Name
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Your First Name"
                            id="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Your Last Name"
                            id="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Username
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Your Username"
                            id="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            id="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className="login-gold-text">
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <div className="white-text-grid justify-content-center align-items-center">
                          <Button
                            className="gold-btn"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                          >
                            Sign Up
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center  login-white-text">
                          Already have an account?{" "}
                          <Link to="/login" className=" login-gold-text">
                            <a className="login-link">Login</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
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
            <label htmlFor="name">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="name">Email</label>
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
            <label htmlFor="name">Password</label>
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
    </>
  );
};
