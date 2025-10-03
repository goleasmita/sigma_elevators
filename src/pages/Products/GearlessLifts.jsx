import React from "react";
import gear from "../../assets/gearless.jpg";
import gear2 from "../../assets/gearless2.jpg";
import gear3 from "../../assets/gearless3.jpg";

export default function GearlessLifts() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title">GEARLESS MACHINES (MRL)</h2>
              <p className="gearless-subtitle">
                Modern, eco-friendly, and efficient elevator solutions for
                buildings of the future.
              </p>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={gear} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={gear2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={gear3} alt="MRL Control Panel" />
                  </div>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>Applications</h3>
                <ul>
                  <li>Small footprint requirements</li>
                  <li>Machine roomless or small machine room sites</li>
                  <li>Low to mid-rise buildings</li>
                </ul>
              </div>

              <div className="info-block">
                <h3>Gearless Machine</h3>
                <ul>
                  <li>The heart is a Rare Permanent Magnet Motor.</li>
                  <li>
                    Combined with V3F Drive → better performance & 40% less
                    power consumption.
                  </li>
                  <li>No gearbox, no oil → eco-friendly & low maintenance.</li>
                </ul>
              </div>

              <div className="info-block">
                <h3>Benefits</h3>
                <ul>
                  <li>
                    Higher initial cost but huge savings in long-term (low
                    energy).
                  </li>
                  <li>No machine room construction costs.</li>
                  <li>
                    Enhanced building aesthetics (no protruding machine room on
                    top).
                  </li>
                </ul>
              </div>
            </section>

            <div className="table-container table-responsive">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th rowSpan="2">Persons</th>
                    <th rowSpan="2">Rated Load Kg</th>
                    <th rowSpan="2">Rated Speed M/S</th>
                    <th rowSpan="2">Car Size Cw x CD</th>
                    <th rowSpan="2">
                      Door width men Two Panel, Centre Opening
                    </th>
                    <th colSpan="3">Hoist Way Size in mm</th>
                    <th rowSpan="2">Motor Power KW</th>
                    <th rowSpan="2">Max Travel Height m</th>
                  </tr>
                  <tr>
                    <th>HW x HD</th>
                    <th>OH</th>
                    <th>PD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan="3">8</td>
                    <td rowSpan="3">544</td>
                    <td>1</td>
                    <td rowSpan="3">1300 x 1100</td>
                    <td rowSpan="3">800</td>
                    <td rowSpan="3">2200 x 1700</td>
                    <td rowSpan="3">4200</td>
                    <td rowSpan="3">1600</td>
                    <td>4.3</td>
                    <td rowSpan="3">50</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>6.8</td>
                  </tr>
                  <tr>
                    <td>1.75</td>
                    <td>7.4</td>
                  </tr>

                  <tr>
                    <td rowSpan="3">10</td>
                    <td rowSpan="3">680</td>
                    <td>1</td>
                    <td rowSpan="3">1300 x 1350</td>
                    <td rowSpan="3">800</td>
                    <td rowSpan="3">2200 x 1800</td>
                    <td rowSpan="3">4200</td>
                    <td rowSpan="3">1600</td>
                    <td>5.4</td>
                    <td rowSpan="3">50</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>8.6</td>
                  </tr>
                  <tr>
                    <td>1.75</td>
                    <td>9.6</td>
                  </tr>

                  <tr>
                    <td rowSpan="3">13</td>
                    <td rowSpan="3">884</td>
                    <td>1</td>
                    <td rowSpan="3">1500 x 1500</td>
                    <td rowSpan="3">900</td>
                    <td rowSpan="3">2400 x 1950</td>
                    <td rowSpan="3">4200</td>
                    <td rowSpan="3">2000</td>
                    <td>6.4</td>
                    <td rowSpan="3">50</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>10.7</td>
                  </tr>
                  <tr>
                    <td>1.75</td>
                    <td>11.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
