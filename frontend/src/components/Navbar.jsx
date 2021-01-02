import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Deccan Air
        </Link>
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">
            Flights
          </Link>
          <Link to="/create" className="nav-link">
            Add Flight
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
