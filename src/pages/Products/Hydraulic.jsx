import React from "react";
import hydra2 from "../../assets/hydra2.jpg";
import hydra3 from "../../assets/hydra3.jpg";

export default function Hydraulic() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title">Hydraulic Lifts</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={hydra2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={hydra3} alt="MRL Control Panel" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              HYDRAULIC: Hydraulically driven lifts move the lift cabin directly
              or indirectly by means of a piston and cylinder. it is generally
              used in low rise low speed applications and where the advantage of
              flexible positioning of the machine room and reduced load on the
              hoist way walls is useful.
            </p>

            {/* Content Section */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>Ideal For</h3>
                <ul>
                  <li>Bungalows</li>
                  <li>Row Houses</li>
                  <li>Duplex Flates</li>
                </ul>
              </div>
            </section>

            <div classname="info-block ms-2">
              <h3>Specifications</h3>
              <div className="table-responsive">
                <table className="spec-table">
                  <tbody>
                    <tr>
                      <td>Capacity</td>
                      <td>3 Passengers (Max 240 Kgs.)</td>
                    </tr>
                    <tr>
                      <td>Cabin Weight</td>
                      <td>230 Kgs. (Max.)</td>
                    </tr>
                    <tr>
                      <td>Travel</td>
                      <td>8.6 meters (Max.)</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>0.2 Meters/sec</td>
                    </tr>
                    <tr>
                      <td>Power Supply</td>
                      <td>Single Phase 230 Volts, 50 Hz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
