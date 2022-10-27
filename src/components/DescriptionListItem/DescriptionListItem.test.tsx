/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import DescriptionListItem from "../DescriptionListItem";

describe("DescriptionListItem", () => {
  it("should render a DescriptionListItem", () => {
    const { queryAllByText } = render(
      <DescriptionListItem heading="Phone number">
        (215) 712-2060
      </DescriptionListItem>
    );
    expect(queryAllByText(/Phone number/)).toHaveLength(1);
  });
});
