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
                      <strong>Please Enter your Info</strong>
                    </span>
                    <div className="mb-3 justify-content-center">
                      <Form>
                        <Form.Group className="mb-3 formsi" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            First Name
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Your First Name"
                            id="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 formsi" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Last Name
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Your Last Name"
                            id="lastName"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 formsi " controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Username
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3 formsi" controlId="formBasicEmail">
                          <Form.Label className="text-center login-gold-text">
                            Email
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 formsi"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className="login-gold-text">
                            Password
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <div className="signup-white-text justify-content-center align-items-center">
                          <Button
                            className="gold-btn signs"
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
    </>
  );
};
