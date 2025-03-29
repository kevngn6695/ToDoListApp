import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomButton from "../../components/CustomButton";

describe("CustomButton", () => {
  test("Renders without crashing", () => {
    render(<CustomButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Displays children correctly", () => {
    render(<CustomButton>Click Me</CustomButton>);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  test("Applies the correct className", () => {
    render(<CustomButton className="test-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("test-class");
  });

  test("Handles onClick event", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click Me</CustomButton>);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Handles onMouseDown event", () => {
    const handleMouseDown = jest.fn();
    render(
      <CustomButton handleMouseDown={handleMouseDown}>Hold Me</CustomButton>,
    );
    const button = screen.getByText("Hold Me");
    fireEvent.mouseDown(button);
    expect(handleMouseDown).toHaveBeenCalledTimes(1);
  });

  test("Handles onMouseUp event", () => {
    const handleMouseUp = jest.fn();
    render(
      <CustomButton handleMouseUp={handleMouseUp}>Release Me</CustomButton>,
    );
    const button = screen.getByText("Release Me");
    fireEvent.mouseUp(button);
    expect(handleMouseUp).toHaveBeenCalledTimes(1);
  });
});
