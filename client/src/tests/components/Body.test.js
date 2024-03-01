import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Body from "../../components/Body";

describe("Body", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<Body />);
  });
});
