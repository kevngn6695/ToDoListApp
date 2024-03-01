import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Setting from "../../pages/Setting";
describe("Setting", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Setting />);
  });
});
