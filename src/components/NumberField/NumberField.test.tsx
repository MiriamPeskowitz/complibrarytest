/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";

import NumberField, {
  getDecrementedValue,
  getIncrementedValue
} from "./NumberField";

describe("NumberField", () => {
  it("should render a NumberField", () => {
    render(
      <NumberField
        testId={"test"}
        id="test"
        value={1}
        onChange={() => {
          /* empty */
        }}
      />
    );
    expect(screen.queryByTestId("test")).toBeDefined();
    expect(screen.queryByDisplayValue(1)).not.toBeNull();
    expect(screen.queryByDisplayValue(0)).toBeNull();
  });

  it("should call onChange when decrement spin button is clicked", () => {
    const mockOnChange = jest.fn();

    render(
      <NumberField
        testId={"test"}
        id="test"
        value={0}
        onChange={mockOnChange}
      />
    );
    userEvent.click(screen.queryByTestId("test-decrement-spin-button"));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should call onChange when increment spin button is clicked", () => {
    const mockOnChange = jest.fn();

    render(
      <NumberField
        testId={"test"}
        id="test"
        value={0}
        onChange={mockOnChange}
      />
    );
    userEvent.click(screen.queryByTestId("test-increment-spin-button"));
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("should call onBlur when onBlur function is supplied and field is blurred", () => {
    const mockOnBlur = jest.fn();

    render(
      <>
        <span>click me to blur field</span>
        <NumberField
          testId={"test"}
          id="test"
          value={0}
          onBlur={mockOnBlur}
          onChange={() => {
            /* empty */
          }}
        />
      </>
    );
    userEvent.click(screen.queryByDisplayValue(0));
    userEvent.click(screen.queryByText("click me to blur field"));
    expect(mockOnBlur).toHaveBeenCalled();
  });
});

describe("getDecrementedValue", () => {
  it("should properly decrement value when there is no minimum", () => {
    const value = 1;
    const step = 1;
    const min = undefined;
    const val = getDecrementedValue(
      value as number,
      step as number,
      min as number
    );

    expect(val).toEqual(0);
  });

  it("should properly decrement value when there is a minimum", () => {
    const value = 1;
    const step = 1;
    const min = 0;
    const val = getDecrementedValue(value, step, min);

    expect(val).toEqual(0);
  });

  it("should return original value when there is a minimum and the updated value would be smaller", () => {
    const value = 1;
    const step = 1;
    const min = 1;
    const val = getDecrementedValue(value, step, min);

    expect(val).toEqual(1);
  });
});

describe("getIncrementedValue", () => {
  it("should properly increment value when there is no maximum", () => {
    const value = 1;
    const step = 1;
    const max = undefined;
    const val = getIncrementedValue(
      value as number,
      step as number,
      max as number
    );

    expect(val).toEqual(2);
  });

  it("should properly increment value when there is a maximum", () => {
    const value = 1;
    const step = 1;
    const max = 2;
    const val = getIncrementedValue(value, step, max);

    expect(val).toEqual(2);
  });

  it("should return original value when there is a maximum and the updated value would be larger", () => {
    const value = 1;
    const step = 1;
    const max = 1;
    const val = getIncrementedValue(value, step, max);

    expect(val).toEqual(1);
  });
});
