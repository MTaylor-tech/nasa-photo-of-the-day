import React from 'react';
//import './Button.css';
import styled from "styled-components";

const Btn = styled.div`
  color: lime;
  padding: 5px;
  opacity: 40%;
    -moz-opacity: 0.4; /* Firefox and Mozilla browsers */
    -webkit-opacity: 0.4; /* WebKit browser e.g. Safari */
    filter: alpha(opacity=40); /* For IE8 and earlier */

  &:hover {
    opacity: 75%;
      -moz-opacity: 0.75; /* Firefox and Mozilla browsers */
      -webkit-opacity: 0.75; /* WebKit browser e.g. Safari */
      filter: alpha(opacity=75); /* For IE8 and earlier */
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
    -moz-opacity: 0.75; /* Firefox and Mozilla browsers */
    -webkit-opacity: 0.75; /* WebKit browser e.g. Safari */
    filter: alpha(opacity=75); /* For IE8 and earlier */
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
