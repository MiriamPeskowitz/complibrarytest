/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Tab from "../Tab";

import Tabs from "./Tabs";

describe("Tabs", () => {
  it("should render a Tabs", () => {
    const { queryAllByText } = render(
      <Tabs>
        <Tab>Tab One</Tab>
        <Tab>Tab Two</Tab>
        <Tab>Tab Three</Tab>
      </Tabs>
    );
    expect(queryAllByText(/Tab One/)).toHaveLength(1);
  });
});
