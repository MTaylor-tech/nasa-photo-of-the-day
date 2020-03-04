import React from "react";
import "./Button.css";
import Button from "./Button.js"

function ButtonContainer (props) {
  return (
    <div className="button-container">
      <Button text='details' icon='fas fa-info-circle fa-3x' onClick={props.detailsFunction} />
      <Button text='choose date' icon='far fa-calendar-alt fa-3x' onClick={props.dateFunction} />
      <Button text='best finds' icon='fas fa-exclamation-circle fa-3x' onClick={props.findsFunction} />
    </div>
  );
}

export default ButtonContainer;
