/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import InputError from "./InputError";

describe("InputError", () => {
  it("should render an InputError", () => {
    const { queryAllByText } = render(<InputError>An InputError</InputError>);
    expect(queryAllByText(/An InputError/)).toHaveLength(1);
  });
});
