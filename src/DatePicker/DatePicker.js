import React from "react";
//import "./DatePicker.css";
import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateBox = styled.div`
  position: absolute;
  left: 25px;
  top: 200px;
  border: 2px solid lime;
  padding: 2px;
  z-index: 3;
  opacity: 75%;
    -moz-opacity: 0.75; /* Firefox and Mozilla browsers */
    -webkit-opacity: 0.75; /* WebKit browser e.g. Safari */
    filter: alpha(opacity=75); /* For IE8 and earlier */
  background: lime;
`;

const DatePickerInput = styled(DatePicker)`
  color: lime;
  background: black;
  opacity: 75%;
    -moz-opacity: 0.75; /* Firefox and Mozilla browsers */
    -webkit-opacity: 0.75; /* WebKit browser e.g. Safari */
    filter: alpha(opacity=75); /* For IE8 and earlier */
`;

function DatePickerBox (props) {

  return (
    <DateBox className="date-box">
      <DatePickerInput type="date" className="date-picker" onChange={props.dateFunction} id={props.id} placeholderText={props.date} selected={props.selected} dateFormat='yyyy-MM-dd' endDate={props.endDate} />
    </DateBox>
  );
}

export default DatePickerBox;
