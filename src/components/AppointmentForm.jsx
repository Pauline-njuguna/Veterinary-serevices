import React, { useState } from "react";

function AppointmentForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h1>Appointment</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="services">Select a Service:</label>
        <select
          id="services"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="surgery">Surgery</option>
          <option value="consultancy">Consultancy</option>
          <option value="allergies">Allergies</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;
