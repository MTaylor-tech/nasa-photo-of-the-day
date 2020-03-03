import React from "react";
import "./DatePicker.css";

function DatePicker (props) {

  return (
    <input type="date" className="date-picker" onChange={props.dateFunction} id={props.id} />
  );
}

export default DatePicker;
