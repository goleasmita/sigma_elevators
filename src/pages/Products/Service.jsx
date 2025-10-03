import React from "react";
import service from "../../assets/service.webp";

export default function Capsule() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title">SERVICE LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={service} alt="MRL Lift" />
                  </div>
                </div>
              </div>
              <h4 className="fw-bolder text-danger mt-5">
                Service Lifts are Available Either On Outright Basis Or On
                Rental Basis.
              </h4>
            </section>
            {/* Content Section */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>Benefits are:</h3>
                <ul>
                  <li>
                    Transportation of goods and manpower faster and quicker.
                  </li>
                  <li>
                    Sample flats are mostly on higher floors hence potential
                    customers can be quickly taken up for inspection.
                  </li>
                  <li>
                    After completion of the project the lift can be resold back
                    to us.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
