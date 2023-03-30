import React from "react";
import "./index.css";

function Footer() {
  return (
    <div
      id="contact"
      className="footer"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <a id="jumpHere"></a>

      <div
        className="container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="footer-col-3">
          <h3>Contact Us</h3>
          <ul style={{ listStyle: "none", padding: 1, color: "#fff" }}>
            <li> +254724123456 Nairobi </li>
            <li> +254712345678 Ngong </li>
            <li>
              email <a href="">groupone@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-col-3">
          <h3>Location</h3>
          <p>
            We are located along <br />
            Magadi Road Dolpin Plaza <br />
            Ground Floor G10
          </p>
        </div>

        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul style={{ listStyle: "none", padding: 1, color: "#fff" }}>
            <li>
              <a href="https://www.facebook.com/" style={{ color: "#fff" }}>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/i/flow/login"
                style={{ color: "#fff" }}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/"
                style={{ color: "#fff" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" style={{ color: "#fff" }}>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        copright@2023-Group one
      </p>
    </div>
  );
}

export default Footer;
