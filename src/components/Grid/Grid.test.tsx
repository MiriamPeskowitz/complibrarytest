/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Grid from "./Grid";

describe("Grid", () => {
  it("should render a Grid", () => {
    const { queryAllByText } = render(<Grid>A Grid</Grid>);
    expect(queryAllByText(/A Grid/)).toHaveLength(1);
  });
});
