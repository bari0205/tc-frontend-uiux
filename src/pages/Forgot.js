import React, { Component, useState, useContext, useh } from "react";
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

export default function Forgot() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/`);
  };

  return (
    <div className="Container ">
      <div
        className="card login-card"
        style={{ height: "100%", marginTop: "10%" }}
      >
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
                <p className="login-card-description">Reset Password</p>
              </div>
              <div>
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password.
              </div>

              <form
                onSubmit={(e) => handleSubmit(e)}
                style={{ marginTop: "10%" }}
              >
                <div className="form-group">
                  <label for="email">
                    Email <font style={{ color: "red" }}>*</font>
                  </label>
                  <div className="inner-addon left-addon">
                    <i className="glyphicon glyphicon-user">
                      <AiOutlineUser />
                    </i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <input
                  name="login"
                  id="login"
                  className="btn btn-block login-btn mb-4"
                  type="submit"
                  value="Reset"
                />
                <p class="login-card-footer-text">
                  <Link
                    to="/"
                    className="linkakun"
                    style={{ textDecoration: "none" }}
                  >
                    Sign In
                  </Link>
                </p>

                {/* <nav class="login-card-footer-nav">
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
                </nav> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
