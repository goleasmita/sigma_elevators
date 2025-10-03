// src/components/WhatsAppButton.jsx
import React from "react";
import whatsapp from "./assets/whatsapp.png";

export default function WhatsAppButton() {
  return (
    <div
      className="whatsapp-float"
      onClick={() => window.open("https://wa.me/9987429648", "_blank")}>
      <img src={whatsapp} alt="WhatsApp" />
    </div>
  );
}
