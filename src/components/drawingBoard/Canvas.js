import React, { useState, useEffect } from "react";
import "./style.css";

const Canvas = () => {
  const [mouseX, setX] = useState(0);
  const [mouseY, setY] = useState(0);
  React.useEffect(() => {
    const handleMouseMove = event => {
      setX(event.x);
      setY(event.y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // if user is drawing)mousedown) this will be set to true, else false (mouseup)
    let isDrawing = false;
    //starting mouse coordinates
    let x = 0;
    let y = 0;
    // in order to select the HTML DOM element we need
    // to have at least performed the first render on the DOM.
    // The myPics will be null if the first render has not taken place
    const myPics = document.querySelector(".drawing-board__canvas");
    // Get the canvas context - we will draw on this and call functions to draw on the context
    const context = myPics.getContext("2d");

    // The x and y offset of the canvas from the edge of the page
    const rect = myPics.getBoundingClientRect();

    // Add the event listeners for mousedown, mousemove, and mouseup
    myPics.addEventListener("mousedown", e => {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      isDrawing = true;
    });

    // Add an event listener when the mouse if moved
    myPics.addEventListener("mousemove", e => {
      if (isDrawing === true) {
        drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
    });
    // When the mouse up takes place we need to stop drawing
    window.addEventListener("mouseup", e => {
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
      context.strokeStyle = "black";
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    };
  }, []);

  return (
    <div>
      <pre>
        {mouseX}:{mouseY}
      </pre>
      <input type="color" className="drawing-board__color-picker"></input>
      <button className="drawing-board__button--clear">Clear</button>
      <canvas
        className="drawing-board__canvas"
        width={650}
        height={400}
      ></canvas>
      <button className="drawing-board__button--undo">Undo</button>
    </div>
  );
};

export default Canvas;
