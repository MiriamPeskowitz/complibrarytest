/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import IndentSection from "./IndentSection";

describe("IndentSection", () => {
  it("should render a IndentSection", () => {
    const { queryAllByText } = render(
      <IndentSection>A IndentSection</IndentSection>
    );
    expect(queryAllByText(/A IndentSection/)).toHaveLength(1);
  });
});
