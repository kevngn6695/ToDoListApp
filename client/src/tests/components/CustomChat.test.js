import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomChat from "../../components/CustomChat";

describe("CustomChat", () => {
  test("renders without crashing", () => {
    render(<CustomChat />);
    const element = screen.getByText("CustomChat");
    expect(element).toBeInTheDocument();
  });

  test("displays the correct text", () => {
    render(<CustomChat />);
    const element = screen.getByText("CustomChat");
    expect(element).toHaveTextContent("CustomChat");
  });

  test("matches the snapshot", () => {
    const { asFragment } = render(<CustomChat />);
    expect(asFragment()).toMatchSnapshot();
  });
});
