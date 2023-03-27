import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
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
        <li>
          <Link to="/signup-login">Sign up/Login</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
