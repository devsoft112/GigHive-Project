import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import GigHive from "../../img/GigHive.png";
// import { Signup } from "./signup";

export function Login() {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  console.log(username);
  console.log(password);

  function handleClick(e) {
    e.preventDefault();
    actions.login(username, password);
  }
  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      history("/");
  }, [store.token, history]);

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-0 border-primary"></div>
            <Card className="shadow">
              <Card.Body className="card-body-login">
                <div className="mb-3 mt-md-4 justify-content-center">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">
                    <img src={GigHive} alt="" height={55} />
                  </h2>

                  <p className=" mb-5 login-white-text">Please enter your username and password</p>
                  <div className="mb-3 justify-content-center">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center login-gold-text">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="login-gold-text">Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small  text-center">
                          <a className="login-gold-text login-link" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          className="gold-btn"
                          type="submit"
                          onClick={handleClick}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center  login-white-text">
                        Don't have an account?{" "}
                        <Link to="/register" className=" login-gold-text">
                          <a className="login-link">Sign up</a>
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
  );
}
