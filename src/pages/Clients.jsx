import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/clients/logo1.jpg";
import img2 from "../assets/clients/logo2.jpg";
import img3 from "../assets/clients/logo3.png";
import img4 from "../assets/clients/logo4.jpeg";
import img5 from "../assets/clients/logo5.jpeg";
import img6 from "../assets/clients/logo6.webp";
import img7 from "../assets/clients/logo7.png";
import img8 from "../assets/clients/logo8.jpeg";
import img9 from "../assets/clients/logo9.webp";
import img10 from "../assets/clients/logo10.webp";
import img11 from "../assets/clients/logo11.webp";
import img12 from "../assets/clients/logo12.webp";

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "Client A",
      logo: img1,
    },
    {
      id: 2,
      name: "Client B",
      logo: img2,
    },
    {
      id: 3,
      name: "Client C",
      logo: img3,
    },
    {
      id: 4,
      name: "Client D",
      logo: img4,
    },
    {
      id: 5,
      name: "Client E",
      logo: img5,
    },
    {
      id: 6,
      name: "Client F",
      logo: img6,
    },
    {
      id: 7,
      name: "Client F",
      logo: img7,
    },
    {
      id: 8,
      name: "Client F",
      logo: img8,
    },
    {
      id: 9,
      name: "Client F",
      logo: img9,
    },
    {
      id: 10,
      name: "Client F",
      logo: img10,
    },
    {
      id: 11,
      name: "Client F",
      logo: img11,
    },
    {
      id: 12,
      name: "Client F",
      logo: img12,
    },
  ];
  return (
    <div className="container pt-5 mt-3 py-5" data-aos="fade-right">
      <h1 className="text-center mb-5 section-title">Our Valuable Clients</h1>
      <div className="row g-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="col-6 col-md-4 col-lg-3 d-flex justify-content-center "
            data-aos="zoom-in">
            <div className="client-card p-3 w-100">
              <img
                src={client.logo}
                alt={client.name}
                className="img-fluid client-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
