import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomMenuContainer from "../../components/CustomMenuContainer";

describe("CustomMenuContainer", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomMenuContainer />);
  });
});
