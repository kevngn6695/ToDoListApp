import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomButton from "../../components/CustomButton";

describe("CustomButton", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomButton />);
  });
});
