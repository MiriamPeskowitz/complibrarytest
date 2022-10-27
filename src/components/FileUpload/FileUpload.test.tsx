/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import FileUpload from "./FileUpload";

describe("FileUpload", () => {
  it("should render a FileUpload", () => {
    const { queryAllByText } = render(<FileUpload id="id" label="a label" />);
    expect(queryAllByText(/a label/)).toHaveLength(1);
  });
});
