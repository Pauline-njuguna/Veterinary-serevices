import React, { useState } from "react";
import "./index.css";

function AppointmentForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <h1>Appointment</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="services">Select a Service:</label>
        <select
          className="services"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="dental">Dental Care</option>
          <option value="preventive">Preventive Care</option>
          <option value="consultancy">Consultancy</option>
          <option value="surgery">Surgery</option>
          <option value="allergies">Allergies</option>
          <option value="grooming">Grooming</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;
