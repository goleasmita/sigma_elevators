import React from "react";
import { Table } from "react-bootstrap";
import capsule from "../../assets/capsule.jpg";
import capsule2 from "../../assets/capsule2.jpg";
import capsule3 from "../../assets/capsule3.jpg";

export default function Capsule() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> CAPSULE LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={capsule} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={capsule2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={capsule3} alt="MRL Lift" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              Capsule Lifts such as 3 Sides Glass, 5 Sides Glass, Rear Panel
              Glass, Round Glass etc. are available in a variety of combinations
              as per the customers choice. Also available are special SS
              finishes in Gold Etching and Silver finishes with Special Buttons.
            </p>

            {/* table  */}
            <div className="info-block ms-2">
              <h3>Standard Dimensions For Capsule Lifts :</h3>
              <div className="container mt-5">
                <table className="responsive-table  custom-table">
                  <thead>
                    <tr style={{ backgroundColor: "#9c2622", color: "white" }}>
                      <th colSpan="2">Load</th>
                      <th colSpan="2">Car Size</th>
                      <th colSpan="3">Shaft Size</th>
                      <th rowSpan="2">
                        Entrance
                        <br />
                        Width (E)
                      </th>
                      <th colSpan="3">Machine Room</th>
                    </tr>
                    <tr style={{ backgroundColor: "#9c2622", color: "white" }}>
                      <th>Capacity (Persons)</th>
                      <th>Weight (Kg’s.)</th>
                      <th>Width (A)</th>
                      <th>Depth (B)</th>
                      <th>Width (C)</th>
                      <th>Width (C-1)</th>
                      <th>Depth (D-1)</th>
                      <th>Width (F)</th>
                      <th>Depth (G)</th>
                      <th>Height (H)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8</td>
                      <td>544</td>
                      <td>1100</td>
                      <td>1400</td>
                      <td>2100</td>
                      <td>1300</td>
                      <td>1950</td>
                      <td>800</td>
                      <td>4000</td>
                      <td>4000</td>
                      <td>2900</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>680</td>
                      <td>1350</td>
                      <td>1400</td>
                      <td>2400</td>
                      <td>1550</td>
                      <td>1950</td>
                      <td>800</td>
                      <td>4000</td>
                      <td>4000</td>
                      <td>2900</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>884</td>
                      <td>1350</td>
                      <td>1700</td>
                      <td>2400</td>
                      <td>1550</td>
                      <td>2250</td>
                      <td>900</td>
                      <td>4400</td>
                      <td>4400</td>
                      <td>2900</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>1088</td>
                      <td>1600</td>
                      <td>1700</td>
                      <td>2600</td>
                      <td>1800</td>
                      <td>2250</td>
                      <td>1000</td>
                      <td>4400</td>
                      <td>4400</td>
                      <td>2900</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>1360</td>
                      <td>1600</td>
                      <td>2000</td>
                      <td>2800</td>
                      <td>1800</td>
                      <td>2550</td>
                      <td>1000</td>
                      <td>4400</td>
                      <td>4400</td>
                      <td>2900</td>
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
