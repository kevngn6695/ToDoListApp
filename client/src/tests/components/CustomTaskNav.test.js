import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTaskNav from "../../components/CustomTaskNav";

describe("CustomTaskNav", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTaskNav />);
  });
});
