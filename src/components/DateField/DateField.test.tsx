/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";

import DateField from "./DateField";

describe("DateField", () => {
  it("should render a DateField", () => {
    render(<DateField id="date" testId="foo" value="09282021" />);
    const dateField = screen.getByPlaceholderText("MM/DD/YYYY");
    expect(dateField).toBeInTheDocument();
  });
});
