import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="src/components/image/cat logo.jpg" alt="logo"></img>
        <h1 className="logo">M-VET</h1>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/pet">Add pet</Link>
        </li>
      
        <li>
          <button className="signup-btns">
            <Link to="/signup-login">Sign up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
