/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import IconPlus from "../../shared/icons/icon-plus.svg";

import ButtonIcon from "./ButtonIcon";

describe("ButtonIcon", () => {
  it("should render an aria label", () => {
    const result = render(
      <ButtonIcon icon={<IconPlus is="svg" />} label="test" />
    );
    expect(result.getByLabelText("test")).toBeInTheDocument();
  });
});
