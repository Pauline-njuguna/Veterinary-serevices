import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    setIsLoggedIn(true);
    history.push("/form");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    setIsLoggedIn(true);
    history.push("/form");
  };

  if (isLoggedIn) {
    return <Redirect to="/form" />;
  }

  return (
    <div>
      <h1>Sign up / Login</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin}>Log in</button>
        <button onClick={handleSignup}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUpLogin;
