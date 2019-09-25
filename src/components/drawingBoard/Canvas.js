import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const Canvas = () => {
  // //set flag for drawing event
  // let drawing = false;
  // const canva = document.querySelector(".drawing-board__canvas");
  // //const context = canva.getContext("2d");
  // //mouse coordinates
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // useEffect(() => {
  //   const handleMouseMove = event => {
  //     setX(event.x);
  //     setY(event.y);
  //     drawing = true;
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousedown", handleMouseMove);
  //   };
  // }, []);
  const canvasRef = useRef(null);
  return (
    <div>
      <canvas
        className="drawing-board__canvas"
        ref={canvasRef}
        width={650}
        height={400}
        onClick={e => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          alert(canvas);
          // implement draw on ctx here
        }}
      ></canvas>
      <img 
      src="images/dog.jpeg" 
      alt="dog-photo"
      width={50}/>
    </div>
  );
};

export default Canvas;
