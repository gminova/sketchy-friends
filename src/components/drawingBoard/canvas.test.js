import React from "react";
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import Canvas from "./Canvas";
import DrawingBoard from "./index";

// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test("Canvas component renders", () => {
  const { getByText } = render(<Canvas />);
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
