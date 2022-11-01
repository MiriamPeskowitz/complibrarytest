/**
 * @jest-environment jsdom
 */

import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved
} from "@testing-library/react";
import * as React from "react";

import Banner from "./Banner";

describe("Banner", () => {
  it("should render a (default) Banner", () => {
    render(<Banner>Error! This is an error message.</Banner>);

    expect(
      screen.queryByText("Error! This is an error message.")
    ).toBeInTheDocument();
  });

  it("should render a Banner with dismiss button when using isDismissable=true", () => {
    render(<Banner isDismissable>Error! This is an error message.</Banner>);

    expect(
      screen.getByLabelText("Dismiss", { selector: "button" })
    ).toBeDefined();
  });

  it("should dismiss a Banner when clicking dismiss button", () => {
    render(<Banner isDismissable>Error! This is an error message.</Banner>);

    const myBanner = screen.queryByText("Error! This is an error message.");
    const dismissButton = screen.getByLabelText("Dismiss", {
      selector: "button"
    });

    fireEvent.click(dismissButton, {
      target: { value: "JavaScript" }
    });

    expect(myBanner).not.toBeInTheDocument();
  });

  it("should render a Banner with an action component when using action prop", () => {
    const Action = () => <div>Action</div>;
    render(
      <Banner action={<Action />}>Error! This is an error message.</Banner>
    );

    expect(screen.getByTestId("action")).toBeDefined();
  });

  it("should render a Banner that will auto dismiss when using autoDismiss prop", async () => {
    render(<Banner autoDismiss={10}>Error! This is an error message.</Banner>);

    // Oddly by design, this implicitly asserts that the element was removed
    await waitForElementToBeRemoved(() =>
      screen.queryByText("Error! This is an error message.")
    );
  });

  it("should render a Banner with the appropriate z-index", () => {
    render(<Banner zIndex={10}>Error! This is an error message.</Banner>);

    const style = window.getComputedStyle(
      screen.getByTestId("banner-container")
    );

    expect(style.zIndex).toBe("10");
  });
});
