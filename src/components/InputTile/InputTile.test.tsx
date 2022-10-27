/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Checkbox from "../Checkbox";

import InputTile from "./InputTile";

describe("InputTile", () => {
  it("should render a InputTile", () => {
    const result = render(
      <InputTile role="banner" checked>
        <Checkbox value="one" id="option_one" />
      </InputTile>
    );
    expect(result.getByRole("banner")).toBeInTheDocument();
  });
});
