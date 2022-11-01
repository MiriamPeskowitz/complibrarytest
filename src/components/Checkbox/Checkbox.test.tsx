/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("should render a normal unchecked Checkbox", () => {
    const { getAllByRole } = render(
      <Checkbox name="option_one" value="one" id="option_one" />
    );
    expect(getAllByRole("checkbox")).toHaveLength(2);
  });

  it("should render a normal checked Checkbox", () => {
    const { getAllByRole } = render(
      <Checkbox name="option_one" value="one" id="option_one" checked />
    );
    expect(getAllByRole("checkbox")).toHaveLength(3);
  });
});
