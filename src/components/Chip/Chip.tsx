import * as React from "react";

import { getUseStyles } from "../../shared/helpers";
import styles from "./Chip.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Chip");

export interface Props {
  children: any;
  className?: string;
  small?: boolean;
  variant?: "default" | "success" | "error" | "warning" | "dark" | "light";
}

const Chip: React.FC<Props> = props => {
  const { children, className, small = false, variant = "default" } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.chip]: true,
        [classes.small]: small,
        [classes[variant]]: true,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default Chip;
