import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Signup() {
  // Declare state variables for form fields and initialize them to an empty state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pnumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle registration form submission
  // Function to handle registration form submission
  const handleRegister = async (event) => {
    event.preventDefault(); // prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:3000/users", {
        // Update fetch URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          email: email,
          phone: pnumber,
          location: location,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      // TODO: Handle successful registration
    } catch (error) {
      // If an error occurs during registration, set the error state variable
      setError(error.message);
    }
  };
  // ion to handle input changes and add/remove "has-value" class to input boxes
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      // If the input has a value, add "has-value" class
      input.classList.add("has-value");
    } else {
      // If the input does not have a value, remove "has-value" class
      input.classList.remove("has-value");
    }
  };

  return (
    <div className="cover">
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <div className="names">
          {/* First name input box */}
          <div className="inputBox">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value); // Update state variable for first name
                handleInputChange(e);
              }}
              required
            />
            <span>Name</span>
          </div>
          {/* Last name input box */}
          <div className="inputBox">
            <input
              type="text"
              value={pnumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value); // Update state variable for last name
                handleInputChange(e);
              }}
              required
            />
            <span>Phone Number</span>
          </div>
        </div>
        {/* Email input box */}
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value); // Update state variable for email
              handleInputChange(e);
            }}
            required
          />
          <span> Email </span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value); // Update state variable for last name
              handleInputChange(e);
            }}
            required
          />
          <span>Location</span>
        </div>
        {/* Password input box */}
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value); // Update state variable for password
              handleInputChange(e);
            }}
            required
          />
          <span>Password</span>
        </div>
        {/* Register button */}
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        {/* Error message */}
        <div>{error}</div>
      </form>
      {/* Already have an account link */}
      <p>
        Already have an account?{" "}
        <span className="reghere">
          <Link to="/login">Log In</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
