import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArchive, faClock, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-upper">

        <div className="each-content">
          <div className="footer-icon">
            <FontAwesomeIcon icon={faLocation} />
          </div>
          <div className="footer-info">
            <h4>Address</h4>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
          </div>
        </div>

        <div className="each-content">
          <div className="footer-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="footer-info">
            <h4>Contact</h4>
            <p><span style={{fontWeight:'bold'}}>Phone: </span>+92 307-4352342</p>
            <p><span style={{fontWeight:'bold'}}>Email: </span>info@Yummy.com</p>
          </div>
        </div>

        <div className="each-content">
          <div className="footer-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="footer-info">
            <h4>Opening Hours</h4>
            <p><span style={{fontWeight:'bold'}}>Mon-Sat: </span>11AM-10PM</p>
            <p><span style={{fontWeight:'bold'}}>Sun: </span>Closed</p>
          </div>
        </div>

        <div className="each-content">
        <div className="footer-icon">
            <FontAwesomeIcon icon={faArchive} />
          </div>
          <div className="footer-info">
            <h4>Follow Us</h4>
            <div className="social-icons">
            <span><FontAwesomeIcon icon={faTwitter}/></span>
            <span><FontAwesomeIcon icon={faFacebook}/></span>
            <span><FontAwesomeIcon icon={faInstagram}/></span>
            <span><FontAwesomeIcon icon={faLinkedin}/></span>
            </div>
          </div>
        </div>

      </div>
      <hr style={{color:'#36363a', margin:'auto'}}/>
      <div className="footer-lower">
          <h3><span>&#169;</span> Copyright <span style={{fontWeight:'bold'}}>Yummy</span> All Rights Reserved</h3>
          <p>Designed by <span style={{color:'#ce1212'}}>BootstrapMade</span> Distributed by <span style={{color:'#ce1212'}}>ThemeWagon</span></p>
      </div>
    </div>
  );
};

export default Footer;
