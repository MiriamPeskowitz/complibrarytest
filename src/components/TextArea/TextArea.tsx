import * as React from "react";

import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers";
import styles from "./TextArea.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-TextArea");

export interface Props {
  id: string;
  testId?: string;
  name?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  row?: number;
  column?: number;
  helperText?: string;
  hasError?: boolean;
  hasSuccess?: boolean;
  required?: boolean;
  nativeRequired?: boolean;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  noBottomMargin?: boolean;
  inputRef?: any;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  showCharacterCount?: boolean;
}

const TextArea: React.FC<Props> = props => {
  const {
    id,
    testId = "",
    name,
    className = "",
    defaultValue,
    placeholder,
    helperText,
    hasError = false,
    hasSuccess = false,
    required = false,
    disabled = false,
    minLength,
    maxLength,
    noBottomMargin = false,
    inputRef,
    value,
    row = 5,
    column = 33,
    onChange = () => {
      /* empty */
    },
    readOnly = false,
    showCharacterCount = false
  } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.container]: true
      })}
    >
      <textarea
        id={id}
        data-testid={testId}
        name={name}
        className={classNames({
          [classes.field]: true,
          [classes.default]: !hasError && !hasSuccess && !disabled,
          [classes.disabled]: disabled,
          [classes.error]: hasError && !disabled,
          [classes.success]: hasSuccess && !hasError && !disabled,
          [classes.noBottomMargin]: noBottomMargin,
          [classes.readOnly]: readOnly,
          [className]: !!className
        })}
        placeholder={placeholder}
        rows={row}
        cols={column}
        disabled={disabled}
        required={required}
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={onChange}
        minLength={minLength}
        maxLength={!showCharacterCount ? maxLength : null}
        readOnly={readOnly}
        value={value}
      />
      {showCharacterCount && (
        <Typography
          body="small"
          noTopMargin
          className={classNames({
            [classes.helper]: true,
            [classes.characterCount]: true,
            [classes.helperError]: hasError && !disabled
          })}
        >
          {value.length > maxLength ? (
            <>
              {maxLength - value.length}/{maxLength}
            </>
          ) : (
            <>
              {value.length}/{maxLength}
            </>
          )}
        </Typography>
      )}
      {helperText && (
        <Typography body="small" noTopMargin className={classes.helper}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default TextArea;
