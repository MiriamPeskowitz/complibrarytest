/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Link from "./Link";

describe("Link", () => {
  it("should render a Link", () => {
    const { queryAllByText } = render(
      <Link url="https://www.bdtrust.org">A Link</Link>
    );
    expect(queryAllByText(/A Link/)).toHaveLength(1);
  });
});
