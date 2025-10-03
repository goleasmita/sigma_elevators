import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-center ">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-about">
          <h4>Sigma Lifts</h4>
          <p>Reliable. Safe. Modern.</p>
        </div>

        {/* Quick Links */}
        {/* <ul className="footer-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sigma Lifts Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
