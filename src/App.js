import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import ButtonContainer from "./Button/ButtonContainer.js";
import DetailBox from "./Details/DetailBox.js";
import MediaFrame from "./MediaFrame/MediaFrame.js";
import DatePicker from "./DatePicker/DatePicker.js";
import interestingFinds from "./interestingFinds.js";


const apiKey = `api_key=DvijkRr9GB6oxQfL0Ch5ZmFcBIIa9aQrgH4q89yk`;
const apiUrl = `https://api.nasa.gov/planetary/apod?`;
const datePrefix = "&date=";
const today = new Date();
let currentDate = new Date();

function App() {
  const [mediaData, setMediaData] = useState('');
  const [dateString, setDateString] = useState(`${datePrefix}${today.toISOString().substr(0,10)}`);
  const [date, setDate] = useState(today);
  const [showDetails, setShowDetails] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [find, setFind] = useState(0);

  const getImage = () => {
      console.log(`DS: ${dateString}`);
      axios.get(`${apiUrl}${apiKey}${dateString}`)
      .then((response)=> {
        console.log(response);
        setMediaData(response.data);
      })
      .catch(error=>console.log(error));
  };

  useEffect(()=>{setTimeout(getImage,200)},[dateString]);

  const changeDate = () => {
    console.log(`DPV: ${document.getElementById("datePicker").value}`);
    //console.log(Date.parse(document.getElementById("datePicker").value));
    setDate(Date.parse(document.getElementById("datePicker").value));
    currentDate = new Date(document.getElementById("datePicker").value);
    console.log(`CD: ${currentDate}`);
    //setDate(newDate);
    //setDateString(`${datePrefix}${date.toString().substr(0,10)}`);
    //console.log(`D: ${date.toString().substr(0,10)}`);
    //setShowDate(false); (works with Firefox, but not Safari)
  };

  useEffect(()=> { setTimeout(() => {
    //currentDate = date;
    setDateString(`${datePrefix}${currentDate.toISOString().substr(0,10)}`);
    console.log(`D: ${currentDate.toISOString().substr(0,10)}`);},100)
  },[date]);

  const previous = () => {
    currentDate.setDate(currentDate.getDate() -1);
    setDate(currentDate);
    setDateString(`${datePrefix}${currentDate.toISOString().substr(0,10)}`);
  };

  const next = () => {
    currentDate.setDate(currentDate.getDate() +1);
    setDate(currentDate);
    setDateString(`${datePrefix}${currentDate.toISOString().substr(0,10)}`);
  };

  const gotoToday = () => {
    currentDate = new Date(today);
    setDate(currentDate);
    setDateString(`${datePrefix}${currentDate.toISOString().substr(0,10)}`);
  };

  const nextFind = () => {
    if (find >= interestingFinds.length) {
      currentDate = new Date(interestingFinds[0]);
      setDateString(`${datePrefix}${interestingFinds[0]}`);
      console.log(interestingFinds[0]);
      setDate(Date.parse(interestingFinds[0]));
      setFind(1);
    } else {
      currentDate = new Date(interestingFinds[find]);
      setDateString(`${datePrefix}${interestingFinds[find]}`);
      console.log(interestingFinds[find]);
      setDate(Date.parse(interestingFinds[find]));
      setFind(find+1);
    }
  };


  return (
    <div className="App">
      <MediaFrame mediaData={mediaData} />
      <ButtonContainer detailsFunction={()=>setShowDetails(!showDetails)} dateFunction={()=>setShowDate(!showDate)} findsFunction={nextFind} prevFunction={previous} nextFunction={next} todayFunction={gotoToday} currentDate={currentDate} today={today} />
      {showDetails?<DetailBox mediaData={mediaData} />:<></>}
      {showDate?<DatePicker dateFunction={changeDate} id="datePicker" date={currentDate.toISOString().substr(0,10)} />:<></>}
    </div>
  );
}

export default App;
