/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Breadcrumb from "../Breadcrumb";
import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  it("should render a Breadcrumbs", () => {
    const { queryAllByText } = render(
      <Breadcrumbs>
        <Breadcrumb url="https://www.google.com">Home</Breadcrumb>
        <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
        <Breadcrumb url="https://www.google.com">Settings</Breadcrumb>
        <Breadcrumb url="https://www.google.com">Reset Password</Breadcrumb>
      </Breadcrumbs>
    );
    expect(queryAllByText(/Home/)).toHaveLength(1);
    expect(queryAllByText(/Account/)).toHaveLength(1);
    expect(queryAllByText(/Settings/)).toHaveLength(1);
  });
});
