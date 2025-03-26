import React from "react";
import heroImg from "../assets/images/hero-img-.png";
import "./Hero.css";

const Hero = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <div className="left">
          <h2>Enjoy Your Healthy Delicious Food</h2>
          <p>
            Our Talented Team of{" "}
            <span style={{ color: "#ce1212", fontWeight: "500" }}>Yummy.</span>{" "}
            is here to provide you best quality of foods and clean environment.
          </p>
          <div className="hero-btn">
            <button onClick={()=> scrollToSection('tableBook')}>Book a Table</button>
          </div>
        </div>
        <div className="right">
          <img src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
