/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Radio from "./Radio";

describe("Radio", () => {
  it("should render a Radio", () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <Radio
        name="group"
        value="one"
        id="option_one"
        checked={true}
        onClick={onClick}
      />
    );
    expect(getAllByRole("radio")).toHaveLength(2);
  });
});
