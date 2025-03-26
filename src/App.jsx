import React, { useEffect, useState } from "react";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from './components/Navbar';
import TableBook from "./components/TableBook";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger transition after mounting
  }, []);

  return (
    <div className={`main-container ${isVisible ? "visible" : ""}`}>
    <Navbar/>
    <Hero/>
    <About/>
    <Menu/>
    <Events/>
    <TableBook/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;
