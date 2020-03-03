import React from "react";
import "./MediaFrame.css";

function MediaFrame (props) {
  if (props.mediaData.media_type==='image') {
    return <img src={props.mediaData.url} alt={props.mediaData.title} className="image" />;
  } else if (props.mediaData.media_type==='video') {
    return <iframe scrolling="no" className="youTube" title={props.mediaData.title} type="text/html" src={props.mediaData.url}></iframe>;
  } else {
    return <h3>Loading...</h3>;
  }
}

export default MediaFrame;
