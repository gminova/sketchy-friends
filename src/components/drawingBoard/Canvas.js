import React, { useState, useEffect, useRef } from "react";

const Canvas = () => {
  //
  // COLOR PICK ---------------------------------------
  //
  //
  const [color, setColor] = React.useState("#000000");
  const onColorChange = event => {
    setColor(event.target.value);
  };

  //
  // GLOBAL MOUSE COORDINATES ---------------------------------------
  //
  //
  const [mouseX, setX] = useState(0);
  const [mouseY, setY] = useState(0);

  useEffect(() => {
    // if user uses mouse, update coordinates
    const handleMouseMove = event => {
      setX(event.x);
      setY(event.y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  //
  // CANVAS ---------------------------------------
  //
  let ref = useRef();

  useEffect(() => {
    let myCanvas = ref.current;
    // Get the canvas context - we will draw on this and call functions to draw on the context
    const context = myCanvas.getContext("2d");
    const rect = myCanvas.getBoundingClientRect();
    // if user is drawing)mousedown) this will be set to true, else false (mouseup)
    let isDrawing = false;
    //
    // DRAWING MOUSE COORDINATES---------------------------------------
    //
    let x = 0;
    let y = 0;

    // Add the event listeners for mousedown, mousemove, and mouseup
    myCanvas.addEventListener("mousedown", e => {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      isDrawing = true;
    });

    // Add an event listener when the mouse if moved
    myCanvas.addEventListener("mousemove", e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
    });
    // When the mouse up takes place we need to stop drawing
    myCanvas.addEventListener("mouseup", e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });

    // core drawing function - takes the mouse coordinates and the context
    // and draws from one coordinate point [x,y] to another [x,y]
    const drawLine = (context, x1, y1, x2, y2) => {
      context.beginPath();
      context.strokeStyle = color; // '#000000';
      context.lineWidth = 3;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    };
  }, [color]);

  return (
    <div className="drawing-board__container">
    <p className="drawing-board__color-picker-label">Select a colour:  </p>
    <input
      type="color"
      className="drawing-board__color-picker"
      value={color}
      onChange={onColorChange}
    ></input>
    <br/>
      <canvas
        ref={ref}
        className="drawing-board__canvas"
        width={500}
        height={500}
      ></canvas>
      <pre>
        {mouseX}:{mouseY}
      </pre>
    </div>
  );
};

export default Canvas;
