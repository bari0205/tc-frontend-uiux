import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { CartContextProvider } from "./context/cartContext";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

// Import Page
import Mainpage from "./pages/Mainpage";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Forgot from "./pages/Forgot";
import Register from "./pages/Register";

//Import Component
import Navbar from "./components/Navbar";

export default function App() {
  return (
    // <div>
    //   {/* <AdminHome /> */}
    //   <LandingPage />

    // </div>

    <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/forgot-password" component={Forgot} />
          <Route exact path="/sign-up" component={Register} />
          <div className="card main-card">
            <div className="row">
              <div className="col col-md-4">
                <img
                  src={require("./assets/images/logo.svg")}
                  className="main-logo"
                />
              </div>
              <div className="col col-md-8"></div>
            </div>

            <div>
              <Navbar />
            </div>
            <div>
              <Route exact path="/main" component={Mainpage} />
              <Route exact path="/profile" component={Profile} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}
