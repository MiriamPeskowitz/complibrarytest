/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import InputLabel from "./InputLabel";

describe("InputLabel", () => {
  it("should render a InputLabel", () => {
    const { queryAllByText } = render(<InputLabel label="An Input Label" />);
    expect(queryAllByText(/An Input Label/)).toHaveLength(1);
  });
});
