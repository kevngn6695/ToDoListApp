import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomTypesNav from "../../components/CustomTypesNav";

describe("CustomTypesNav", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomTypesNav />);
  });
});
