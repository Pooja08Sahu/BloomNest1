import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./CSS/WhattsAppButton.css";



const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "919876543210";
  const message = "Hello, I want to know more about your flowers and cakes.";

  const openWhatsApp = () => {

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };


  
  return (
    <div className="whatsapp-container">
      {open && (
        <div className="whatsapp-box">
          <div className="whatsapp-header">
            <FaWhatsapp />
            <span>Chat with us</span>
          </div>

          <div className="whatsapp-content">
            <p>👋 Hello!</p>
            <p>How can we help you?</p>

            <button onClick={openWhatsApp}>
              <FaWhatsapp />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <button className="whatsapp-button" onClick={() => setOpen(!open)}>
        {open ? <IoClose /> : <FaWhatsapp />}
      </button>
    </div>
  );
};

export default WhatsAppButton;










