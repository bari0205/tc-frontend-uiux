import React, { Component, useState, useContext } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Dropdown, Table } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { CartContext } from "../context/cartContext";

import { FaBookMedical, FaCheckCircle, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  const [modalAdd, setModalAdd] = useState(false);
  const [state, dispatch] = useContext(CartContext);
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
    <div>
      <div className="card-header">
        <div className="container">
          <div className="row">
            <div className="col col-md-6">
              <div>
                <img
                  src={require("../images/Icon.png")}
                  style={{ margin: "1% 5%", width: "25%" }}
                ></img>
              </div>
            </div>

            <div className="col col-md-6">
              <div style={{ textAlign: "right", marginRight: "10%" }}>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                    style={{ float: "right" }}
                  >
                    <img
                      className="shadowelips"
                      src={require("../images/Ellipse1.png")}
                      style={{ width: "15%" }}
                    ></img>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setModalAdd(true)}>
                      {" "}
                      <p className="juduldop" style={{ display: "unset" }}>
                        <FaBookMedical /> Add Book
                      </p>
                    </Dropdown.Item>
                    <div>
                      <div>
                        <hr
                          style={{
                            height: "0.5px",
                            backgroundColor: "#C9C9C9",
                            marginTop: "10%",
                          }}
                        />
                      </div>
                    </div>

                    <Dropdown.Item
                      onClick={() =>
                        dispatch({
                          type: "LOGOUT",
                        })
                      }
                    >
                      <p className="juduldop" style={{ display: "unset" }}>
                        <FaSignOutAlt color="red" /> Sign Out
                      </p>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="verifikasi">Book Verification</p>
        <div className="row" style={{ marginTop: "3%" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>User or Author</th>
                <th>ISBN</th>
                <th>E-book</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="isitable">1</td>
                <td className="isitable">Randall Munroe</td>
                <td className="isitable">9781789807554</td>
                <td className="isitable">what if ? absurd Question.pdf</td>
                <td className="isitable">
                  <p style={{ color: "#0ACF83" }}> Approve </p>
                </td>
                <td>
                  <div
                    style={{
                      color: "#0ACF83",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    <FaCheckCircle />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="isitable">1</td>
                <td className="isitable">Randall Munroe</td>
                <td className="isitable">9781789807554</td>
                <td className="isitable">what if ? absurd Question.pdf</td>
                <td className="isitable">
                  <p style={{ color: "#0ACF83" }}> Approve </p>
                </td>
                <td>
                  <div
                    style={{
                      color: "#0ACF83",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    <FaCheckCircle />
                  </div>
                </td>
              </tr>

              <tr>
                <td className="isitable">2</td>
                <td className="isitable">J. K. Rownling</td>
                <td className="isitable">9781789807666</td>
                <td className="isitable">Harrypoter.pdf</td>
                <td className="isitable">
                  <p style={{ color: "#FF0742" }}> Cancel </p>
                </td>
                <td>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        width: "40%",
                        backgroundColor: "#FF0742",
                        borderColor: "#FF0742",
                      }}
                    >
                      Cancel
                    </Button>
                    <div style={{ display: "unset", margin: "0% 2%" }}></div>
                    <Button
                      style={{
                        width: "40%",
                        backgroundColor: "#0ACF83",
                        borderColor: "#0ACF83",
                      }}
                    >
                      Approve
                    </Button>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="isitable">2</td>
                <td className="isitable">J. K. Rownling</td>
                <td className="isitable">9781789807666</td>
                <td className="isitable">Harrypoter.pdf</td>
                <td className="isitable">
                  <p style={{ color: "#FF0742" }}> Cancel </p>
                </td>
                <td>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        width: "40%",
                        backgroundColor: "#FF0742",
                        borderColor: "#FF0742",
                      }}
                    >
                      Cancel
                    </Button>
                    <div style={{ display: "unset", margin: "0% 2%" }}></div>
                    <Button
                      style={{
                        width: "40%",
                        backgroundColor: "#0ACF83",
                        borderColor: "#0ACF83",
                      }}
                    >
                      Approve
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <Modal
        size="lg"
        show={modalAdd}
        onHide={() => setModalAdd(false)}
        dialogClassName="modal-90w besardialog"
        contentClassName="besardialog"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton style={{ borderBottom: "white" }}>
          {/* <img src={require('../images/Icon.png')} style={{marginLeft:"0%",marginTop:"2%", width:"13%"}}></img> */}

          {/* <Modal.Title id="example-custom-modal-styling-title">
                    Custom Modal Styling
                </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginLeft: "5%" }}>
            <div>
              <p className="addbook" style={{ marginTop: "0%" }}>
                Add Book
              </p>
            </div>

            <div style={{ width: "95%", marginTop: "5%" }}>
              <Form>
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Publication Date</Form.Label>
                  <Form.Control type="date" placeholder="Publication Date" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Category" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="Pages" />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Control type="text" placeholder="ISBN" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                  <Form.Control
                    as="textarea"
                    placeholder="Address"
                    style={{ height: "150px" }}
                  />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Control type="file" placeholder="Attache File" />
                </Form.Group>
                <div style={{ float: "right" }}>
                  <Button
                    type="submit"
                    variant=""
                    style={{ backgroundColor: "#EE4622" }}
                  >
                    <font className="namabutton">
                      Add Book <FaBookMedical />
                    </font>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
