import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-container container-fluid">
        <div className="container nav-div d-flex h-100">
          <ul className="d-flex navItems">
            <Link className="navLinks" to="/">
              <li>Home</li>
            </Link>
            <Link className="navLinks" to="/about">
              <li>About Us</li>
            </Link>
            <Link className="navLinks" to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link className="navLinks" to="/login">
              <li>Login</li>
            </Link>
            <Link className="navLinks" to="/register">
              <li>Register</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
