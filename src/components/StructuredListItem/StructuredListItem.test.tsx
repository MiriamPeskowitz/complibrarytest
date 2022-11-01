/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import StructuredListItem from "./StructuredListItem";

describe("StructuredListItem", () => {
  it("should render a StructuredListItem", () => {
    const { queryAllByText } = render(
      <StructuredListItem title="StructuredListItem" metadata="metadata">
        A StructuredListItem
      </StructuredListItem>
    );
    expect(queryAllByText(/A StructuredListItem/)).toHaveLength(1);
  });
});
