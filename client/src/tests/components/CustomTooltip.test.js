import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTooltip from "../../components/CustomTooltip";

describe("CustomTooltip", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTooltip />);
  });
});
