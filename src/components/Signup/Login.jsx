import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Login() {
  // Declearing state variables and initialize them to empty values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevents form from submitting
    try {
      // Handle login logic here
    } catch (error) {
      setError(error.message); // Sets error message if an error occurs
    }
  };

  // Function to handle input changes and add/remove CSS class accordingly
  const handleInputChange = (e) => {
    const input = e.target;
    if (input.value) {
      input.classList.add("has-value"); // Adds class if input has value
    } else {
      input.classList.remove("has-value"); // Removes class if input has no value
    }
  };

  // Render login form component
  return (
    <div className="cover">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange(e);
            }}
            required
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange(e);
            }}
            required
          />
          <span>Password</span>
        </div>
        <button type="submit" id="btn-login">
          Login
        </button>
        <div>{error}</div>
      </form>
      <p>
        Don't have an account?{" "}
        <span className="reghere">
          <Link to="/signup-login">Sign Up</Link>
        </span>
      </p>
      
    </div>
  );
}

export default Login;
