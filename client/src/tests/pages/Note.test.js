import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Note from "../../pages/Note";
describe("Note", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Note />);
  });
});
