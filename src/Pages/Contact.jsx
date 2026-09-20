import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "./CSS/Contact.css";

const Contact = () => {
  return (

<>
<Header/>


    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side - Google Map */}
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps?q=Lucknow,Uttar+Pradesh&output=embed"
            title="Google Map"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div className="form-box">
          <h2>Get In Touch</h2>
          <p>We would love to hear from you. Send us a message!</p>

          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="full-input"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
            ></textarea>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>

<Footer/>

    </>

  );
};

export default Contact;