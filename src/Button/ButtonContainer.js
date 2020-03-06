import React from "react";
//import "./Button.css";
import Button from "./Button.js";
import styled from "styled-components";


const ButtonBox = styled.div`
  position: absolute;
  left: 20px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 3;

  ${props => (props.tall ? `height: 600px` : `height: 400px`)}
`;

function ButtonContainer (props) {
  let tall = (props.currentDate < props.today);

  return (
  <ButtonBox tall={tall} >
      <Button text='details' icon='fas fa-info-circle fa-3x' onClick={props.detailsFunction} />
      <Button text='choose date' icon='far fa-calendar-alt fa-3x' onClick={props.dateFunction} />
      <Button text='best finds' icon='fas fa-exclamation-circle fa-3x' onClick={props.findsFunction} />
      <Button text='-1 day' icon='fas fa-chevron-circle-left fa-3x' onClick={props.prevFunction} />
      {(props.currentDate < props.today)?<Button text='+1 day' icon='fas fa-chevron-circle-right fa-3x' onClick={props.nextFunction} />:<></>}
      {(props.currentDate < props.today)?<Button text='today' icon='fas fa-clock fa-3x' onClick={props.todayFunction} />:<></>}
    </ButtonBox>
  );
}

export default ButtonContainer;
