import * as React from "react";

import Typography from "../Typography";

import IconCheckSquare from "../../shared/icons/icon-check-square.svg";
import {
  getUseStyles,
  getUseUtilityClasses
} from "../../shared/helpers";
import { srOnly } from "../../shared/utilities";

import { styles, check } from "./Checkbox.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Checkbox");
const useUtilityStyles = getUseUtilityClasses({ srOnly, check }, "bdt-global");

export interface Props {
  value?: string;
  className?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  hasError?: boolean;
  checked?: boolean;
  helperText?: string;
  required?: boolean;
  inputRef?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  testId?: string;
}

const Checkbox: React.FC<Props> = props => {
  const {
    className = "",
    name,
    value,
    id,
    disabled = false,
    checked = false,
    hasError = false,
    helperText,
    required = false,
    inputRef,
    onChange = () => {
      /* empty */
    },
    onClick = () => {
      /* empty */
    },
    testId = ""
  } = props;
  const classes = useStyles();
  useUtilityStyles();

  const onCheckboxClick = e => {
    if (disabled) return;
    onClick(e as React.MouseEvent<HTMLDivElement, MouseEvent>);
  };

  return (
    <div
      className={classNames({
        [classes.checked]: checked,
        [classes.error]: hasError,
        [classes.disabled]: disabled,
        [className]: !!className
      })}
    >
      <div className={classes.fieldContainer}>
        <input
          data-testid={testId}
          type="checkbox"
          className="bdt-global-srOnly"
          name={name}
          value={value}
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          required={required}
          ref={inputRef}
        />
        <div
          role="checkbox"
          className={classNames({
            "bdt-global-check": !checked && !disabled && !hasError,
            [classes.checkbox]: true
          })}
          onClick={onCheckboxClick}
          tabIndex={1}
        />
        {checked && (
          <div
            role="checkbox"
            className={classes.checkmarkIcon}
            onClick={onCheckboxClick}
          >
            <IconCheckSquare is="svg" />
          </div>
        )}
      </div>
      {helperText && (
        <Typography body="small" className={classes.helper}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Checkbox;
