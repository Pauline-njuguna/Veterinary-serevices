import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
// import Signup from "./Signup"

function Navbar() {
  return (
    <nav class="nav">
        <h1 class="logo">M-VET</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        {/* <li>
          <Link to="/signup-login">Sign up/Login</Link>
        </li> */}
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <a>
            <button type="submit">Sign up</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
