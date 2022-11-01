/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Accordion from "./Accordion";

describe("Accordion", () => {
  it("should render a Accordion", () => {
    const { queryAllByText } = render(
      <Accordion title="What is your return policy?" id="sect1">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </Accordion>
    );
    expect(queryAllByText(/Lorem ipsum/)).toHaveLength(1);
  });
});
