import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomDateAndTimeContainer from "../../components/CustomDateAndTimeContainer";

describe("CustomDateAndTimeContainer", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomDateAndTimeContainer />);
  });
});
