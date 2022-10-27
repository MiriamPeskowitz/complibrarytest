/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import Modal from "./Modal";

const onClose = () => {
  /* empty */
};

describe("Modal", () => {
  it("should render a Modal", () => {
    const { queryAllByText } = render(
      <Modal open={true} close={onClose}>
        A Modal
      </Modal>
    );
    expect(queryAllByText(/A Modal/)).toHaveLength(1);
  });
});
