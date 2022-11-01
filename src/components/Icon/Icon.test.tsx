/**
 * @jest-environment jsdom
 */

// TODO: This test is a work in progress because SVGs are not rendering correctly within the test DOM. We may need additional loaders to make this work properly.

import { render, screen } from "@testing-library/react";
import * as React from "react";

import Icon from "./Icon";
import IconNames from "./IconNames";

describe("Icon", () => {
  it("should render an Icon", () => {
    render(
      <>
        <Icon size="medium" iconName={IconNames.print} />
      </>
    );
    expect(screen.getByTestId("print")).toBeDefined();
  });
});
