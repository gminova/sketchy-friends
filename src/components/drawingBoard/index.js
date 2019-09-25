import React, { useState, useEffect } from "react";
import Canvas from "./Canvas";

const DrawingBoard = () => {
  return (
    <div className="drawing-board__container">
      <p>DRAWING BOARD!</p>
      <Canvas />
    </div>
  );
};

export default DrawingBoard;
