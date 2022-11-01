/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should render a ButtonGroup", () => {
    const { queryAllByText } = render(<ButtonGroup>A ButtonGroup</ButtonGroup>);
    expect(queryAllByText(/A ButtonGroup/)).toHaveLength(1);
  });
});
