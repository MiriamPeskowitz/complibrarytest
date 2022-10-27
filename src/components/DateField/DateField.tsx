import * as React from "react";

import { TextFieldProps } from "../TextField";
import MaskedTextField from "../MaskedTextField";

import Calendar from "../../shared/icons/icon-calendar.svg";

import classNames from "classnames";

export interface Props {
  className?: string;
  noBottomMargin?: boolean;
}

const DateField: React.FC<Props & TextFieldProps> = props => {
  const {
    id,
    className,
    defaultValue,
    name,
    onChange = () => {
      /* empty */
    },
    onBlur = () => {
      /* empty */
    },
    autoFocus,
    disabled,
    value,
    required,
    helperText,
    inputRef,
    noBottomMargin,
    hasError = false,
    readOnly = false
  } = props;

  return (
    <MaskedTextField
      className={classNames({
        [className]: className
      })}
      variant="date"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      required={required}
      id={id}
      disabled={disabled}
      inputRef={inputRef}
      helperText={helperText}
      autoFocus={autoFocus}
      noBottomMargin={noBottomMargin}
      placeholder="MM/DD/YYYY"
      leadingIcon={<Calendar is="svg" />}
      hasError={hasError}
      readOnly={readOnly}
    />
  );
};

export default DateField;
