import React from "react";
import goods from "../../assets/goods.jpg";
import goods2 from "../../assets/goods2.jpg";
import goods3 from "../../assets/goods3.jpg";

export default function Goods() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="gearless-page ">
              {/* Header Section */}
              <header className="gearless-header">
                <h2 className="gearless-title">GOODS LIFTS</h2>
              </header>

              {/* Image Grid */}
              <section className="gearless-gallery container">
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="image-card">
                      <img src={goods} alt="MRL Lift" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="image-card">
                      <img src={goods2} alt="MRL Lift" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="image-card">
                      <img src={goods3} alt="MRL Control Panel" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Section */}
              <section className="gearless-content container">
                <div className="info-block">
                  <p>
                    Goods lifts are available from 500 kgs capacity to 5 Tons
                    capacity and can be customised. Car flooring in M S
                    Chequered plate or SS Chequered plate can be provided.
                  </p>

                  <h3 className="mt-5">
                    Standard Dimensions For Goods Elevator :
                  </h3>
                </div>
              </section>
              <div className="container table-responsive">
                <table>
                  <tr>
                    <th>Load Kg.</th>
                    <th>Car (A) width</th>
                    <th>Car (B) width</th>
                    <th>Shaft (C) depth</th>
                    <th>Shaft (D) depth</th>
                    <th>Opening (E)</th>
                    <th>M/c room (F) width</th>
                    <th>M/c Room (G) depth</th>
                    <th>M/c room (H) height</th>
                    <th>Pit (I) depth</th>
                    <th>Overhead (J)</th>
                  </tr>
                  <tr>
                    <td>500</td>
                    <td>1100</td>
                    <td>1200</td>
                    <td>1900</td>
                    <td>1500</td>
                    <td>1000</td>
                    <td>3400</td>
                    <td>4000</td>
                    <td>2750</td>
                    <td>1500</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>800</td>
                    <td>1200</td>
                    <td>1700</td>
                    <td>2000</td>
                    <td>2100</td>
                    <td>1000</td>
                    <td>3500</td>
                    <td>4600</td>
                    <td>2750</td>
                    <td>1500</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>1000</td>
                    <td>1400</td>
                    <td>1800</td>
                    <td>2300</td>
                    <td>2100</td>
                    <td>1200</td>
                    <td>3800</td>
                    <td>4600</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>1500</td>
                    <td>1700</td>
                    <td>2000</td>
                    <td>2500</td>
                    <td>2300</td>
                    <td>1500</td>
                    <td>4000</td>
                    <td>4800</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>2000</td>
                    <td>1700</td>
                    <td>2500</td>
                    <td>2500</td>
                    <td>2800</td>
                    <td>1500</td>
                    <td>4000</td>
                    <td>5300</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>2500</td>
                    <td>2000</td>
                    <td>2500</td>
                    <td>2900</td>
                    <td>2800</td>
                    <td>1700</td>
                    <td>4400</td>
                    <td>5300</td>
                    <td>2900</td>
                    <td>1700</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>3000</td>
                    <td>2000</td>
                    <td>3000</td>
                    <td>2900</td>
                    <td>3300</td>
                    <td>2000</td>
                    <td>4400</td>
                    <td>5800</td>
                    <td>2900</td>
                    <td>1700</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>4000</td>
                    <td>2500</td>
                    <td>3000</td>
                    <td>3700</td>
                    <td>3300</td>
                    <td>2500</td>
                    <td>4500</td>
                    <td>5800</td>
                    <td>2900</td>
                    <td>1700</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>5000</td>
                    <td>2500</td>
                    <td>3600</td>
                    <td>3700</td>
                    <td>3900</td>
                    <td>2500</td>
                    <td>4500</td>
                    <td>6400</td>
                    <td>2900</td>
                    <td>1800</td>
                    <td>4500</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
