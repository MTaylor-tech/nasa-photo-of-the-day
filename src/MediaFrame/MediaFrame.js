import React from "react";
//import "./MediaFrame.css";
import styled from "styled-components";
import { Spinner } from 'reactstrap';

const ImageFrame = styled.img`
  width: 100%;
  z-index: 1;
`;

const VideoFrame = styled.iframe`
  width: 800px;
  height: 443px;
  margin-top: 30px;
  z-index: 1;
`;

function MediaFrame (props) {
  if (props.mediaData.media_type==='image') {
    return <ImageFrame src={props.mediaData.url} alt={props.mediaData.title} className="image" />;
  } else if (props.mediaData.media_type==='video') {
    return <VideoFrame scrolling="no" className="youTube" title={props.mediaData.title} type="text/html" src={props.mediaData.url}></VideoFrame>;
  } else {
    return <Spinner color="light" />;
  }
}

export default MediaFrame;
