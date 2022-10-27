/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Chip from "./Chip";

describe("Chip", () => {
  it("should render a Chip", () => {
    const { queryAllByText } = render(<Chip>A Chip</Chip>);
    expect(queryAllByText(/A Chip/)).toHaveLength(1);
  });
});
