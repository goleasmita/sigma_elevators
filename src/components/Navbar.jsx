import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_sigma.png";
import { IoHome } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const form = useRef();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mejxigd", // replace with your EmailJS service ID
        "template_3infbpt", // replace with your EmailJS template ID
        form.current,
        "C5uydIPy16hhzedwF" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Enquiry sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send enquiry, try again.");
        }
      );
  };

  return (
    <div>
      <div>
        <div
          className="topbar d-flex align-items-center fixed-top bg-dark text-light py-1"
          style={{
            zIndex: 1051,
            height: "50px",
            padding: "0 10px",
          }}>
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center me-3">
                <a
                  href="mailto:contact@example.com"
                  className="text-light text-decoration-none">
                  sanjay@sigmalifts.co.in
                </a>
              </i>
              <i className="bi bi-phone d-flex align-items-center">
                <span className="phone">+91-9987429648</span>
              </i>
            </div>
            <div className="social-links d-flex align-items-center">
              <button
                type="button"
                className="btn ms-3 text-light enquiry-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            scrolled ? "scrolled-navbar" : ""
          }`}
          style={{ marginTop: "50px" }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                style={{ width: "220px", height: "45px" }}
                alt=""
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link px-2" to="/">
                    <IoHome style={{ fontSize: "25px" }} />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-2" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-2" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link px-2" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* EmailJS Enquiry Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enquiry Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Write your enquiry here..."
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
