/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import PasswordField from "./PasswordField";

describe("PasswordField", () => {
  it("should render a PasswordField", () => {
    const { getByTestId } = render(
      <PasswordField id="password-field" testId="password-field" />
    );
    expect(getByTestId("password-field")).toBeDefined();
  });
});
