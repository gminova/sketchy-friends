import React, { useState, useEffect } from "react";
import "./style.css";

const Canvas = () => {
  // set default state for mouse coordinates
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
  // Handle drawing
  //

  // if user is drawing)mousedown) this will be set to true, else false (mouseup)
  const [isDrawing, setIsDrawing] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  useEffect(() => {
    //starting mouse coordinates
    // in order to select the HTML DOM element we need
    // to have at least performed the first render on the DOM.
    // The myPics will be null if the first render has not taken place
    const myPics = document.querySelector(".drawing-board__canvas");
    // Get the canvas context - we will draw on this and call functions to draw on the context
    const context = myPics.getContext("2d");

    // The x and y offset of the canvas from the edge of the page
    const rect = myPics.getBoundingClientRect();

    const handleIsDrawing = event => {
      setClientX(event.clientX - rect.left);
      setClientY(event.clientY - rect.top);
      setIsDrawing(true);
    };

    myPics.addEventListener("mousedown", handleIsDrawing);

    const handleStroke = event => {
      if (isDrawing === true) {
        drawLine(context, clientX, clientY, event.clientX - rect.left, event.clientY - rect.top);
        setClientX(event.clientX - rect.left);
        setClientY(event.clientY - rect.top);
      }
    };
    // Add an event listener when the mouse is moved
    myPics.addEventListener("mousemove", handleStroke);

    const handleIsNotDrawing = e => {
      if (isDrawing === true) {
        drawLine(context, clientX, clientY, e.clientX - rect.left, e.clientY - rect.top);
        setClientX(0);
        setClientY(0);
        setIsDrawing(false);
      }
    };
    // When the mouse up takes place we need to stop drawing
    window.addEventListener("mouseup", handleIsNotDrawing);

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
  }, [isDrawing]);

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