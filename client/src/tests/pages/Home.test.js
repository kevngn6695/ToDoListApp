import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "../../pages/Home";
describe("Home", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Home />);
  });
});
