import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomCloseSymbol from "../../components/CustomCloseSymbol";

describe("CustomCloseSymbol", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomCloseSymbol />);
  });
});
