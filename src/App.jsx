import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/index.css";
import Home from "./components/Home";
import Petform from "./components/PetForm";
import AppointmentForm from "./components/AppointmentForm";
import SignUp from "./components/Signup/Signup"
import LogIn from "./components/Signup/Login"
import Contacts from "./components/Contacts"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup-login" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/appointments" element={<AppointmentForm />} />
        <Route exact path="/petform" element={<Petform />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
