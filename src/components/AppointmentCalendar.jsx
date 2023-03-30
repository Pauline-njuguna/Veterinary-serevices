import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
      />
      <p>Selected Date: {moment(startDate).format("DD/MM/YYYY")}</p>
    </div>
  );
};

export default AppointmentCalendar;
