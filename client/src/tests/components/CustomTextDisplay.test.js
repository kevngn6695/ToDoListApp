import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTextDisplay from "../../components/CustomTextDisplay";

describe("CustomTextDisplay", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTextDisplay />);
  });
});
