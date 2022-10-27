import * as React from "react";

import Typography from "../Typography";

import {
  getUseStyles,
  getUseUtilityClasses
} from "../../shared/helpers";
import { srOnly } from "../../shared/utilities";

import styles from "./Toggle.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Toggle");
const useUtilityStyles = getUseUtilityClasses({ srOnly }, "bdt-global");

export interface Props {
  testId?: string;
  value?: string;
  className?: string;
  helperText?: string;
  id: string;
  inputRef?: any;
  hasError?: boolean;
  hasSuccess?: boolean;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Toggle: React.FC<Props> = props => {
  const {
    testId = "",
    value,
    className = "",
    id,
    hasError = false,
    hasSuccess = false,
    onChange = () => {
      /* empty */
    },
    onClick = () => {
      /* empty */
    },
    helperText,
    checked = false,
    required = false,
    disabled = false,
    inputRef
  } = props;
  const classes = useStyles();
  useUtilityStyles();

  const onToggleClick = e => {
    if (disabled) return;
    onClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
  };

  return (
    <div
      className={classNames({ [className]: !!className })}
      data-testid={testId}
    >
      <div className={classes.thumbTrackContainer}>
        <input
          className="bdt-global-srOnly"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          value={value}
          ref={inputRef}
          required={required}
        />
        <button
          role="switch"
          id={id}
          onClick={onToggleClick}
          className={classNames({
            [classes.on]: checked,
            [classes.off]: !checked,
            [classes.default]: !hasError && !hasSuccess,
            [classes.success]: !hasError && hasSuccess,
            [classes.error]: hasError,
            [classes.disabled]: disabled,
            [classes.enabled]: !disabled,
            [classes.switch]: true
          })}
        >
          <div className={classes.thumb} aria-hidden="true" />
        </button>
      </div>
      {helperText && (
        <Typography body="small" className={classes.helper}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Toggle;
