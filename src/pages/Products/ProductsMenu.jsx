import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductsMenu() {
  return (
    <div
      className="container-fluid p-0"
      style={{ marginTop: "135px", marginBottom: "15px" }}>
      <div className="product-menu ">
        <h3 className="menu-title">⚙️ Specialized In</h3>
        <div className="menu-list">
          <NavLink to="gearless" className="menu-item" activeclassname="active">
            Gearless Lifts(MRL)
          </NavLink>
          <NavLink to="goods" className="menu-item" activeclassname="active">
            Goods Lifts
          </NavLink>
          <NavLink
            to="homelifts"
            className="menu-item"
            activeclassname="active">
            Home Lifts
          </NavLink>
          <NavLink
            to="hydraulic"
            className="menu-item"
            activeclassname="active">
            Hydraulic Lifts
          </NavLink>
          <NavLink
            to="passenger-auto"
            className="menu-item"
            activeclassname="active">
            Passenger Automatic Lifts
          </NavLink>
          <NavLink
            to="passenger-manual"
            className="menu-item"
            activeclassname="active">
            Passenger Manual Lifts
          </NavLink>
          <NavLink
            to="stretcher"
            className="menu-item"
            activeclassname="active">
            Stretcher Lifts
          </NavLink>
          <NavLink to="car" className="menu-item" activeclassname="active">
            Car Lifts
          </NavLink>
          {/* <NavLink
            to="car-stack"
            className="menu-item"
            activeclassname="active">
            Car Stack Parking
          </NavLink> */}
          <NavLink to="capsule" className="menu-item" activeclassname="active">
            Capsule Lifts
          </NavLink>
          <NavLink to="dumb" className="menu-item" activeclassname="active">
            Dumb Waiter Lifts
          </NavLink>
          <NavLink to="service" className="menu-item" activeclassname="active">
            Service Lifts
          </NavLink>
        </div>
      </div>
    </div>
  );
}
