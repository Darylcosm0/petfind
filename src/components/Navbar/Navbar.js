import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="NAVBAR">
        <div className="navbar-links">
          <Link to="/">
            <img
              alt=""
              src="https://www.alertall.com/Pet-Finder-Window-Clings/image/item/008"
              className="img-nav"
            />
          </Link>
          <Link className="img-nav" to="/animalList">
            FIND PET
          </Link>
          <Link className="img-nav" to="/organizationList">
            <span>ORGANISATIONS </span>
          </Link>
          <Link className="img-nav" to="/login">
            SIGN UP
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
