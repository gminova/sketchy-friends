import React, { useState, useEffect } from "react";
import "./style.css";

const Canvas = () => {
  return (
    <div>
      <h2>Draw here:</h2>
      <canvas className="drawing-board__canvas"></canvas>
    </div>
  );
};

export default Canvas;
