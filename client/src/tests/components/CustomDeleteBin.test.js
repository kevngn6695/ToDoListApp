import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomDeleteBin from "../../components/CustomDeleteBin";

describe("CustomDeleteBin", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomDeleteBin />);
  });
});
