import React from "react";

import IconLoading from "../../shared/icons/icon-loading.svg";

import { getOverrideNames, getUseStyles } from "../../shared/helpers";

import styles from "./Button.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Button");

interface ClassOverrides {
  shape?: string;
  size?: string;
  variant?: string;
  status?: string;
}

export interface Props {
  type?: "button" | "submit" | "reset";
  children: any;
  id?: string;
  testId?: string;
  variant?: "solid" | "outlined" | "text" | "inverted";
  status?: "danger" | "success" | "warning" | "informational";
  size?: "default" | "compact";
  ariaLabel?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  className?: string;
  classOverrides?: ClassOverrides;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: React.ReactElement | false;
  trailingIcon?: React.ReactElement | false;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onBlur?: (e: React.FocusEvent<HTMLButtonElement>) => void;
  inputRef?: any;
  fullWidth?: boolean;
}

const Button: React.FC<Props> = props => {
  const {
    ariaLabel,
    ariaControls,
    ariaExpanded,
    id,
    testId = "",
    children,
    className,
    classOverrides = {},
    disabled,
    loading = false,
    leadingIcon = false,
    trailingIcon = false,
    onClick,
    onBlur,
    inputRef,
    type = "button",
    variant = "solid",
    status = "informational",
    size = "default",
    fullWidth = false
  } = props;
  const classes = useStyles();
  const overrideNames = getOverrideNames(classOverrides);

  return (
    <button
      data-testid={testId}
      id={id}
      className={classNames({
        [classes.shape]: !classOverrides?.shape,
        [classes[size]]: !classOverrides?.size,
        [classes[variant]]: !classOverrides?.variant,
        [classes[status]]: !classOverrides?.status,
        [classes.defaultIcons]: size === "default",
        [classes.compactIcons]: size === "compact",
        [classes.button]: true,
        [classes.fullWidth]: fullWidth,
        [className]: !!className,
        [overrideNames]: !!overrideNames
      })}
      disabled={loading === true ? true : disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      onClick={onClick}
      onBlur={onBlur}
      ref={inputRef}
      type={type}
    >
      <span
        className={classNames({
          [classes.loading]: !!loading,
          [classes.icon]: leadingIcon || trailingIcon
        })}
      >
        {leadingIcon && (
          <span className={classes.leadingIcon}>{leadingIcon}</span>
        )}
        {children}
        {trailingIcon && (
          <span className={classes.trailingIcon}>{trailingIcon}</span>
        )}
      </span>
      {loading && (
        <span className={classes.loadingIcon}>
          <IconLoading is="svg" />
        </span>
      )}
    </button>
  );
};

export default Button;
