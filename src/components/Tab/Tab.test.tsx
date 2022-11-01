/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Tab from "./Tab";

describe("Tab", () => {
  it("should render a Tab", () => {
    const { queryAllByText } = render(<Tab>A Tab</Tab>);
    expect(queryAllByText(/A Tab/)).toHaveLength(1);
  });
});
