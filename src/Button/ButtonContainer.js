import React from "react";
//import "./Button.css";
import Button from "./Button.js";
import styled from "styled-components";

const ButtonBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 3;
`;

function ButtonContainer (props) {
  return (
    <ButtonBox>
      <Button text='details' icon='fas fa-info-circle fa-3x' onClick={props.detailsFunction} />
      <Button text='choose date' icon='far fa-calendar-alt fa-3x' onClick={props.dateFunction} />
      <Button text='best finds' icon='fas fa-exclamation-circle fa-3x' onClick={props.findsFunction} />
    </ButtonBox>
  );
}

export default ButtonContainer;
