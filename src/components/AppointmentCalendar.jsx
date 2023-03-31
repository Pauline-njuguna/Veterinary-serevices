import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="appointment-calendar">
      <h3 className="calendar-title">Appointment Calendar</h3>
      <p> Kindly select an appointment date to book.</p>
      <div className="date-picker-wrapper">
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />
        <p className="selected-date">
          Selected Date: {moment(startDate).format("DD/MM/YYYY")}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
