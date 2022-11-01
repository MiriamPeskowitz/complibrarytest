/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Slider from "./Slider";

describe("Slider", () => {
  it("should render a Slider", () => {
    const { queryAllByTestId } = render(<Slider testId="foo" />);
    expect(queryAllByTestId(/foo/)).toHaveLength(1);
  });
});
