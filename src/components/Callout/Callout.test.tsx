/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Callout from "./Callout";

describe("Callout", () => {
  it("should render a Callout", () => {
    const { queryAllByText } = render(
      <Callout headline="Headline" secondary="Secondary text" />
    );
    expect(queryAllByText(/Headline/)).toHaveLength(1);
  });
});
