import React from "react";
import "./App.css";
import DrawingBoard from "./drawingBoard/index";
import InputForm from "./inputForm/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <DrawingBoard />
      <InputForm />
      </header>
    </div>
  );
}

export default App;
