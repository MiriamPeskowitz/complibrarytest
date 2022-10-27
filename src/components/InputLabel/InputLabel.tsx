import React from "react";

import {
  getUseStyles,
  getUseUtilityClasses
} from "../../shared/helpers";
import { srOnly } from "../../shared/utilities";

import styles from "./InputLabel.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-InputLabel");
const useUtilityStyles = getUseUtilityClasses({ srOnly }, "bdt-global");

export interface Props {
  label: string;
  className?: string;
  hideLabel?: boolean;
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
  noBottomMargin?: boolean;
  nativeRequired?: boolean;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const InputLabel: React.FC<Props> = props => {
  const {
    className = "",
    hideLabel = false,
    htmlFor,
    label,
    required = false,
    disabled = false,
    noBottomMargin = false,
    nativeRequired = false,
    clickable = false,
    onClick = () => {
      /* empty */
    }
  } = props;
  const classes = useStyles();
  useUtilityStyles();

  const onLabelClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <label
      aria-label={hideLabel ? label : ""}
      aria-disabled={disabled}
      className={classNames({
        [classes.label]: true,
        [classes.clickable]: clickable && !disabled,
        [classes.disabled]: disabled,
        [classes.noBottomMargin]: noBottomMargin,
        "bdt-global-srOnly": hideLabel,
        [className]: !!className
      })}
      htmlFor={htmlFor}
      onClick={onLabelClick}
    >
      {label}
      {(required || nativeRequired) && <span className={classes.required} />}
    </label>
  );
};

export default InputLabel;
