import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomDisplayContainer from "../../components/CustomDisplayContainer";

describe("CustomDisplayContainer", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomDisplayContainer />);
  });
});
