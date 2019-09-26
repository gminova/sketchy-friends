import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import InputForm from "./InputForm";
import Display from "./Display";

// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test("Input component renders", () => {
  const { getByLabelText } = render(<InputForm />);
  getByLabelText("Enter any Github handle:");
});
