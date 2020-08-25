import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import logo from "./65508.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function StartpageNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Chef-Bot
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default StartpageNav;
