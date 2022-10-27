import React from "react";

import Typography from "../Typography";

import IconClose from "../../shared/icons/icon-close-circle.svg";
import IconSearch from "../../shared/icons/icon-search.svg";
import IconCheckCircle from "../../shared/icons/icon-check-circle.svg";
import IconExclamationCircle from "../../shared/icons/icon-exclamation-circle.svg";
import { getUseStyles } from "../../shared/helpers";

import styles from "./TextField.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-TextField");

export interface Props {
  id: string;
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  defaultValue?: string;
  helperText?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  onSearchCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  placeholder?: string;
  inputRef?: any;
  required?: boolean;
  type?: "text" | "date" | "email" | "password" | "number" | "search";
  value?: string;
  hasSuccess?: boolean;
  hasError?: boolean;
  leadingIcon?: React.ReactElement | false;
  trailingIcon?: React.ReactElement | false;
  size?: number;
  fullWidth?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  noBottomMargin?: boolean;
  step?: number;
  testId?: string;
  readOnly?: boolean;
}

const TextField: React.FC<Props> = props => {
  const {
    id,
    autoComplete,
    autoFocus = false,
    className = "",
    disabled,
    defaultValue,
    helperText,
    name,
    onChange,
    onBlur = () => {
      /* empty */
    },
    onSearchCancel = () => {
      /* empty */
    },
    placeholder,
    inputRef,
    required = false,
    type = "text",
    value,
    hasSuccess = false,
    hasError = false,
    leadingIcon = false,
    trailingIcon = false,
    size = 50,
    fullWidth = false,
    min,
    max,
    minLength,
    maxLength,
    noBottomMargin = false,
    step = 1,
    testId = "",
    readOnly = false
  } = props;
  const classes = useStyles();

  if (minLength> maxLength)
    // eslint-disable-next-line
    console.error("TextField: minLength is greater than maxLength.");

  return (
    <div className={classNames({ [className]: !!className })}>
      <div
        className={classNames({
          [classes.fieldContainer]: true,
          [classes.noBottomMargin]: noBottomMargin
        })}
      >
        {type === "search" && (
          <span className={classes.leadingIcon}>
            <IconSearch />
          </span>
        )}
        {leadingIcon && type !== "search" && (
          <span className={classes.leadingIcon}>{leadingIcon}</span>
        )}
        <input
          readOnly={readOnly}
          data-testid={testId}
          id={id}
          type={type}
          className={classNames({
            [classes.field]: true,
            [classes.default]: !hasError && !hasSuccess && !disabled,
            [classes.error]: hasError && !disabled,
            [classes.success]: hasSuccess && !hasError && !disabled,
            [classes.disabled]: disabled,
            [classes.regularWidth]: !fullWidth,
            [classes.fullWidth]: fullWidth,
            [classes.leadingIcon]: type === "search" || leadingIcon,
            [classes.trailingIcon]: trailingIcon,
            [classes.readOnly]: readOnly
          })}
          placeholder={placeholder ? placeholder : undefined}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete ? autoComplete : undefined}
          autoFocus={autoFocus}
          required={required}
          name={name}
          value={value}
          defaultValue={defaultValue}
          ref={inputRef}
          size={size}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          minLength={type === "text" ? minLength : undefined}
          maxLength={type === "text" ? maxLength : undefined}
          step={type === "number" ? step : undefined}
        />
        {hasSuccess && !trailingIcon && !hasError && !disabled && (
          <span
            className={classNames({
              [classes.trailingIcon]: true,
              [classes.successIcon]: true
            })}
          >
            <IconCheckCircle is="svg" />
          </span>
        )}
        {hasError && !trailingIcon && !disabled && (
          <span
            className={classNames({
              [classes.trailingIcon]: true,
              [classes.errorIcon]: true
            })}
          >
            <IconExclamationCircle />
          </span>
        )}
        {type === "search" && !hasError && !hasSuccess && (
          <span
            className={classNames({
              [classes.trailingIcon]: true,
              [classes.nonStatusIcon]: true,
              [classes.searchCancelActive]: type === "search" && !!value,
              [classes.searchCancelInactive]: type === "search" && !value
            })}
          >
            <IconClose is="svg" onClick={onSearchCancel} role="button" />
          </span>
        )}
        {trailingIcon && (
          <span
            className={classNames({
              [classes.trailingIcon]: true,
              [classes.nonStatusIcon]: true
            })}
          >
            {trailingIcon}
          </span>
        )}
      </div>
      {helperText && (
        <Typography body="small" noTopMargin className={classes.helper}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default TextField;
