/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Divider from "./Divider";

describe("Divider", () => {
  it("should render a Divider", () => {
    const { queryAllByRole } = render(<Divider />);
    expect(queryAllByRole(/separator/)).toHaveLength(1);
  });
});
