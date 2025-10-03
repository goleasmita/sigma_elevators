import React from "react";
import ProductsMenu from "./ProductsMenu";
import { Outlet, useLocation } from "react-router-dom";
import product from "../../assets/product.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Passenger Elevator",
      description:
        "Smooth and reliable passenger elevators designed for residential and commercial buildings.",
      img: product,
    },
    {
      id: 2,
      name: "Hospital Elevator",
      description:
        "Spacious hospital lifts with advanced safety features for patient transport.",
      img: product2,
    },
    {
      id: 3,
      name: "Goods Elevator",
      description:
        "Heavy-duty goods lifts ideal for warehouses, factories, and commercial use.",
      img: product3,
    },
    // {
    //   id: 4,
    //   name: "Escalators",
    //   description:
    //     "Modern escalators designed for malls, metro stations, and high-traffic areas.",
    //   img: "https://img.icons8.com/color/96/escalator.png",
    // },
    {
      id: 5,
      name: "Dumbwaiter",
      description:
        "Compact dumbwaiter lifts for restaurants, hotels, and small goods movement.",
      img: product4,
    },
  ];

  const location = useLocation();

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3">
          <ProductsMenu />
        </div>

        {/* Right Content */}
        <div
          className="col-lg-9 gearless-page products-page mt-4"
          style={{ overflow: "auto" }}>
          {/* ✅ Show only when route is exactly /products */}
          {location.pathname === "/products" && (
            <div className="mb-4 p-3 ">
              <h2 className="fw-bold section-title">Our Products</h2>
              <p className="text-muted">
                Sigma Lifts Pvt. Ltd. provides modern, safe, and reliable lift
                solutions for residential, commercial, and industrial needs.
                Select a category from the left menu to explore more.
              </p>

              <div className="container" style={{ marginTop: "40px" }}>
                <div className="row">
                  {products.map((product) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
                      <div className="product-card h-100 text-center">
                        <div className="product-img-wrapper">
                          <img
                            src={product.img}
                            className="product-img"
                            alt={product.name}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{product.name}</h5>
                          <p className="card-text text-muted">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ✅ Dynamic product content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
