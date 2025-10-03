import React from "react";
import stretch from "../../assets/stretch.jpg";
import stretch2 from "../../assets/stretch2.jpg";

export default function Stretcher() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title"> STRETCHER LIFTS</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={stretch} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={stretch2} alt="MRL Lift" />
                  </div>
                </div>
              </div>
            </section>

            {/* table  */}
            <div className="table-container table-responsive mt-5">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Clear opening height</th>
                    <th>Below lintel height from finished floor level</th>
                  </tr>
                  <tr>
                    <td>2000</td>
                    <td>2200</td>
                  </tr>
                  <tr>
                    <td>2100</td>
                    <td>2300</td>
                  </tr>
                  <tr>
                    <td>2200</td>
                    <td>2400</td>
                  </tr>
                </thead>
              </table>
            </div>

            {/* Content Section */}
            <section className="gearless-content container">
              <div className="info-block">
                <h3>Plan Of Lift Well And Machine Room :</h3>
                <ul>
                  <li>All dimensions in millimeters.</li>
                  <li>
                    All dimensions are for clear finished lift wells after
                    plastering.
                  </li>
                  <li>
                    Dimensions in the machine room depends upon orientation and
                    number of lifts shafts.
                  </li>
                  <li>
                    If access to machine room is by a steel ladder instead of a
                    staircase provide a trap door with lifting hook in machine
                    room.
                  </li>
                  <li>
                    For specific requirements our representative will be happy
                    to work with you in the preparation of the drawing.
                  </li>
                  <li>
                    All walls minimum 150 RCC or 230brick (hoist way front wall
                    230 brick preferred)
                  </li>
                  <li>
                    RCC machine room stuctural floor slab 150 thick designed to
                    sustain a minimum load of 1000kg/m2 UDL.
                  </li>
                </ul>
              </div>
            </section>

            {/* table  */}
            <div className="table-container table-responsive ">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th colSpan="8" className="header">
                      SIDE OPENING AUTOMATIC POWER OPERATED DOOR
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2">LOAD</th>
                    <th colSpan="2">CAR INSIDE</th>
                    <th colSpan="2">LIFT WELL</th>
                    <th colSpan="">ENTRANCE</th>
                    <th rowSpan="">HEAD ROOM</th>
                  </tr>
                  <tr>
                    <th>PERSONS</th>
                    <th>Kgs.</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>G</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15</td>
                    <td>1020</td>
                    <td>1000</td>
                    <td>2400</td>
                    <td>1800</td>
                    <td>3000</td>
                    <td>800</td>
                    <td>4800</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>1088</td>
                    <td>12220</td>
                    <td>2400</td>
                    <td>1980</td>
                    <td>2900</td>
                    <td>1000</td>
                    <td>4800</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>1300</td>
                    <td>2400</td>
                    <td>2200</td>
                    <td>2900</td>
                    <td>1200</td>
                    <td>4800</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>1300</td>
                    <td>2400</td>
                    <td>2200</td>
                    <td>3000</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>1768</td>
                    <td>1600</td>
                    <td>2400</td>
                    <td>2500</td>
                    <td>2900</td>
                    <td>1200</td>
                    <td>4800</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>1600</td>
                    <td>2400</td>
                    <td>2400</td>
                    <td>3000</td>
                    <td></td>
                    <td></td>
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
