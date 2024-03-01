import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTextHeading from "../../components/CustomTextHeading";

describe("CustomTextHeading", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTextHeading />);
  });
});
