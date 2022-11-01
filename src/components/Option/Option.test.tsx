/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";

import Option from "./Option";

describe("Option", () => {
  it("should render an Option", () => {
    const { queryAllByText } = render(
      <Option value="option">An Option</Option>
    );
    expect(queryAllByText(/An Option/)).toHaveLength(1);
  });

  it("should render a selected Option", () => {
    render(
      <Option selected value="option">
        An Option
      </Option>
    );
    expect(screen.getByTestId("bdt-Option-selected")).toBeDefined();
  });

  it("should render a disabled Option", () => {
    render(
      <Option disabled value="option">
        An Option
      </Option>
    );
    expect(screen.getByTestId("bdt-Option-disabled")).toBeDefined();
  });

  it("should render a non-disabled, non-selected Option with appropriate testid", () => {
    render(<Option value="option">An Option</Option>);
    expect(screen.getByTestId("bdt-Option-enabled")).toBeDefined();
  });

  it("should render a disabled and selected Option even though this state is not recommended", () => {
    jest.spyOn(console, "warn").mockImplementation(() => {
      /* intentionally empty */
    });

    render(
      <Option disabled selected value="option">
        An Option
      </Option>
    );
    expect(screen.getByTestId("bdt-Option-disabled")).toBeDefined();
  });
});
