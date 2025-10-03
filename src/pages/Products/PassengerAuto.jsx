import React from "react";
import auto from "../../assets/auto.jpg";
import auto2 from "../../assets/auto2.jpg";
import auto3 from "../../assets/auto3.jpg";

export default function PassengerAuto() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> AUTOMATIC LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={auto} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={auto2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={auto3} alt="MRL Control Panel" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              Elevator cabins are available in Stainless Steel and M S Powder
              coated finishes in Standard or Customized specifications. Our
              special "Sigma Gold Series" is dedicated to people who love
              extreme luxury. The cabin is available in Gold and Silver
              Stainless Steel finish in either plain, brush or etching finishes.
              with LED lighting in different hues which give a sparkling effect
              to the cabin. Also to enhance the cabin looks Car Operating Panels
              ( COPS ) and Landing Operating Panels ( LOPS ) are available in a
              variety of designs with standard as well as premium push buttons
              designs.
            </p>

            <div className="info-block ms-2 mt-5">
              <h3>Standard Dimensions for Auto Door Lifts</h3>
              <div className="container table-responsive">
                <table>
                  <tr>
                    <th>No of Passenger</th>
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
                    <td>6</td>
                    <td>408</td>
                    <td>1100</td>
                    <td>1000</td>
                    <td>1700</td>
                    <td>1600</td>
                    <td>700</td>
                    <td>2700</td>
                    <td>3600</td>
                    <td>2900</td>
                    <td>1500</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>544</td>
                    <td>1300</td>
                    <td>1100</td>
                    <td>1800</td>
                    <td>1800</td>
                    <td>800</td>
                    <td>2800</td>
                    <td>3800</td>
                    <td>2900</td>
                    <td>1500</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>680</td>
                    <td>1350</td>
                    <td>1300</td>
                    <td>1850</td>
                    <td>2000</td>
                    <td>800</td>
                    <td>3100</td>
                    <td>4000</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>884</td>
                    <td>2000</td>
                    <td>1000</td>
                    <td>2500</td>
                    <td>1800</td>
                    <td>900</td>
                    <td>3500</td>
                    <td>4000</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>1088</td>
                    <td>2000</td>
                    <td>1300</td>
                    <td>2500</td>
                    <td>2000</td>
                    <td>1000</td>
                    <td>3500</td>
                    <td>4200</td>
                    <td>1900</td>
                    <td>1000</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>2000</td>
                    <td>1550</td>
                    <td>2500</td>
                    <td>2250</td>
                    <td>1000</td>
                    <td>3500</td>
                    <td>4200</td>
                    <td>2900</td>
                    <td>1600</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>1632</td>
                    <td>2150</td>
                    <td>1650</td>
                    <td>2700</td>
                    <td>2400</td>
                    <td>1200</td>
                    <td>4000</td>
                    <td>2500</td>
                    <td>2900</td>
                    <td>1700</td>
                    <td>4250</td>
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
