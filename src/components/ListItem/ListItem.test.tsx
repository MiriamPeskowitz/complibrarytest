/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("should render a ListItem", () => {
    const { queryAllByText } = render(<ListItem>Single List Item</ListItem>);
    expect(queryAllByText(/Single List Item/)).toHaveLength(1);
  });
});
