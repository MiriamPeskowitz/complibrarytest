/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import Menu from "./Menu";

const options = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" }
];

describe("Menu", () => {
  it("should render a Menu with children", () => {
    const { queryAllByText } = render(
      <Menu name="A Menu">
        {options.map(option => (
          <div key={option.value}>{option.name}</div>
        ))}
      </Menu>
    );
    expect(queryAllByText(/A Menu/)).toHaveLength(1);
  });

  it("should render a Menu with a single child", () => {
    const { queryAllByText } = render(
      <Menu name="A Menu">
        <div key="home">Home</div>
      </Menu>
    );
    expect(queryAllByText(/A Menu/)).toHaveLength(1);
  });

  it("should render Menu options when clicked", () => {
    render(
      <Menu name="A Menu">
        {options.map(option => (
          <div key={option.value}>{option.name}</div>
        ))}
      </Menu>
    );
    userEvent.click(screen.queryByText("A Menu"));
    expect(screen.getByTestId("listbox")).toBeVisible();
  });

  it("should not render Menu options when not clicked", () => {
    render(
      <Menu name="A Menu">
        {options.map(option => (
          <div key={option.value}>{option.name}</div>
        ))}
      </Menu>
    );
    expect(screen.getByTestId("listbox")).not.toBeVisible();
  });

  it("should close Menu options when an option has onClick and is clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <Menu name="A Menu">
        <div key="home" onClick={mockOnClick}>
          Home
        </div>
      </Menu>
    );
    userEvent.click(screen.queryByText("A Menu"));
    userEvent.click(screen.queryByText("Home"));
    expect(mockOnClick).toHaveBeenCalled();
    expect(screen.getByTestId("listbox")).not.toBeVisible();
  });
});
