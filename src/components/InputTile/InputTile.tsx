import React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./InputTile.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-InputTile");

export interface Props {
  children: any;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  checked: boolean;
  autoWidth?: boolean;
  hasError?: boolean;
  role: string;
}

const InputTile: React.FC<Props> = props => {
  const {
    children,
    className = "",
    disabled = false,
    onClick = () => {
      /* empty */
    },
    checked = false,
    hasError = false,
    autoWidth = false,
    role
  } = props;
  const classes = useStyles();

  const onInputTileClick = e => {
    if (disabled) return;
    onClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
  };

  return (
    <div
      className={classNames({
        [classes.tile]: true,
        [classes.error]: hasError,
        [classes.autoWidth]: autoWidth,
        [classes.checked]: checked,
        [classes.disabled]: disabled,
        [className]: !!className
      })}
      role={role}
      tabIndex={1}
      onClick={onInputTileClick}
    >
      {children}
    </div>
  );
};

export default InputTile;
