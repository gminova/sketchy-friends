import React, { useState, useEffect } from "react";
import "./style.css";

const Canvas = () => {
  //mouse coordinates
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleMouseMove = event => {
      setX(event.x);
      setY(event.y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div>
      <h2>Your mouse coordinates:</h2>
      <pre>
        {x}:{y}
      </pre>
      <canvas className="drawing-board__canvas"></canvas>
    </div>
  );
};

export default Canvas;
