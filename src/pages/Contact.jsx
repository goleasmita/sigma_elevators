import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const message = `Hello Sigma Lifts,I would like to enquire about your services.`;
  return (
    <div className="contact-container " style={{ paddingTop: "150px" }}>
      <h2 className="contact-title" data-aos="fade-down">
        Get in Touch with <span>Sigma Lifts Pvt. Ltd.</span>
      </h2>

      {/* Office Info */}
      <div className="contact-info mb-5">
        <div className="info-box" data-aos="fade-right">
          <h4>Our Office</h4>
          <p>
            Unit No. - 1, Sector-1, Plot No.-21, Koperkhairne, Navi Mumbai -
            400709, Maharashtra, India
          </p>
        </div>

        <div className="info-box" data-aos="zoom-in">
          <h4>Call Us</h4>
          <p>+91-9987429648</p>
        </div>

        <div className="info-box" data-aos="fade-left">
          <h4>Email Us</h4>
          <p>sanjay@sigmalifts.co.in</p>
          <p>sigma.elevators@yahoo.com</p>
        </div>
      </div>

      {/* Quick Contact Buttons */}
      <div className="quick-contact" data-aos="fade-up">
        <button
          className="cta-btn call"
          onClick={() => (window.location.href = "tel:9987429648")}>
          📞 Call Now
        </button>
        <button
          className="cta-btn whatsapp"
          onClick={() =>
            window.open(
              `https://wa.me/9987429648?text=${encodeURIComponent(message)}`,
              "_blank"
            )
          }>
          💬 WhatsApp
        </button>
        <button
          className="cta-btn email"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&to=sanjay@sigmalifts.co.in",
              "_blank"
            )
          }>
          ✉️ Send Email
        </button>
        {/* <button
          className="cta-btn enquiry"
          data-bs-toggle="modal"
          data-bs-target="#enquiryModal">
          📝 Enquiry Form
        </button> */}
      </div>

      {/* FAQ Section */}
      <div className="faq-section" data-aos="fade-up">
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          <details>
            <summary>Do you provide maintenance services?</summary>
            <p>
              Yes, Sigma Lifts offers annual maintenance contracts for all
              elevators.
            </p>
          </details>
          <details>
            <summary>How can I request a new lift installation?</summary>
            <p>You can contact us directly or fill the enquiry form.</p>
          </details>
          <details>
            <summary>What areas do you serve?</summary>
            <p>We operate across Navi Mumbai, Mumbai, and nearby regions.</p>
          </details>
        </div>
      </div>

      {/* Map with Highlight */}
      <div className="map-box" data-aos="fade-up">
        <div className="map-highlight"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d34127.13899527235!2d73.005527!3d19.103852!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0da9e93097f%3A0xd54c1cc7981cf314!2sKopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra%2C%20India!5e1!3m2!1sen!2sus!4v1756278974471!5m2!1sen!2sus"
          title="Sigma Lifts Location"
          width="100%"
          height="360"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </div>
  );
}
