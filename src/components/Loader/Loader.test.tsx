/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Loader from "./Loader";

describe("Loader", () => {
  it("should render a Loader", () => {
    const { queryAllByText } = render(<Loader className="some-class" />);
    expect(queryAllByText(/Loading/)).toHaveLength(1);
  });
});
