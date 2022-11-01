/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import ListItem from "../ListItem";

import OrderedList from "./OrderedList";

describe("OrderedList", () => {
  it("should render a OrderedList", () => {
    const { queryAllByText } = render(
      <OrderedList>
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
        <ListItem>Three</ListItem>
        <ListItem>Four</ListItem>
        <ListItem>Five</ListItem>
      </OrderedList>
    );
    expect(queryAllByText(/One/)).toHaveLength(1);
  });
});
