import React from "react";
import "./DatePicker.css";

function DatePicker (props) {

  return (
    <div className="date-box">
      <input type="date" className="date-picker" onChange={props.dateFunction} id={props.id} value={props.date} />
    </div>
  );
}

export default DatePicker;
