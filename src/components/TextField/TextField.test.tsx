/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import * as React from "react";

import InputLabel from "../InputLabel";

import TextField from "./TextField";

describe("TextField", () => {
  it('should have numerical attrs when type === "number"', () => {
    const onChange = jest.fn();
    render(
      <>
        <InputLabel label="TextField Number Type Label" htmlFor="text-field" />
        <TextField
          testId="numeric-text-field"
          id="text-field"
          value="foo"
          onChange={onChange}
          type="number"
          min={0}
          max={10}
          step={0.1}
        />
      </>
    );

    expect(
      screen.getByLabelText("TextField Number Type Label")
    ).toHaveAttribute("min", "0");
    expect(screen.getByLabelText("TextField Number Type Label")).toHaveProperty(
      "max",
      "10"
    );
    expect(screen.getByLabelText("TextField Number Type Label")).toHaveProperty(
      "step",
      "0.1"
    );
  });

  it('should not have numerical attrs when type !== "number"', () => {
    const onChange = jest.fn();
    render(
      <>
        <InputLabel label="TextField Text Type Label" htmlFor="text-field" />
        <TextField
          testId="numeric-text-field"
          id="text-field"
          value="foo"
          onChange={onChange}
          min={0}
          max={10}
          step={0.1}
        />
      </>
    );

    expect(
      screen.getByLabelText("TextField Text Type Label")
    ).not.toHaveAttribute("min", "0");
    expect(
      screen.getByLabelText("TextField Text Type Label")
    ).not.toHaveProperty("max", "10");
    expect(
      screen.getByLabelText("TextField Text Type Label")
    ).not.toHaveProperty("step", "0.1");
  });
});
