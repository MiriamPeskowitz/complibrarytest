/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import Option from "../Option";
import Select from "./Select";

describe("Select", () => {
  it("should render a Select using children", () => {
    const { queryByRole } = render(
      <Select placeholder="Placeholder" id="county">
        <Option value="philadelphia">Philadelphia</Option>
        <Option value="berks">Berks</Option>
      </Select>
    );
    expect(queryByRole("button")).toBeVisible();
  });

  it("should render a Select with a single child", () => {
    const { queryByRole } = render(
      <Select id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );
    expect(queryByRole("button")).toBeVisible();
  });

  it("should render Select options when clicked", () => {
    render(
      <Select placeholder="Placeholder" id="county">
        <Option value="philadelphia">Philadelphia</Option>
        <Option value="berks">Berks</Option>
      </Select>
    );
    userEvent.click(screen.queryByRole("button"));
    expect(screen.queryByRole("listbox")).toBeVisible();
  });

  it("should not render Select options when not clicked", () => {
    render(
      <Select id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );
    expect(screen.queryByRole("listbox")).toBe(null);
  });

  it("should close Select options when an option has onClick and is clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <Select placeholder="Placeholder" id="county">
        <Option value="philadelphia">Philadelphia</Option>
        <Option value="berks" onClick={mockOnClick}>
          Berks
        </Option>
      </Select>
    );
    userEvent.click(screen.queryByRole("button"));
    userEvent.click(screen.queryByText("Berks"));
    expect(mockOnClick).toHaveBeenCalled();
    expect(screen.queryByRole("listbox")).toBe(null);
  });

  it("should render button with aria-disabled true when disabled", () => {
    render(
      <Select disabled id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(
      screen.getByTestId("county-button").getAttribute("aria-disabled")
    ).toBe("true");
  });

  it("should render button with aria-required true when required", () => {
    render(
      <Select disabled id="county" placeholder="Placeholder" required>
        <Option value="county">County</Option>
      </Select>
    );

    expect(
      screen.getByTestId("county-button").getAttribute("aria-required")
    ).toBe("true");
  });

  it("should render button with aria-invalid true when hasError is true", () => {
    render(
      <Select hasError id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(
      screen.getByTestId("county-button").getAttribute("aria-invalid")
    ).toBe("true");
  });

  it("should render button with aria-invalid false when hasError is false", () => {
    render(
      <Select hasError={false} id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(
      screen.getByTestId("county-button").getAttribute("aria-invalid")
    ).toBe("false");
  });

  it("should render success button variant when hasSuccess is true", () => {
    render(
      <Select hasSuccess id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(screen.getByTestId("county-button-success")).toBeDefined();
  });

  it("should not render success button variant when hasSuccess is false", () => {
    render(
      <Select hasSuccess={false} id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(screen.queryByTestId("county-button-success")).toBeNull();
    expect(screen.getByTestId("county-button")).toBeDefined();
  });

  it("disabled should override hasError", () => {
    render(
      <Select disabled hasError id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(
      screen.getByTestId("county-button").getAttribute("aria-disabled")
    ).toBe("true");
    expect(
      screen.getByTestId("county-button").getAttribute("aria-invalid")
    ).toBe("false");
  });

  it("disabled should override hasSuccess", () => {
    render(
      <Select disabled hasSuccess id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(screen.queryByTestId("county-button-success")).toBeNull();
    expect(
      screen.getByTestId("county-button").getAttribute("aria-disabled")
    ).toBe("true");
  });

  it("hasError should override hasSuccess", () => {
    render(
      <Select hasError hasSuccess id="county" placeholder="Placeholder">
        <Option value="county">County</Option>
      </Select>
    );

    expect(screen.queryByTestId("county-button-success")).toBeNull();
    expect(
      screen.getByTestId("county-button").getAttribute("aria-invalid")
    ).toBe("true");
  });
});
