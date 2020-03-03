import React from 'react';
import './Button.css';

function Button (props) {

    return (
      <div className="button" onClick={props.onClick}>
        <i className={props.icon}></i>
        <span className="button-text"> {props.text}</span>
      </div>
    );
}


export default Button;
