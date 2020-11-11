import React, { useState, useContext } from "react";
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

import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaSignOutAlt, FaHeart, FaGem } from "react-icons/fa";

import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "../assets/css/react-sidenav.css";

export default function Navbar() {
  const history = useHistory();
  return (
    <div>
      <SideNav
        style={{
          marginBottom: "1%",
          borderRadius: "0px 0px 0px 40px",
        }}
        onSelect={(selected) => {
          const to = "/" + selected;
          history.push(to);
        }}
        className="sidebar-position"
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="main">
          <NavItem eventKey="main" className="nav-item">
            <NavIcon>
              <AiOutlineHome className="logo-menu" style={{ color: "black" }} />
            </NavIcon>
            <NavText style={{ color: "black" }}>Home</NavText>
          </NavItem>
          <NavItem eventKey="profile">
            <NavIcon>
              <AiOutlineUser className="logo-menu" style={{ color: "black" }} />
            </NavIcon>
            <NavText style={{ color: "black" }}>Profile</NavText>
          </NavItem>
          {/* <NavItem eventKey="charts">
            <NavIcon>
              <AiOutlineDashboard />
            </NavIcon>
            <NavText>Charts</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Line Chart</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Bar Chart</NavText>
            </NavItem>
          </NavItem> */}
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}
