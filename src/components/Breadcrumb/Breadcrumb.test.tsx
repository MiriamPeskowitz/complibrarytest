/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("should render a Breadcrumb", () => {
    const { queryAllByText } = render(
      <Breadcrumb url="url">A Breadcrumb</Breadcrumb>
    );
    expect(queryAllByText(/A Breadcrumb/)).toHaveLength(1);
  });
});
