import React, { useState, useEffect } from "react";
import "./App.css";
import DrawingBoard from "./drawingBoard/index";
import InputForm from "./inputForm/input";
import Display from "./inputForm/display";

function App() {
  const [profile, setProfile] = useState('gminova')


  return (
    <div className="App">
      <header className="App-header">
      <DrawingBoard />
      <Display profile={profile} />
      <InputForm profile={profile} setProfile={setProfile} />
      </header>
    </div>
  );
}

export default App;
