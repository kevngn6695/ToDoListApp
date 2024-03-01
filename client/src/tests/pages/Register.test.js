import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Register from "../../pages/Register";
describe("Register", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Register />);
  });
});
