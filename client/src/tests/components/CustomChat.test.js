import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomChat from "../../components/CustomChat";

describe("CustomChat", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomChat />);
  });
});
