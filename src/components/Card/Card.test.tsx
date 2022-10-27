/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Card from "./Card";

describe("Card", () => {
  it("should render a Card", () => {
    const { queryAllByText } = render(
      <Card
        title="Card Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
        button
        buttonText="Submit"
        featuredImage="https://via.placeholder.com/500x300"
      />
    );
    expect(queryAllByText(/Lorem ipsum/)).toHaveLength(1);
  });
});
