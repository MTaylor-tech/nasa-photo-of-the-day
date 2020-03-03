import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const apiKey = `api_key=DvijkRr9GB6oxQfL0Ch5ZmFcBIIa9aQrgH4q89yk`;
const apiUrl = `https://api.nasa.gov/planetary/apod?`;

function App() {
  const [imageData, setImageData] = useState('');

  const getImage = () => {
    if (imageData==='') {
      axios.get(`${apiUrl}${apiKey}`)
      .then((response)=>setImageData(response.data))
      .catch(error=>console.log(error));
    }
  };

  useEffect(getImage,[]);

  return (
    <div className="App">
      <p>
        <button onClick={getImage}>Click me</button>
        {imageData===''?'':<img src={imageData.url} alt={imageData.title} style={{width: `300px`}} />}
      </p>
    </div>
  );
}

export default App;
