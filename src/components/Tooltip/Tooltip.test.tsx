/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("should render a Tooltip", () => {
    const { queryAllByText } = render(
      <Tooltip hoverContent="Tooltip Text" className="body-one">
        <p>Learn More</p>
      </Tooltip>
    );
    expect(queryAllByText(/Learn More/)).toHaveLength(1);
  });
});
