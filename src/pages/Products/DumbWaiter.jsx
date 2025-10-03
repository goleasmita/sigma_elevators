import React from "react";
import dumb from "../../assets/dumb.jpg";
import dumb2 from "../../assets/dumb2.jpg";

export default function DumbWaiter() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> DUMB WAITER LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={dumb} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={dumb2} alt="MRL Lift" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              Dumbwaiter lifts are specially designed for transportation of
              variety of materials. It is commonly used in the Hotel industry
              and in hospitals for vertical transportation. Standard sizes
              available are 50 kgs, 100 kgs & 250 kgs. For furthur technical
              assistance kindly contact us for details.
            </p>

            {/* table  */}
            <div className="info-block ms-2">
              <h3>Standard Dimensions For Dumb Waiters</h3>
              <div className="container mt-5">
                <table className="responsive-table  custom-table">
                  <thead>
                    <tr style={{ backgroundColor: "#9c2622", color: "white" }}>
                      <th rowSpan="2">Load (kg)</th>
                      <th colSpan="3">Car Dim</th>
                      <th colSpan="2">Shaft Dim</th>
                      <th rowSpan="2">Entrance (E)</th>
                      <th colSpan="2">M/C Room Dimns</th>
                      <th rowSpan="2">Height</th>
                      <th rowSpan="2">Over Head</th>
                      <th rowSpan="2">Pit Depth</th>
                    </tr>
                    <tr style={{ backgroundColor: "#9c2622", color: "white" }}>
                      <th>Width (A)</th>
                      <th>Depth (B)</th>
                      <th>Height (H)</th>
                      <th>Width (C)</th>
                      <th>Depth (D)</th>
                      <th>Width (K)</th>
                      <th>Depth (L)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100</td>
                      <td>700</td>
                      <td>700</td>
                      <td>800</td>
                      <td>1200</td>
                      <td>900</td>
                      <td>700</td>
                      <td>1200</td>
                      <td>1150</td>
                      <td>1800</td>
                      <td>3300</td>
                      <td>750</td>
                    </tr>
                    <tr>
                      <td>150</td>
                      <td>800</td>
                      <td>800</td>
                      <td>900</td>
                      <td>1300</td>
                      <td>1000</td>
                      <td>800</td>
                      <td>1300</td>
                      <td>1150</td>
                      <td>1800</td>
                      <td>3300</td>
                      <td>750</td>
                    </tr>
                    <tr>
                      <td>200</td>
                      <td>900</td>
                      <td>900</td>
                      <td>1000</td>
                      <td>1400</td>
                      <td>1100</td>
                      <td>900</td>
                      <td>1400</td>
                      <td>1150</td>
                      <td>1800</td>
                      <td>3300</td>
                      <td>750</td>
                    </tr>
                    <tr>
                      <td>250</td>
                      <td>1000</td>
                      <td>1000</td>
                      <td>1200</td>
                      <td>1500</td>
                      <td>1200</td>
                      <td>1000</td>
                      <td>1500</td>
                      <td>1200</td>
                      <td>1800</td>
                      <td>3300</td>
                      <td>750</td>
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
