import React from "react";
import home from "../../assets/home.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import lift from "../../assets/homelift.webp";
import lift2 from "../../assets/lift2.webp";
import logo from "../../assets/homelogo.png";
import logo2 from "../../assets/homelogo2.png";
import logo3 from "../../assets/homelogo3.png";
import logo4 from "../../assets/homelogo4.png";

export default function HomeLifts() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="gearless-page ">
            {/* Header Section */}
            <header className="gearless-header">
              <h2 className="gearless-title">Home Lifts</h2>
            </header>

            {/* Image Grid */}
            <section className="gearless-gallery container">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={home} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={home2} alt="MRL Lift" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="image-card">
                    <img src={home3} alt="MRL Control Panel" />
                  </div>
                </div>
              </div>
            </section>

            <div
              className="container text-center  pt-5"
              style={{ width: "80%" }}>
              <div className="row g-4 ">
                {/* Feature Card */}
                <div className="col-lg-3 col-md-6 ">
                  <div
                    className="p-4  shadow-sm feature-box mx-auto"
                    style={{
                      transition: "0.3s ease-in-out",
                    }}>
                    <img
                      width="50"
                      height="50"
                      src={logo}
                      alt="room"
                      className="mb-3"
                    />
                    <h5 className="fw-bold">No Machine Room</h5>
                  </div>
                </div>

                {/* Feature Card */}
                <div className="col-lg-3 col-md-6">
                  <div
                    className="p-4  shadow-sm feature-box mx-auto"
                    style={{
                      background: "",
                      transition: "0.3s ease-in-out",
                    }}>
                    <img
                      width="50"
                      height="50"
                      src={logo2}
                      alt="gears"
                      className="mb-3"
                    />
                    <h5 className="fw-bold">Gearless</h5>
                  </div>
                </div>

                {/* Feature Card */}
                <div className="col-lg-3 col-md-6">
                  <div
                    className="p-4  shadow-sm feature-box mx-auto"
                    style={{
                      transition: "0.3s ease-in-out",
                    }}>
                    <img
                      width="50"
                      height="50"
                      src={logo3}
                      alt="mute--v1"
                      className="mb-3"
                    />
                    <h5 className="fw-bold">Low Noise</h5>
                  </div>
                </div>

                {/* Feature Card */}
                <div className="col-lg-3 col-md-6">
                  <div
                    className="p-4  shadow-sm feature-box mx-auto"
                    style={{
                      transition: "0.3s ease-in-out",
                    }}>
                    <img
                      width="50"
                      height="50"
                      src={logo4}
                      alt="design--v1"
                      className="mb-3"
                    />
                    <h5 className="fw-bold">Compact Design</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <section className="gearless-content container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="info-block">
                      <h3>Sigma Mini</h3>
                      <h5>PMSM Gearless Machines for Home Elevators</h5>
                      <ul>
                        <li>
                          The new Sigma Mini simplifies vertical mobility inside
                          your home.
                        </li>
                        <li>Travel comfortably to every floor.</li>
                        <li>
                          Give elderly and dependent people the freedom to move
                          from floor to floor without using the stairs.
                        </li>
                        <li>
                          Sigma Mini is a Gearless PMSM machine, ideal for loads
                          up to 300 kg and travel up to 15 meters.
                        </li>
                        <li>
                          Sigma Mini is compact and facilitates elevators with a
                          minimum of space and civil work.
                        </li>
                        <li>
                          Sigma Mini operates on single-phase 230V domestic
                          power supply and also on 3 phase power supply.
                        </li>
                        <li>
                          Sigma Mini is silent, it uses no oil, reduces power
                          consumption and is also eco-friendly.
                        </li>
                        <li>
                          <b>
                            Pit needed is only 300 mm and overhead needed is
                            only 3000 mm.
                          </b>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="d-flex align-items-center justify-content-center p-4 "
                      style={{ height: "100%" }} // <-- key fix
                    >
                      <img
                        src={lift}
                        alt="Sigma Mini"
                        className="w-100 rounded shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* table  */}

              <div className="info-block mt-5">
                <h3>S P E C I F I C A T I O N S</h3>
                <div className="container table-responsive ">
                  <table
                    className="table-bordered text-center align-middle"
                    border="1"
                    cellspacing="0"
                    cellpadding="8"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      borderCollapse: "collapse",
                    }}>
                    <thead>
                      <tr style={{ background: "#a52a2a", color: "#fff" }}>
                        <th>Duty Load (Kg.)</th>
                        <th>Equivalent Pass. Capacity (Nos.) Up To</th>
                        <th>Speed (m/s)</th>
                        <th>Rope Dia. (mm)</th>
                        <th>Pulley Dia. (mm)</th>
                        <th>No. of Ropes</th>
                        <th>Nominal consumption (A)</th>
                        <th>Nominal Power (Kw)</th>
                        <th>Nominal Power (HP)</th>
                        <th>RPM</th>
                        <th>Rated Frequency (Hz.)</th>
                        <th>Rated Torque (Nm)</th>
                        <th>Voltage (V)</th>
                        <th>Machine weight (kg) Approx.</th>
                        <th>Suitable Single Phase 230 VAC, 50 Hz, KEB drive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>300</td>
                        <td>4</td>
                        <td>0.32</td>
                        <td>6</td>
                        <td>200</td>
                        <td>4</td>
                        <td>5.5</td>
                        <td>1.3</td>
                        <td>1.7</td>
                        <td>60</td>
                        <td>12</td>
                        <td>100</td>
                        <td>230</td>
                        <td>80</td>
                        <td>1.5kv</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="container mt-4 pt-5">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="info-block">
                      <h3>Single - Phase Control Panel</h3>
                      <ul>
                        <li>
                          Single point of contact for Sigma Mini Home Lift
                          Gearless machine and Control Panel configured with KEB
                          Drive
                        </li>
                        <li>Timely delivery of Packaged Products</li>
                        <li>
                          UPS Interface:During power failure, Sigma Mini Home
                          Lift Controller provides UPS Compatible uninterrupted
                          rescue operation
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div
                      className="d-flex align-items-center justify-content-center p-4 "
                      style={{ height: "80%" }} // <-- key fix
                    >
                      {" "}
                      <img
                        src={lift2}
                        alt=""
                        className="w-100 rounded shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* table  */}

              <div className="container">
                {/* PRODUCT SPECIFICATIONS */}
                <div className="table-responsive mb-4">
                  <table className=" table-bordered text-center align-middle">
                    <thead>
                      <tr style={{ background: "#b22222", color: "#fff" }}>
                        <th colSpan="2">PRODUCT SPECIFICATIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Description</strong>
                        </td>
                        <td>
                          Specially Designed Single Phase Control Panel for
                          Sigma Mini Gearless Machines Incorporated with
                          Suitable KEB DRIVE
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Enclosure</strong>
                        </td>
                        <td>
                          Protection: IP 21; Mounting: Wall
                          <br />
                          Dimensions (mm): H:600 X W:400 X D:300
                          <br />
                          Weight: 30 Kg
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Operating Voltage</strong>
                        </td>
                        <td>230V ±10%, 50 Hz, ±3%, Single Phase</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Operating Temperature</strong>
                        </td>
                        <td>-50 to 45°C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* FEASIBLE COMBINATIONS */}
                <div className="table-responsive">
                  <table className=" table-bordered text-center align-middle">
                    <thead>
                      <tr style={{ background: "#b22222", color: "#fff" }}>
                        <th colSpan="5">FEASIBLE COMBINATIONS</th>
                      </tr>
                      <tr style={{ background: "#f8f9fa" }}>
                        <th>Controller</th>
                        <th>Control</th>
                        <th>Drive</th>
                        <th>Stops/Landings</th>
                        <th>Door</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sigma Mini</td>
                        <td>Down Collective</td>
                        <td>PMSM with KEB ACVF</td>
                        <td>Up to 5</td>
                        <td>Auto or Manual</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="info-block">
                <h3>Control / Signal Features:-</h3>
                <ul>
                  <li>Simplex Down collective</li>
                  <li>Inspection operation</li>
                  <li>Direction Indicators</li>
                  <li>Call registration Indication</li>
                  <li>
                    7 Segment Display for Floor indication (B, G, 1, 2, 3, OR G,
                    1, 2, 3, 4)
                  </li>
                  <li>Auto Fan off </li>
                  <li>UPS Compatible </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
