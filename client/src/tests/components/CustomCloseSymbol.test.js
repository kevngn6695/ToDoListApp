import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CustomCloseSymbol from "../../components/CustomCloseSymbol";

describe("CustomCloseSymbol", () => {
  test("Renders without crashing", () => {
    render(<CustomCloseSymbol />);
    const elements = screen.getAllByRole("presentation");
    expect(elements.length).toBe(2);
  });

  test("Applies the correct className to both div elements", () => {
    const testClassName = "test-class";
    render(<CustomCloseSymbol className={testClassName} />);
    const elements = screen.getAllByRole("presentation");
    elements.forEach((element) => {
      expect(element).toHaveClass(testClassName);
    });
  });

  test("Renders exactly two div elements", () => {
    render(<CustomCloseSymbol />);
    const divElements = screen.getAllByRole("presentation");
    expect(divElements).toHaveLength(2);
  });

  test("Handles missing className prop gracefully", () => {
    render(<CustomCloseSymbol />);
    const elements = screen.getAllByRole("presentation");
    elements.forEach((element) => {
      expect(element).not.toHaveClass();
    });
  });

  test("Matches snapshot", () => {
    const { asFragment } = render(
      <CustomCloseSymbol className="snapshot-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
