import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Calendar from "../../pages/Calendar";
describe("Calendar", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Calendar />);
  });
});
