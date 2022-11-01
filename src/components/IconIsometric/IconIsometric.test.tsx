/**
 * @jest-environment jsdom
 */

// TODO: This test is a work in progress because SVGs are not rendering correctly within the test DOM. We may need additional loaders to make this work properly.

import { render, screen } from "@testing-library/react";
import * as React from "react";

import IconIsometric from "./IconIsometric";
import IconIsometricNames from "./IconIsometricNames";

describe("IconIsometric", () => {
  it("should render a IconIsometric", () => {
    render(<IconIsometric iconName={IconIsometricNames["data-tech"]} />);
    expect(screen.getByTestId("data-tech")).toBeDefined();
  });
});
