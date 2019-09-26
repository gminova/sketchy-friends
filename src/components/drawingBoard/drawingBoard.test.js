import React from "react";
import { render, cleanup, fireEvent, waitForElement, debug } from "@testing-library/react";
import Canvas from "./Canvas";
import DrawingBoard from "./index";

// { getByText, getByLabelText, getByTestId }

test("Canvas component renders", () => {
  const { getByText } = render(<Canvas />);
  debug();
  getByText("Your color is:");
});

test("Canvas 'clear' button renders", () => {
  const { getByText } = render(<Canvas />);
  getByText("Clear");
});

test("Canvas 'undo' button renders", () => {
  const { getByText } = render(<Canvas />);
  getByText("Undo");
});
