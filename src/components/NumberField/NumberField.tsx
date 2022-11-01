import * as React from "react";

import ButtonIcon from "../ButtonIcon";
import Grid from "../Grid";

import IconChevronDown from "../../shared/icons/icon-chevron-down.svg";
import IconChevronUp from "../../shared/icons/icon-chevron-up.svg";

import { getUseStyles } from "../../shared/helpers";
import styles from "./NumberField.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-NumberField");

export interface Props {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, val: number) => void;
  value: number;
  testId?: string;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  required?: boolean;
  hasSuccess?: boolean;
  hasError?: boolean;
  min?: number;
  max?: number;
  noBottomMargin?: boolean;
  step?: number;
  readOnly?: boolean;
}

const getDecrementedValue = (
  myValue: number,
  myStep: number,
  myMin: number
): number => (myValue - myStep < myMin ? myValue : myValue - myStep);

const getIncrementedValue = (
  myValue: number,
  myStep: number,
  myMax: number
): number => (myValue + myStep > myMax ? myValue : myValue + myStep);

const NumberField: React.FC<Props> = props => {
  const {
    id,
    onChange,
    value,
    testId = "",
    className = "",
    tabIndex = undefined,
    disabled = false,
    name = "",
    onBlur = () => {
      /* empty */
    },
    required = false,
    hasSuccess = false,
    hasError = false,
    min = undefined,
    max = undefined,
    noBottomMargin = false,
    step = 1,
    readOnly = false
  } = props;
  const classes = useStyles();

  const onHandleChange = e => {
    const val = e.target.value;
    const newVal = val !== "" ? parseInt(val as string, 10) : min || 0;
    onChange(e as React.ChangeEvent<HTMLInputElement>, newVal);
  };

  const onClickDecrement = e => {
    const val = getDecrementedValue(value, step, min);
    onChange(e as React.ChangeEvent<HTMLInputElement>, val);
  };

  const onClickIncrement = e => {
    const val = getIncrementedValue(value, step, max);
    onChange(e as React.ChangeEvent<HTMLInputElement>, val);
  };

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [classes.noBottomMargin]: noBottomMargin,
        [className]: !!className
      })}
    >
      <input
        data-testid={testId}
        id={id}
        type="number"
        className={classNames({
          [classes.field]: true,
          [classes.default]: !hasError && !hasSuccess && !disabled,
          [classes.error]: hasError && !disabled,
          [classes.success]: hasSuccess && !hasError && !disabled,
          [classes.disabled]: disabled,
          [classes.readOnly]: readOnly
        })}
        tabIndex={tabIndex}
        aria-disabled={disabled}
        disabled={disabled}
        onChange={onHandleChange}
        onBlur={onBlur}
        aria-required={required}
        required={required}
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        readOnly={readOnly}
      />
      {!readOnly && (
        <Grid
          direction="column"
          spacing={0}
          className={classes.spinButtonContainer}
        >
          <ButtonIcon
            testId={`${testId}-increment-spin-button`}
            label="increment"
            variant="ghost"
            onClick={onClickIncrement}
            icon={<IconChevronUp is="svg" />}
            className={classes.spinButton}
            classOverrides={{ size: classes.spinButtonSize }}
          />
          <ButtonIcon
            testId={`${testId}-decrement-spin-button`}
            label="decrement"
            variant="ghost"
            onClick={onClickDecrement}
            icon={<IconChevronDown is="svg" />}
            className={classes.spinButton}
            classOverrides={{ size: classes.spinButtonSize }}
          />
        </Grid>
      )}
    </div>
  );
};

export default NumberField;
export { getDecrementedValue, getIncrementedValue };
