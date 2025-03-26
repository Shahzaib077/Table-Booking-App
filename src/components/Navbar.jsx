import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../assets/images/yummy-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle(!toggle);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="header">
        <div className="items-container">
          <a className="logo">
            <img src={logo} />
          </a>
          <div className="nav-menu">
            <ul className="ul-items">
              <li>
                <a
                  className={`menu-item ${activeIndex === 0 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(0);
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${activeIndex === 1 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(1);
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${activeIndex === 2 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(2);
                    scrollToSection("menu");
                  }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${activeIndex === 3 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(3);
                    scrollToSection("events");
                  }}
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${activeIndex === 4 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(4);
                    scrollToSection("chefs");
                  }}
                >
                  Chefs
                </a>
              </li>
              <li>
                <a
                  className={`menu-item ${activeIndex === 7 ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(7);
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-btn">
            <button onClick={() => scrollToSection("tableBook")}>
              Book a Table
            </button>
            <div className="hamBtn" onClick={handleToggleMenu}>
              {!toggle ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="hamBurger" />
              )}
            </div>
          </div>
          {/* Mobile menu */}
            <div className={`mobile-nav-menu ${toggle ? "active" : ""}`}>
              <ul className="mobile-ul-items">
                <li>
                  <a
                    className={`menu-item ${activeIndex === 0 ? "active" : ""}`}
                    onClick={() => setActiveIndex(0)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`menu-item ${activeIndex === 1 ? "active" : ""}`}
                    onClick={() => setActiveIndex(1)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`menu-item ${activeIndex === 2 ? "active" : ""}`}
                    onClick={() => setActiveIndex(2)}
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    className={`menu-item ${activeIndex === 3 ? "active" : ""}`}
                    onClick={() => setActiveIndex(3)}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className={`menu-item ${activeIndex === 4 ? "active" : ""}`}
                    onClick={() => setActiveIndex(4)}
                  >
                    Chefs
                  </a>
                </li>
                <li>
                  <a
                    className={`menu-item ${activeIndex === 7 ? "active" : ""}`}
                    onClick={() => setActiveIndex(7)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </header>
    </>
  );
};

export default Navbar;
