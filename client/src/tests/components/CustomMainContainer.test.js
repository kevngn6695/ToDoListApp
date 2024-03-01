import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomMainContainer from "../../components/CustomMainContainer";

describe("CustomMainContainer", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomMainContainer />);
  });
});
