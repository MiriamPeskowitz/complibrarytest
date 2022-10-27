/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Typography from "./Typography";

describe("Typography", () => {
  it("should render a Typography", () => {
    const { queryAllByText } = render(
      <Typography variant="h1">A Typography</Typography>
    );
    expect(queryAllByText(/A Typography/)).toHaveLength(1);
  });
});
