import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";
import Products from "./pages/Products/Products";
import GearlessLifts from "./pages/Products/GearlessLifts";
import Goods from "./pages/Products/Goods";
import HomeLifts from "./pages/Products/HomeLifts";
import Hydraulic from "./pages/Products/Hydraulic";
import PassengerAuto from "./pages/Products/PassengerAuto";
import PassengerManual from "./pages/Products/PassengerManual";
import Stretcher from "./pages/Products/Stretcher";
import Car from "./pages/Products/Car";
import Capsule from "./pages/Products/Capsule";
import Service from "./pages/Products/Service";
import DumbWaiter from "./pages/Products/DumbWaiter";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />}>
            <Route path="gearless" element={<GearlessLifts />} />
            <Route path="goods" element={<Goods />} />
            <Route path="homelifts" element={<HomeLifts />} />
            <Route path="hydraulic" element={<Hydraulic />} />
            <Route path="passenger-auto" element={<PassengerAuto />} />
            <Route path="passenger-manual" element={<PassengerManual />} />
            <Route path="stretcher" element={<Stretcher />} />
            <Route path="car" element={<Car />} />
            {/* <Route path="car-stack" element={<CarStack />} /> */}
            <Route path="capsule" element={<Capsule />} />
            <Route path="service" element={<Service />} />
            <Route path="dumb" element={<DumbWaiter />} />
          </Route>
        </Routes>
        <Footer />
        <WhatsAppButton />
      </HashRouter>
    </div>
  );
}
