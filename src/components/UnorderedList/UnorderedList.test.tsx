/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import ListItem from "../ListItem";

import UnorderedList from "./UnorderedList";

describe("UnorderedList", () => {
  it("should render a UnorderedList", () => {
    const { queryAllByText } = render(
      <UnorderedList>
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
        <ListItem>Three</ListItem>
      </UnorderedList>
    );
    expect(queryAllByText(/One/)).toHaveLength(1);
  });
});
