import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo_sigma.png";
import { IoHome } from "react-icons/io5";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "2bfef2de-3e7e-48b1-bf39-7541bdadf92d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        event.target.reset();

        Swal.fire({
          icon: "success",
          title: "Enquiry Sent!",
          text: "Thank you. We will contact you soon.",
        }).then(() => {
          setShowModal(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
        });
      }
    } catch (err) {
      console.error(err);

      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: err.message,
      });
    }
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const handleLinkClick = () => {
      if (navbarCollapse.classList.contains("show")) {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        } else {
          // ✅ Fallback: manually hide if Bootstrap is not globally available
          navbarCollapse.classList.remove("show");
        }
      }
    };

    navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick),
      );
    };
  }, []);

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
                onClick={() => setShowModal(true)}>
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
      {/* Enquiry Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content">
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>Enquiry Form</Modal.Title>
        </Modal.Header>

        <Modal.Body className="custom-modal-body">
          <form onSubmit={onSubmit}>
            <input
              type="hidden"
              name="subject"
              value="New Enquiry From Sigma Lifts"
            />

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control custom-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control custom-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control custom-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control custom-input"
                  placeholder="Enter location"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                rows="5"
                className="form-control custom-input"
                placeholder="Write your enquiry here..."
                required></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-100 py-2 fw-bold custom-submit-btn">
              Send Enquiry
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
