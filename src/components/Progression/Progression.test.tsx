/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Progression from "./Progression";

describe("Progression", () => {
  it("should render a Progression", () => {
    const { queryAllByText } = render(
      <Progression
        steps={[
          "Account information",
          "Shipping details",
          "Payment details",
          "Complete registration",
          "Registration complete",
          "Finished"
        ]}
      />
    );
    expect(queryAllByText(/A Progression/)).toHaveLength(0);
  });
});
