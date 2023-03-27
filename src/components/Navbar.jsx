import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="nav">
      <h1 class="logo">M-VET</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
