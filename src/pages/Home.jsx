import React from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoPersonOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { LiaToolsSolid } from "react-icons/lia";
import Clients from "./Clients";
import carousel from "../assets/carousel.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";
import quality from "../assets/quality.avif";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import lifts from "../assets/lifts.jpg";
import lifts2 from "../assets/lifts2.jpg";
import lifts3 from "../assets/lifts3.jpg";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: window.innerWidth < 768, // disable on screens < 768px
    });
  }, []);

  return (
    <div className="overflow-hidden" style={{ marginTop: "100px" }}>
      {/* Hero Carousel */}
      <Carousel fade interval={3000} pause={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel}
            alt="First slide"
          />
          <Carousel.Caption className="hero-caption">
            <p className="sub-title">Redefining Vertical Mobility</p>
            <h1 className="main-title">Innovative Elevator Solutions</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption className="hero-caption">
            <p className="sub-title">From Homes to High-Rises</p>
            <h1 className="main-title">RESIDENTIAL & COMMERCIAL LIFTS</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption className="hero-caption">
            <p className="sub-title">TRUSTED SOLUTIONS</p>
            <h1 className="main-title">SAFE & SMOOTH ELEVATORS</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container my-5">
        <div className="row text-center g-4">
          <div className="col-lg-4" data-aos="zoom-in">
            <div className="service-box shadow">
              <hr className="line" />
              <h5>Passenger Elevators</h5>
              <p>
                Smooth, safe, and comfortable rides designed for residential.
              </p>
              <IoPersonOutline className="service-icon" />
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in">
            <div className="service-box shadow">
              <hr className="line" />
              <h5>Freight Elevators</h5>
              <p>
                Strong and reliable lifts for industrial and commercial needs.
              </p>
              <LuBox className="service-icon" />
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in">
            <div className="service-box shadow">
              <hr className="line" />
              <h5>Maintance & Support</h5>
              <p>
                Smooth and safe vertical mobility for healthcare facilities.
              </p>
              <LiaToolsSolid className="service-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container-fluid home mt-5 pt-5" style={{ width: "80%" }}>
        <div className="row g-5">
          <div className="col-lg-6">
            <h1 data-aos="fade-right">WELCOME TO SIGMA LIFTS PVT. LTD</h1>
            <p data-aos="fade-up">
              Sigma Elevators Co. is a 15 year old company which specializes in
              lift AMC, now with requests by our esteemed customers we have
              ventured into providing total vertical solutions to builders and
              architects. Our range includes HOME, PASSENGER, MRL, MANUAL,
              HYDRAULIC, STRETCHER, GOODS & DUMB-WAITER LIFTS under our NEW NAME
              "SIGMA LIFTS PVT LTD." <br /> <br />
              We use parts only from reputed companies such as USHA MARTIN,
              ADCO, HEENA, SHARP, ELECON, SAVERA, JINDAL, YASAKAWA & FUJI to
              name a few. All our products are backed by trained manpower and
              quick response service for TOTAL CUSTOMER SATISFACTION.
            </p>
            <h2 data-aos="fade-down">
              Quality, not <br /> quantity
            </h2>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center"
            data-aos="fade-left">
            <img
              src={quality}
              alt="Sigma Lifts"
              style={{
                height: "50vh",
                width: "100%",
                border: "1px dashed gray",
                padding: "20px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container home2 mt-5 pt-5 mb-5" style={{ width: "80%" }}>
        <div className="row g-5">
          <div className="col-lg-6 text-center" data-aos="fade-right">
            <img
              src={mission}
              alt=""
              style={{
                height: "50vh",
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <h1 style={{ fontSize: "40px", fontWeight: "600" }}>Our Mission</h1>
            <p style={{ fontSize: "20px" }}>
              The goal is to implement operational measures to improve customer
              satisfaction and operational efficiency.
            </p>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <img
              src={vision}
              alt=""
              style={{ height: "50vh", width: "100%", marginBottom: "10px" }}
            />
            <h1 style={{ fontSize: "40px", fontWeight: "600" }}>Our Vision</h1>
            <p style={{ fontSize: "20px" }}>
              Our vision is to achieve leadership in elevator market in India
              through our strong values, innovative, advanced and competitive
              products.
            </p>
          </div>
        </div>
      </div>

      {/* our services  */}
      <div className="container home2  text-center " style={{ width: "80%" }}>
        <h1 className="mb-5">Explore our services</h1>
        <div className="row  g-5">
          <div className="col-lg-4" data-aos="fade-up">
            <img
              src={lifts}
              alt=""
              className="w-100 h-50"
              style={{ borderRadius: "40px" }}
            />
            <h5>Residential Lifts</h5>
            <hr
              style={{
                width: "100px",
                border: "1px solid red",
                margin: "auto",
                marginBottom: "15px",
              }}
            />
            <p>
              Sigma Lifts Pvt. Ltd. provides smooth, reliable, and stylish home
              elevators designed for comfort and safety. Perfect for modern
              apartments, villas, and residential buildings.
            </p>
          </div>

          <div className="col-lg-4" data-aos="zoom-in">
            <img
              src={lifts2}
              alt=""
              className="w-100 h-50"
              style={{ borderRadius: "40px" }}
            />
            <h5> Commercial Heavy Duty Lifts</h5>
            <hr
              style={{
                width: "100px",
                border: "1px solid red",
                margin: "auto",
                marginBottom: "15px",
              }}
            />
            <p>
              Our high-capacity commercial lifts are engineered to handle heavy
              workloads and frequent usage. Ideal for offices, malls,
              industries, and large commercial spaces.
            </p>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <img
              src={lifts3}
              alt=""
              className="w-100 h-50"
              style={{ borderRadius: "40px" }}
            />
            <h5> Hospital Lifts</h5>
            <hr
              style={{
                width: "100px",
                border: "1px solid red",
                margin: "auto",
                marginBottom: "15px",
              }}
            />
            <p>
              Specially designed hospital elevators with spacious cabins for
              stretchers and medical equipment. Ensuring reliability, hygiene,
              and safe transport for patients and staff.
            </p>
          </div>
        </div>
      </div>

      <Clients />
    </div>
  );
}
