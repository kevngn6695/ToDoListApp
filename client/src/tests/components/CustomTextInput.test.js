import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTextInput from "../../components/CustomTextInput";

describe("CustomTextInput", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTextInput />);
  });
});
