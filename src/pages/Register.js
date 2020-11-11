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

export default function Register() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/`);
  };

  return (
    <div className="Container1">
      <div className="card login-card" style={{ height: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <div className="brand-wrapper" style={{ textAlign: "center" }}>
                <img
                  src={require("../assets/images/logo.svg")}
                  alt="login"
                  className="logo-regis"
                />
                <p
                  className="login-card-description"
                  style={{ fontSize: "18px", marginTop: "5%" }}
                >
                  Join us today to enjoy the lowest rates and special member
                  only privilledges
                </p>
              </div>

              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                  <label for="email">
                    Title <font style={{ color: "red" }}>*</font>
                  </label>
                  <select
                    name="title"
                    className="form-control"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms</option>
                  </select>
                </div>

                <Form.Group className="form-2">
                  <label>
                    {" "}
                    First Name<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="text"
                    name="firts"
                    className="form2"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group className="form-2">
                  <label>
                    {" "}
                    Last Name<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="text"
                    name="last"
                    className="form2"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <label>
                    {" "}
                    Birthday<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="date"
                    name="date"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <label>
                    {" "}
                    Phone Number<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="number"
                    name="phone"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <label> Referal Code</label>
                  <Form.Control
                    type="text"
                    name="ref"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group className="form-2">
                  <label>
                    {" "}
                    Password<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="text"
                    name="pass"
                    className="form2"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <Form.Group className="form-2">
                  <label>
                    {" "}
                    Confirm Password<font style={{ color: "red" }}>*</font>
                  </label>
                  <Form.Control
                    type="text"
                    name="pass1"
                    className="form2"
                    style={{ padding: "10px 5px", fontSize: "16px" }}
                  />
                </Form.Group>

                <input
                  type="submit"
                  className="btn btn-block login-btn mb-4"
                  value="Sign Up"
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
