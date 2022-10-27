/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Notification from "./Notification";

const onClick = () => false;

describe("Notification", () => {
  it("should render a Notification", () => {
    const { queryAllByText } = render(
      <Notification variant="error" actionName="Action" onActionClick={onClick}>
        A Notification
      </Notification>
    );
    expect(queryAllByText(/A Notification/)).toHaveLength(1);
  });
});
