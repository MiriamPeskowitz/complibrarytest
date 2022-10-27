/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import * as React from "react";

import TextArea from "./TextArea";

describe("TextArea", () => {
  it("should render a TextArea", () => {
    const { queryAllByTestId } = render(
      <TextArea id="textArea" testId="foo">
        bar
      </TextArea>
    );
    expect(queryAllByTestId(/foo/)).toHaveLength(1);
  });
});
