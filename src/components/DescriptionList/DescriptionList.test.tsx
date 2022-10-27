/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import DescriptionList from "./DescriptionList";

describe("DescriptionList", () => {
  it("should render a DescriptionList", () => {
    const { queryAllByText } = render(
      <DescriptionList>Description List</DescriptionList>
    );
    expect(queryAllByText(/Description List/)).toHaveLength(1);
  });
});
