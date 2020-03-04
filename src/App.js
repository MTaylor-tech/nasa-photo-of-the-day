import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import ButtonContainer from "./Button/ButtonContainer.js";
import DetailBox from "./Details/DetailBox.js";
import MediaFrame from "./MediaFrame/MediaFrame.js";
import DatePicker from "./DatePicker/DatePicker.js";


const apiKey = `api_key=DvijkRr9GB6oxQfL0Ch5ZmFcBIIa9aQrgH4q89yk`;
const apiUrl = `https://api.nasa.gov/planetary/apod?`;
const datePrefix = "&date=";

function App() {
  const [mediaData, setMediaData] = useState('');
  const [dateString, setDateString] = useState('');
  const [date, setDate] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const getImage = () => {
      axios.get(`${apiUrl}${apiKey}${dateString}`)
      .then((response)=> {
        console.log(response);
        setMediaData(response.data);
      })
      .catch(error=>console.log(error));
  };

  useEffect(getImage,[dateString]);

  const changeDate = () => {
    const newDate = document.getElementById("datePicker").value;
    setDateString(`${datePrefix}${newDate}`);
    setDate(newDate);
    setShowDate(false);
  };

  return (
    <div className="App">
      <MediaFrame mediaData={mediaData} />
      <ButtonContainer detailsFunction={()=>setShowDetails(!showDetails)} dateFunction={()=>setShowDate(!showDate)} />
      {showDetails?<DetailBox mediaData={mediaData} />:<></>}
      {showDate?<DatePicker dateFunction={changeDate} id="datePicker" date={date} />:<></>}
    </div>
  );
}

export default App;
