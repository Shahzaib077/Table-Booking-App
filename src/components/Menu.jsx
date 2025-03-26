import React, { useEffect, useState } from "react";

import { getMenuData } from "./ApiGet";
import "./Menu.css";

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activePanel, setActivePanel] = useState("starter");
  const [menuData, setMenuData] = useState([]);

  const getData = async () => {
    const res = await getMenuData();
    console.log(res.data.recipes);
    setMenuData(res.data.recipes);
  };

  //Rendering through useEffect
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="menu-container" id="menu">
      <div className="title-section">
        <h2>our menu</h2>
        <p>
          <span>check our</span>
          <span style={{ color: "#ce1212", fontWeight: "500" }}>
            {" "}
            yummy menu
          </span>{" "}
        </p>
      </div>
      <div className="menu-item-container">
        <ul>
          <li>
            <h4
              className={`menu-shift ${activeIndex === 0 ? "active-tab" : ""}`}
              onClick={() => {
                setActiveIndex(0);
                setActivePanel("starter");
              }}
            >
              Starters
            </h4>
          </li>
          <li>
            <h4
              className={`menu-shift ${activeIndex === 1 ? "active-tab" : ""}`}
              onClick={() => {
                setActiveIndex(1);
                setActivePanel("breakfast");
              }}
            >
              Breakfast
            </h4>
          </li>
          <li>
            <h4
              className={`menu-shift ${activeIndex === 2 ? "active-tab" : ""}`}
              onClick={() => {
                setActiveIndex(2);
                setActivePanel("lunch");
              }}
            >
              Lunch
            </h4>
          </li>
          <li>
            <h4
              className={`menu-shift ${activeIndex === 3 ? "active-tab" : ""}`}
              onClick={() => {
                setActiveIndex(3);
                setActivePanel("dinner");
              }}
            >
              Dinner
            </h4>
          </li>
        </ul>
      </div>
      {activePanel === "starter" && (
        <div className="tab-panel">
          <div className="tab-header">
            <p>Menu</p>
            <h3>Starters</h3>
          </div>
          <div className="menu-items-columns">
            {menuData.slice(0, 6).map((val) =>  (
                <div key={val.id}>
                  <div className="recipie" >
                    <img src={val.image}  />
                    <h5> {val.name} </h5>
                    <p> {val.ingredients.slice(0, 3)} </p>
                  </div>
                </div>
              )
            )}

          </div>
        </div>
      )}

      {activePanel === "breakfast" && (
        <div className="tab-panel">
          <div className="tab-header">
            <p>Menu</p>
            <h3>Breakfast</h3>
          </div>
          <div className="menu-items-columns">
            {menuData.slice(6, 12).map((val) => {
              return (
                <>
                  <div className="recipie">
                    <img src={val.image} />
                    <h5> {val.name} </h5>
                    <p> {val.ingredients.slice(0, 3)} </p>
                  </div>
                </>
              );
            })}
            </div>

        </div>
      )}

      {activePanel === "dinner" && (
        <div className="tab-panel">
          <div className="tab-header">
            <p>Menu</p>
            <h3>Dinner</h3>
          </div>
          <div className="menu-items-columns">
            {menuData.slice(12, 18).map((val) => {
              return (
                <>
                  <div className="recipie">
                    <img src={val.image} />
                    <h5> {val.name} </h5>
                    <p> {val.ingredients.slice(0, 3)} </p>
                  </div>
                </>
              );
            })}
            </div>
        </div>
      )}

      {activePanel === "lunch" && (
        <div className="tab-panel">
          <div className="tab-header">
            <p>Menu</p>
            <h3>Lunch</h3>
          </div>
          <div className="menu-items-columns">
            {menuData.slice(18, 24).map((val) => {
              return (
                <>
                  <div className="recipie">
                    <img src={val.image} />
                    <h5> {val.name} </h5>
                    <p> {val.ingredients.slice(0, 3)} </p>
                  </div>
                </>
              );
            })}
            </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
