import React from "react";
import "../pages/stat";

export default function AboutUs() {
  return (
    <div style={{ marginTop: "155px" }}>
      <div className="container">
        <h2 class="section-title">About Sigma Lifts Pvt. Ltd.</h2>
        <p class="about-text">
          Sigma Lifts Pvt. Ltd. is a trusted name in the elevator and lift
          industry, dedicated to providing safe, reliable, and innovative
          vertical mobility solutions. With years of expertise and a commitment
          to excellence, we design, manufacture, and install elevators that meet
          international quality standards.
        </p>
        <p class="about-text">
          Founded with a vision to redefine vertical transportation,
          <strong>Sigma Lifts Pvt. Ltd.</strong> has emerged as a reliable and
          innovative leader in the elevator industry. We specialize in the
          design, manufacturing, installation, and maintenance of elevators and
          escalators that are safe, energy-efficient, and built to last.
        </p>

        <p class="about-text">
          Over the years, we have proudly served residential, commercial, and
          industrial clients, offering customized solutions to meet unique
          requirements. Backed by cutting-edge technology, skilled engineers,
          and a customer-first approach, Sigma Lifts ensures seamless mobility
          solutions for every space.
        </p>
      </div>
      <section className="about scroll-fade" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 style={{ color: "rgb(220,220,220" }}>
                Why Choose Sigma Lifts?
              </h2>
              <p style={{ color: "rgb(212,212,212" }}>
                With over two decades of experience in the elevator industry,
                Sigma Lifts Pvt. Ltd. has established itself as a trusted name
                in vertical transportation solutions.
              </p>
              <p style={{ color: "rgb(212,212,212" }}>
                Our commitment to excellence, safety, and innovation has made us
                the preferred choice for residential, commercial, and industrial
                clients across the region.
              </p>
              <p style={{ color: "rgb(212,212,212" }}>
                We combine cutting-edge technology with traditional
                craftsmanship to deliver elevator solutions that exceed
                expectations.
              </p>
              <div className="stats text-white">
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div>Installations</div>
                </div>
                <div className="stat">
                  <div className="stat-number">25+</div>
                  <div>Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">24/7</div>
                  <div>Support</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99.9%</div>
                  <div>Uptime</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              {/* Animated building with elevators */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg">
                {/* Building */}
                <rect
                  x={50}
                  y={50}
                  width={300}
                  height={300}
                  fill="rgba(255,255,255,0.1)"
                  rx={10}
                />
                {/* Elevator shafts */}
                <rect
                  x={80}
                  y={70}
                  width={60}
                  height={260}
                  fill="rgba(255,255,255,0.2)"
                  rx={5}
                />
                <rect
                  x={170}
                  y={70}
                  width={60}
                  height={260}
                  fill="rgba(255,255,255,0.2)"
                  rx={5}
                />
                <rect
                  x={260}
                  y={70}
                  width={60}
                  height={260}
                  fill="rgba(255,255,255,0.2)"
                  rx={5}
                />
                {/* Elevator cars (animated) */}
                <rect
                  x={90}
                  y={200}
                  width={40}
                  height={50}
                  fill="#ff6b35"
                  rx={3}
                  className="elevator-car">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,-100; 0,0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={180}
                  y={150}
                  width={40}
                  height={50}
                  fill="#ffd700"
                  rx={3}
                  className="elevator-car">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,100; 0,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={270}
                  y={250}
                  width={40}
                  height={50}
                  fill="#667eea"
                  rx={3}
                  className="elevator-car">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0,0; 0,-150; 0,0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </rect>
                {/* Floor indicators */}
                <g fill="white" opacity="0.8">
                  <circle cx={360} cy={100} r={3} />
                  <circle cx={360} cy={150} r={3} />
                  <circle cx={360} cy={200} r={3} />
                  <circle cx={360} cy={250} r={3} />
                  <circle cx={360} cy={300} r={3} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
