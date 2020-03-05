import React from 'react';
//import './Button.css';
import styled from "styled-components";

const Btn = styled.div`
  color: lime;
  padding: 5px;
  opacity: 40%;

  &:hover {
    opacity: 75%;
  }

  &:hover .button-text {
    display: inline-block;
  }
`;

const BtnText = styled.span`
  display: none;
  background-color: darkslategrey;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 2px;
  opacity: 75%;
`;

function Button (props) {

    return (
      <Btn onClick={props.onClick}>
        <i className={props.icon}></i>
        <BtnText className="button-text"> {props.text}</BtnText>
      </Btn>
    );
}


export default Button;
