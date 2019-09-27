import React, { useState } from "react";
import "./App.css";
import DrawingBoard from "./drawingBoard/DrawingBoard";
import InputForm from "./inputForm/InputForm";
import Display from "./inputForm/Display";

function App() {
  const [profile, setProfile] = useState('fac-17')


  return (
    <div className="app">
      <InputForm className="app--input-form" profile={profile} setProfile={setProfile} />
      <section className="app--drawing-section">
        <Display className="app--display" profile={profile} />
        <DrawingBoard className="app--drawing-board" />
      </section>
    </div>
  );
}

export default App;
