import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import "./CSS/Home.css";
import WhattsAppButton from "../Component/WhattsAppButton";



const Home = () => {
  return (
    <>
<Header/>

      <div className="home-page">
        <div className="hero-section">
          <div className="hero-left">
            <div className="center">
              <h4>NATURE'S BEAUTI</h4>
              <h1>Fresh Flowers for a Brighter Day</h1>

              <p>
                Bring Home The Freshness of nature with our Beautiful and
                handpicked Flowers.
              </p>

              <button> Shop now →</button>
            </div>
          </div>
        </div>

        {/* card */}

        <div className="card-main">
          <div className="card1">
            <img src="/card1.png" alt="Featured floral arrangement" />
          </div>

          <div className="card2">
            <img className="img1" src="/card2.png" alt="Pink flowers" />
            <img className="img2" src="/card3.png" alt="Fresh flower bouquet" />
          </div>
        </div>

        {/* text */}

        <div className="text-main">
          <div className="text">
            <h1>Featured Product</h1>

            <div className="btn">
              <button className="btn1">Shop Now</button>
              <button className="btn2">Explore Flowers</button>
              <button className="btn1">View Collection</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="img">
            <img src="/image1.png" alt="Featured flower" />
          </div>

          <div className="img">
            <img src="/image2.png" alt="Featured flower" />
          </div>

          <div className="img">
            <img src="/image3.png" alt="Featured flower" />
          </div>

          <div className="img">
            <img src="/image4.png" alt="Featured flower" />
          </div>
        </div>
      </div>

      <WhattsAppButton />


      <Footer/>
    </>
  );
};

export default Home;
