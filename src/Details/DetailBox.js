import React from "react";
import "./DetailBox.css";

function DetailBox (props) {

  return (
    <div className="detail-box">
      <p>{props.mediaData.title}</p>
      <p>{props.mediaData.date}</p>
      <p className="justified">{props.mediaData.explanation}</p>
    </div>
  );
}

export default DetailBox;
