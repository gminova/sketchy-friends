import React from "react";
import { render, cleanup } from "@testing-library/react";
import InputForm from "./InputForm";

// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test("Input component renders", () => {
  const { getByText } = render(<InputForm />);
  getByText("Enter any Github handle and try to draw your friends:");
});