import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Dropdown, Table } from "react-bootstrap";

import { FaChevronLeft } from "react-icons/fa";

import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTrophy,
} from "react-icons/ai";

export default function Mainpage() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      style={{ color: "#007bff00" }}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  return (
    <div className="card mainpage">
      <div className="row">
        {/* Profile */}
        <div className="col col-md-6" style={{ paddingRight: "0px" }}>
          <div className="card sub-main-card">
            {/* Row 1 */}
            <div
              className="row"
              style={{ width: "100%", margin: "auto", marginTop: "5%" }}
            >
              <div className="col">
                <p className="nama-prop">My Profile</p>
              </div>
              <div className="col col-class">
                <button className="button-edit">Edit</button>
              </div>
            </div>
            <hr className="hr-punya" style={{ margin: "auto" }} />
            {/* <Row 2 */}
            <div
              className="row"
              style={{ width: "100%", margin: "auto", marginTop: "5%" }}
            >
              <div className="col-md-4">
                <img
                  src={require("../assets/images/user.png")}
                  className="prop-logo"
                />
              </div>
              <div className="col-md-8">
                <p className="text-nama">Ilham Akbari Winoto</p>
              </div>
            </div>
            {/* Row 3  */}
            <div
              className="row"
              style={{ width: "100%", margin: "auto", marginTop: "5%" }}
            >
              <Table responsive>
                <tbody>
                  <tr>
                    <td>
                      <AiOutlineUser />
                    </td>
                    <td>MemberID</td>
                    <td></td>
                    <td>123456</td>
                  </tr>

                  <tr>
                    <td>
                      <AiOutlineMail />
                    </td>
                    <td>Email</td>
                    <td></td>
                    <td>akbariilham129@gmail.com</td>
                  </tr>

                  <tr>
                    <td>
                      <AiOutlinePhone />
                    </td>
                    <td>Phone</td>
                    <td></td>
                    <td>083817427596</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        {/* Point */}
        <div className="col col-md-6" style={{ paddingLeft: "0px" }}>
          <div className="card sub-main-card1">
            {/* Row 1 */}
            <div
              className="row"
              style={{ width: "100%", margin: "auto", marginTop: "5%" }}
            >
              <div className="col">
                <p className="nama-prop">My Points</p>
              </div>
              <div className="col col-class">
                <button className="button-edit" style={{ width: "70%" }}>
                  See Point
                </button>
              </div>
            </div>
            <hr className="hr-punya" style={{ margin: "auto" }} />
            {/* <Row 2 */}
            <div
              className="row"
              style={{
                width: "100%",
                margin: "auto",
                marginTop: "5%",
                textAlign: "center",
              }}
            >
              <p
                className="icon-style"
                style={{ margin: "auto", marginTop: "-2%", marginRight: "0%" }}
              >
                <AiOutlineTrophy />
              </p>

              <p
                className="icon-style"
                style={{ margin: "auto", marginLeft: "0%" }}
              >
                0
              </p>
            </div>
            {/* Row 3  */}
            <div
              className="row"
              style={{ width: "100%", margin: "auto", marginTop: "5%" }}
            >
              <Table responsive>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>No Data</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
