import React, { useState, useEffect } from "react";
import Pic from './new_elements/Pic/pic.js';
import Buttons from "./new_elements/Buttons/buttons.js";
import ProgressBar from './new_elements/Progressbar/progressbar.js';
import './App.css';
import { io } from "socket.io-client";

const ENDPOINT = process.env.HOST_ADR || "localhost:8060";

const socket = io(ENDPOINT, {
  path: "/ws/socket.io",
  transports: ["websocket"]
});

socket.on("connect", () => {
  console.log("Connected to server");
});

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

function App() {

  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on("panda_state", data => {
      setResponse(JSON.parse(data));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Pic/>
        <Buttons name={"Еда"}/>
        <div>
        <ProgressBar val={response['age']} name={'age'}/>
        <ProgressBar val={response['food']} name={'food'}/>
        <ProgressBar val={response['happiness']} name={'happiness'}/>
        <ProgressBar val={response['health']} name={'health'}/>
        <ProgressBar val={response['tired']} name={'tired'}/>
        </div>
        <p>
          It's <time dateTime={response['food']}>{response['food']}</time>
        </p>
      </header>
    </div>
  );
}

export default App;