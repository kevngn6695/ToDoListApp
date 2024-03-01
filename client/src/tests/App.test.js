import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

describe("App", () => {
  test("initializes state correctly", () => {
    // Render the App component
    render(<App />);

    // Check if the current day is rendered correctly
    const dayElement = screen.getByText(/Sun|Mon|Tues|Wed|Thur|Fri|Sat/);
    expect(dayElement).toBeInTheDocument();

    // Check if the date is rendered correctly
    const dateElement = screen.getByText(/\d{1,2}\/\d{1,2}\/\d{4}/);
    expect(dateElement).toBeInTheDocument();

    // Check if the time is rendered correctly
    const timeElement = screen.getByText(/\d{1,2}:\d{2}/);
    expect(timeElement).toBeInTheDocument();
  });
});
