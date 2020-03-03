import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import ButtonContainer from "./Button/ButtonContainer.js";
import DetailBox from "./Details/DetailBox.js";


const apiKey = `api_key=DvijkRr9GB6oxQfL0Ch5ZmFcBIIa9aQrgH4q89yk`;
const apiUrl = `https://api.nasa.gov/planetary/apod?`;

function App() {
  const [mediaData, setMediaData] = useState('');
  const [date, setDate] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const getImage = () => {
    if (date==='') {
      axios.get(`${apiUrl}${apiKey}`)
      .then((response)=> {
        console.log(response);
        setMediaData(response.data);
        setMediaType(response.data.media_type);
      })
      .catch(error=>console.log(error));
    }
  };

  useEffect(getImage,[date]);

  return (
    <div className="App">
      <p>
        {mediaType==='image'?<img src={mediaData.url} alt={mediaData.title} className="image" />:''}
        {mediaType==='video'?<iframe scrolling="no" className="youTube" title={mediaData.title} type="text/html" src={mediaData.url}></iframe>:''}
      </p>
      <ButtonContainer detailsFunction={()=>setShowDetails(!showDetails)} />
      {showDetails?<DetailBox mediaData={mediaData} />:''}
    </div>
  );
}

export default App;
