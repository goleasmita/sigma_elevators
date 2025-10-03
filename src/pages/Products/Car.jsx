import React from "react";
import car from "../../assets/car.jpg";
import car2 from "../../assets/car2.jpg";

export default function Car() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> CAR LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={car} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={car2} alt="MRL Lift" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              Car lifts are available in Hydraulic, Geared Traction or MRL
              Gearless in a variety of Door options and Cabins as per customers
              requirements.
            </p>

            {/* table  */}
            <div className="info-block ms-2">
              <h3>Hydraulic :</h3>
              <div className="table-container table-responsive custom-table">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Capacity (Kgs)</th>
                      <th colSpan="2">Shaft Size</th>
                      <th colSpan="3">Car Size</th>
                      <th colSpan="2">Entrance</th>
                      <th colSpan="2">Machine Room</th>
                      <th rowSpan="2">Pit Depth</th>
                      <th rowSpan="2">Over Head</th>
                    </tr>
                    <tr>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Height</th>
                      <th>Width</th>
                      <th>Height</th>
                      <th>Depth</th>
                      <th>Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">2500</td>
                      <td className="text-center">3600</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">2600</td>
                      <td className="text-center">5266</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2100</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">4000</td>
                    </tr>
                    <tr>
                      <td className="text-center">3000</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">3000</td>
                      <td className="text-center">5266</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2100</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">4000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* table 2 */}
            <div className="info-block ms-2">
              <h3>Traction :</h3>
              <div className="table-container table-responsive custom-table">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Capacity (Kgs)</th>
                      <th colSpan="2">Shaft Size</th>
                      <th colSpan="3">Car Size</th>
                      <th colSpan="2">Entrance</th>
                      <th colSpan="2">Machine Room</th>
                      <th rowSpan="2">Pit Depth</th>
                      <th rowSpan="2">Over Head</th>
                    </tr>
                    <tr>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Height</th>
                      <th>Width</th>
                      <th>Height</th>
                      <th>Depth</th>
                      <th>Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">2500</td>
                      <td className="text-center">3600</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">2600</td>
                      <td className="text-center">5266</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2100</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">5000</td>
                    </tr>
                    <tr>
                      <td className="text-center">3000</td>
                      <td className="text-center">3900</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">3000</td>
                      <td className="text-center">5266</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2100</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* table 3 */}
            <div className="info-block ms-2">
              <h3>MRL :</h3>
              <div className="table-container table-responsive custom-table">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Capacity (Kgs)</th>
                      <th colSpan="2">Shaft Size</th>
                      <th colSpan="3">Car Size</th>
                      <th colSpan="2">Entrance</th>
                      <th colSpan="2">Machine Room</th>
                      <th rowSpan="2">Pit Depth</th>
                      <th rowSpan="2">Over Head</th>
                    </tr>
                    <tr>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Width</th>
                      <th>Depth</th>
                      <th>Height</th>
                      <th>Width</th>
                      <th>Height</th>
                      <th>Depth</th>
                      <th>Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">2500</td>
                      <td className="text-center">3225</td>
                      <td className="text-center">5500</td>
                      <td className="text-center">2000</td>
                      <td className="text-center">5000</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2000</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">1800</td>
                      <td className="text-center">5000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">5000</td>
                    </tr>
                    <tr>
                      <td className="text-center">3000</td>
                      <td className="text-center">3900</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">3000</td>
                      <td className="text-center">5266</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2300</td>
                      <td className="text-center">2100</td>
                      <td className="text-center">4000</td>
                      <td className="text-center">6000</td>
                      <td className="text-center">1500</td>
                      <td className="text-center">5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Content Section */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>GENERAL NOTES</h3>
                <ul>
                  <li>
                    Pit depth should not be less than 1800mm (In critical cases
                    min. 1700mm can be accepted)
                  </li>
                  <li>Lintel required 2400mm from finish floor level.</li>
                  <li>
                    Overhead should not be less than 5000 mm (In critical cases
                    min. 4900 can be accepted)
                  </li>
                  <li>
                    Both side walls should be min. 230mm RCC, front brick wall
                    230mm preferred
                  </li>
                  <li>
                    Trap Door required at machine level (If trap door not
                    possible then ladder to be provided by client for machine
                    access.)
                  </li>
                  <li>For ARD device space required at top floor landing.</li>
                  <li>
                    Floor height of minimum 2300 mm needed for door openings.
                  </li>
                </ul>
              </div>
            </section>

            {/* content section 2  */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>GENERAL NOTES</h3>
                <ul>
                  <li>Maximum Car Travel is Permitted upto 60 metres.</li>
                  <li>Speeds available are 0.50 mps & 1 mps.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
