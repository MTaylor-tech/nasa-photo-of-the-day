import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import ButtonContainer from "./Button/ButtonContainer.js";
import DetailBox from "./Details/DetailBox.js";
import MediaFrame from "./MediaFrame/MediaFrame.js";


const apiKey = `api_key=DvijkRr9GB6oxQfL0Ch5ZmFcBIIa9aQrgH4q89yk`;
const apiUrl = `https://api.nasa.gov/planetary/apod?`;

function App() {
  const [mediaData, setMediaData] = useState('');
  const [date, setDate] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const getImage = () => {
    if (date==='') {
      axios.get(`${apiUrl}${apiKey}${date}`)
      .then((response)=> {
        console.log(response);
        setMediaData(response.data);
      })
      .catch(error=>console.log(error));
    }
  };

  useEffect(getImage,[date]);

  return (
    <div className="App">
      <MediaFrame mediaData={mediaData} />
      <ButtonContainer detailsFunction={()=>setShowDetails(!showDetails)} />
      {showDetails?<DetailBox mediaData={mediaData} />:''}
    </div>
  );
}

export default App;
