import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../../components/Header";

describe("Header", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Header />);
  });
});
