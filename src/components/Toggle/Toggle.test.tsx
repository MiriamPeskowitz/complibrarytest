/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Toggle from "./Toggle";

describe("Toggle", () => {
  it("should render a Toggle", () => {
    const { queryAllByTestId } = render(<Toggle id="toggle" testId="foo" />);
    expect(queryAllByTestId(/foo/)).toHaveLength(1);
  });
});
