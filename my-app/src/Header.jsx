import React from "react";
import { Button } from "react-bootstrap";
import logo from "./65508.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3 style={{ margin: "30px" }}>Let's Find a Recipe!</h3>
      <Link to="/ingredients">
        <Button variant="primary" size="lg">
          SCAN FOOD
        </Button>
      </Link>
    </header>
  );
}

export default Header;
