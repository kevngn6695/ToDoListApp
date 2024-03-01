import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomMenuSymbol from "../../components/CustomMenuSymbol";

describe("CustomMenuSymbol", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomMenuSymbol />);
  });
});
