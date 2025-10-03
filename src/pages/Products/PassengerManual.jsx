import React from "react";
import manual from "../../assets/manual.jpg";
import manual2 from "../../assets/manual2.jpg";
import manual3 from "../../assets/manual3.jpg";

export default function PassengerManual() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> MANUAL LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container mb-5">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={manual} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={manual2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={manual3} alt="MRL Control Panel" />
                  </div>
                </div>
              </div>
            </section>

            <p>
              Doors such as Collapsible Gate, Swing Door with Door Frame, Manual
              Telescopic Door with Door Frame and Manual Imperforated Gate with
              Door Frame are available in Machine Steel or Stainless Steel
              finishes. Colour combinations both for the cabin and doors can be
              customised to satisfy all needs.
            </p>

            <div className="info-block ms-2 mt-5 ">
              <h3>Standard Dimensions for Manual Lifts</h3>
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
                    <td>4</td>
                    <td>272</td>
                    <td>1000</td>
                    <td>700</td>
                    <td>1500</td>
                    <td>1150</td>
                    <td>750</td>
                    <td>3100</td>
                    <td>3700</td>
                    <td>2750</td>
                    <td>1500</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>340</td>
                    <td>1100</td>
                    <td>850</td>
                    <td>1500</td>
                    <td>1300</td>
                    <td>750</td>
                    <td>3100</td>
                    <td>3700</td>
                    <td>2750</td>
                    <td>1500</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>408</td>
                    <td>1200</td>
                    <td>900</td>
                    <td>1650</td>
                    <td>1350</td>
                    <td>750</td>
                    <td>3200</td>
                    <td>3900</td>
                    <td>2750</td>
                    <td>1500</td>
                    <td>4250</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>544</td>
                    <td>1300</td>
                    <td>1100</td>
                    <td>1750</td>
                    <td>1550</td>
                    <td>800</td>
                    <td>3200</td>
                    <td>3900</td>
                    <td>2750</td>
                    <td>1500</td>
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
