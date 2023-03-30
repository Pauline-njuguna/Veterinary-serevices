import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/index.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Service";
import Footer from "./components/Footer";
import Petform from "./components/PetForm";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentCalendar from "./components/AppointmentCalendar";
// import SignUp from "./components/Signup"
// import LogIn from "./components/Login"
import SignUp from "./components/Signup/Signup"
import LogIn from "./components/Signup/Login"
import Contacts from "./components/Contacts"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer/>
    </Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup-login" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/appointments" element={<AppointmentForm />} />
        <Route exact path="/petform" element={<Petform />} />
        <Route exact path="/appointmentcalendar" element={<AppointmentCalendar />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
