import React, { useState } from "react";
import "./index.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentForm() {
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      service: selectedService,
      date: selectedDate,
    };

    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle response from the API
      })
      .catch((error) => {
        console.error(error);
        // Handle error from the API
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <h1>Appointment</h1>

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

      <div className="form-group">
        <label htmlFor="date">Select a Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />
      </div>

      <button type="submit">Submit</button>
      <AppointmentCalendar selectedDate={selectedDate} />
    </form>
  );
}

const AppointmentCalendar = ({ selectedDate }) => {
  return (
    <div className="appointment-calendar">
      <h3 className="calendar-title">Appointment Calendar</h3>
      <p className="selected-date">
        Selected Date: {moment(selectedDate).format("DD/MM/YYYY")}
      </p>
    </div>
  );
};

export default AppointmentForm;
