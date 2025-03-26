import React from "react";
import about2Img from "../assets/images/about2Img.jpg";
import aboutImg from "../assets/images/aboutImg.jpg";

import "./About.css";

const About = () => {
  return (
    <>
    <div className="about-container" id="about">
      <div className="about-content-title">
        <h2>about us</h2>
        <p>
          learn more{" "}
          <span style={{ color: "#ce1212", fontWeight: "500" }}>about us</span>{" "}
        </p>
        </div>

        <div className="more-about">
          <div className="leftContainer">
            <img src={aboutImg} />
            <div className="contactBook">
              <h3>Book a Table</h3>
              <p>+92 307 4352342</p>
            </div>
          </div>
          <div className="rightContainer">
            <p>
              Welcome to Yummy Our mission is to simplify restaurant operations
              and elevate customer experiences through innovative technology
            </p>
            <ul>
              <li>
                {" "}
                <span>&#10003;</span>
                <span>
                  Our simplifies daily tasks like order tracking, inventory
                  management, and staff coordination, ensuring smooth
                  operations.
                </span>{" "}
              </li>
              <li>
                {" "}
                <span>&#10003;</span>
                <span>
                  With features like online reservations, digital menu
                  management, and real-time order updates, we help elevate the
                  dining experience for your customers.
                </span>
              </li>
              <li>
                {" "}
                <span>&#10003;</span>
                <span>
                  Leverage powerful analytics to track sales, customer
                  preferences, and operational performance, empowering you to
                  make informed decisions for growth. Tailor the system to your
                  restaurant’s unique needs, whether it's a café, fine dining,
                  or a food chain.
                </span>
              </li>
            </ul>
            <p>
              Safeguard sensitive data with robust encryption and secure access
              controls. Access your system from any device, enabling remote
              management and easy scalability. Serve diverse customers and staff
              with multilingual options for global reach.
            </p>
            <img src={about2Img} />
          </div>
        </div>
    </div>
    <div className="stats">
          <div className="overlay">
            <div className="show-stats">
              <h1>232</h1>
              <p>Clients</p>
            </div>
            <div className="show-stats">
              <h1>531</h1>
              <p>Projects</p>
            </div>
            <div className="show-stats">
              <h1>1443</h1>
              <p>Hours of Support</p>
            </div>
            <div className="show-stats">
              <h1>66</h1>
              <p>Workers</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;
