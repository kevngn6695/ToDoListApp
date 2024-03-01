import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomEditModal from "../../components/CustomEditModal";

describe("CustomEditModal", () => {
  test("Initializes state correctly", () => {
    // Render the App component
    render(<CustomEditModal />);
  });
});
