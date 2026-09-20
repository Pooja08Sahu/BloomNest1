import React from "react";
import "./CSS/Footer.css";



const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Bloom<span>Nest</span></h2>
          <p>
            Bringing beautiful flowers and fresh moments
            to your special days.
          </p>

          <div className="social-links">
            <a href="#">f</a>
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">◎</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/shop">Shop</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>
          <a href="#">Fresh Flowers</a>
          <a href="#">Bouquets</a>
          <a href="#">Roses</a>
          <a href="#">Tulips</a>
          <a href="#">Gift Flowers</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p> Lucknow, Uttar Pradesh</p>
          <p> +91 98765 43210</p>
          <p> hello@bloomnest.com</p>

          <div className="newsletter">
            <input type="email" placeholder="Your Email" />
            <button>→</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 BloomNest. All Rights Reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;