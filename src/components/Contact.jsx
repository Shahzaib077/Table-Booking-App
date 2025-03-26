import { faClock, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">
        <h4>contact</h4>
        <p>
          need help?{" "}
          <span style={{ color: "#ce1212", fontWeight: "500" }}>
            contact us
          </span>
        </p>
      </div>
      <div className="google-map">
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={{ width: "100%" }} className="google-map">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: "none" }}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Johar%20Town,%20Lahore,%20PK+(Yummy)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    <div className="contact-info">
        <div className="info-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faLocation} />
          </div>
          <div className="box-content">
            <h2>Address</h2>
            <p>Lahore</p>
          </div>
        </div>
        <div className="info-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="box-content">
            <h2>Call us</h2>
            <p>+92 3074352342</p>
          </div>
        </div>
        <div className="info-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faMessage} />
          </div>
          <div className="box-content">
            <h2>Email us</h2>
            <p>info@yummy.com</p>
          </div>
        </div>
        <div className="info-box">
          <div className="box-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="box-content">
            <h2>Opening Hours</h2>
            <p>
              <span style={{ fontWeight: "500" }}>Mon-Sat:</span> 11AM - 23PM;{" "}
              <span style={{ fontWeight: "500" }}>Sunday:</span> Closed
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form">
            <form>
                <div className="contact-fields nameEmailField">
                    <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                </div>
                <div className="contact-fields">
                <input type="text" placeholder="Subject"/>
                </div>
                <div className="contact-fields">
                <textarea placeholder="Enter your Message..."/>
                </div>
                <div className="contact-submit-btn">
                <button type="submit">Send Message</button>
                </div>
            </form>
      </div>
    </div>
  );
};

export default Contact;
