import React from "react";
import { render, cleanup } from "@testing-library/react";
import Display from "./Display";

// ensures our document gets cleared out after each test
// so we don't have lots of copies of our component in there
// otherwise our tests might affect each other
afterEach(cleanup);

test("Display component renders", () => {
  const { getByAltText } = render(<Display />);
  getByAltText("some image");
});
