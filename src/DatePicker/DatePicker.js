import React from "react";
//import "./DatePicker.css";
import styled from "styled-components";

const DateBox = styled.div`
  position: absolute;
  left: 25px;
  top: 200px;
  border: 2px solid lime;
  padding: 2px;
  z-index: 3;
  opacity: 75%;
  background: lime;
`;

const DatePickerInput = styled.input`
  color: lime;
  background: black;
  opacity: 75%;
`;

function DatePicker (props) {

  return (
    <DateBox className="date-box">
      <DatePickerInput type="date" className="date-picker" onChange={props.dateFunction} id={props.id} value={props.date} />
    </DateBox>
  );
}

export default DatePicker;
