import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomModalContainer from "../../components/CustomModalContainer";

describe("CustomModalContainer", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomModalContainer />);
  });
});
