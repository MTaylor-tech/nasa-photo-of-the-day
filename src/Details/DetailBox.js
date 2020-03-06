import React from "react";
//import "./DetailBox.css";
import styled from "styled-components";

const DetailContainer = styled.div`
  color: lime;
  background-color: darkslategrey;
  padding: 10px;
  text-align: right;
  opacity: 75%;
    -moz-opacity: 0.75; /* Firefox and Mozilla browsers */
    -webkit-opacity: 0.75; /* WebKit browser e.g. Safari */
    filter: alpha(opacity=75); /* For IE8 and earlier */
  width: 80%;
  position: absolute;
  right: 0px;
  top: 100px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 2;
`;

const Explanation = styled.p`
  text-align: justify;
  font-family: 'Quantico', sans-serif;
`;

function DetailBox (props) {

  return (
    <DetailContainer>
      <p>{props.mediaData.title}</p>
      <p>{props.mediaData.date}</p>
      <Explanation>{props.mediaData.explanation}</Explanation>
    </DetailContainer>
  );
}

export default DetailBox;
