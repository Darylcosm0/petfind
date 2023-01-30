import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Navbar component */}
      <nav className="NAVBAR">
        {/* Container for navigation links */}
        <div className="navbar-links">
          {/* Link to homepage */}
          <Link to="/">
            {/* Logo image */}
            <img
              alt=""
              src="https://www.alertall.com/Pet-Finder-Window-Clings/image/item/008"
              className="img-nav"
            />
          </Link>
          {/* Link to animal list page */}
          <Link className="img-nav" to="/animalList">
            FIND PET
          </Link>
          {/* Link to organization list page */}
          <Link className="img-nav" to="/organizationList">
            <span>ORGANISATIONS </span>
          </Link>
          {/* Link to sign up page */}
          <Link className="img-nav" to="/login">
            SIGN UP
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
