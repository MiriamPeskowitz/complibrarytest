/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

// We use the local commonjs build file here to prevent errors from NumberFormat
import MaskedTextField from "./build/index";

describe("MaskedTextField", () => {
  it("should render a MaskedTextField", () => {
    const { queryAllByText } = render(
      <MaskedTextField id="bar" helperText="foo" />
    );
    expect(queryAllByText(/foo/)).toHaveLength(1);
  });
});
