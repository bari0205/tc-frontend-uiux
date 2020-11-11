import React, { Component, useState, useContext } from "react";
import ReactDOM from "react-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import "../assets/css/login.css";
import { CartContext } from "../context/cartContext";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";

export default function App() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/main`);
  };

  return (
    <div className="Container ">
      <div className="card login-card ">
        <div className="row no-gutters">
          <div
            style={{
              background:
                "linear-gradient(to bottom, #000099 -50%, #00ffcc 100%)",
            }}
            className="col-md-5"
          >
            <img
              src={require("../assets/images/logo.svg")}
              alt="login"
              className="login-card-img"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="brand-wrapper">
                <p className="login-card-description">Your Account</p>
              </div>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label for="email">Username</label>
                  <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-user">
                      <AiOutlineUser />
                    </i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Username or Email address"
                      value={email}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label for="password">Password</label>
                  <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-user">
                      <AiOutlineLock />
                    </i>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                      <label>
                        <input
                          type="checkbox"
                          name="remember"
                          value="remember"
                        />{" "}
                        Stay Sign In
                      </label>
                    </div>
                    <div className="col-md-6" style={{ textAlign: "right" }}>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  name="login"
                  id="login"
                  className="btn btn-block login-btn mb-4"
                  value="Login"
                />
                <p class="login-card-footer-text">
                  <Link
                    to="/sign-up"
                    className="linkakun"
                    style={{ textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </p>

                <nav class="login-card-footer-nav">
                  <p>
                    By signing in, I agree with the{" "}
                    <Link to="" target="blank">
                      Term and Condition
                    </Link>{" "}
                    and{" "}
                    <Link to="" target="blank">
                      Privacy Policy
                    </Link>{" "}
                    of Picasso Hotel.
                  </p>
                </nav>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
