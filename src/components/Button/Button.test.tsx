/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Button from "./Button";

describe("Button", () => {
  it("should render a Button", () => {
    const { queryAllByText } = render(<Button>A Button</Button>);
    expect(queryAllByText(/A Button/)).toHaveLength(1);
  });
});
