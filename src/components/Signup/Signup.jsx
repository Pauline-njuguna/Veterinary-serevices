import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Signup() {
  // Declare state variables for form fields and initialize them to an empty state
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function to handle registration form submission
// Function to handle registration form submission
const handleRegister = async (event) => {
  event.preventDefault(); // prevent default form submission behavior
  try {
    const response = await fetch("http://localhost:3000/users/register", { // Update fetch URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fname,
        lastName: lname,
        email: email,
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
              value={fname}
              onChange={(e) => {
                setFirstName(e.target.value); // Update state variable for first name
                handleInputChange(e);
              }}
              required
            />
            <span>First Name</span>
          </div>
          {/* Last name input box */}
          <div className="inputBox">
            <input
              type="text"
              value={lname}
              onChange={(e) => {
                setLastName(e.target.value); // Update state variable for last name
                handleInputChange(e);
              }}
              required
            />
            <span>Last Name</span>
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
          <span>Email</span>
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
