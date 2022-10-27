/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Container from "./Container";

describe("Container", () => {
  it("should render a Container", () => {
    const { queryAllByText } = render(<Container>A Container</Container>);
    expect(queryAllByText(/A Container/)).toHaveLength(1);
  });
});
