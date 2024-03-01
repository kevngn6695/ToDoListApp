import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Login from "../../pages/Login";
describe("Login", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Login />);
  });
});
