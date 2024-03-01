import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomLink from "../../components/CustomLink";

describe("CustomLink", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomLink />);
  });
});
