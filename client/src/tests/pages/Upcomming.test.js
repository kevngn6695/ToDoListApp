import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Upcomming from "../../pages/Upcomming";
describe("Upcoming", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Upcomming />);
  });
});
