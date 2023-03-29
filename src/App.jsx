import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/index.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Service";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer/>
    </Router>
  );
}

export default App;
