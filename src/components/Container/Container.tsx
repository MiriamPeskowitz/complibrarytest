import * as React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./Container.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Container");

export interface Props {
  children: any;
  className?: string;
  id?: string;
  position?: "fixed-top" | "fixed-bottom" | "relative";
  isHorizontallyCentered?: boolean;
}

const Container: React.FC<Props> = props => {
  const {
    children,
    className = "",
    id = "",
    position = "relative",
    isHorizontallyCentered = false
  } = props;
  const classes = useStyles();

  return (
    <div
      id={id}
      className={classNames({
        [classes[position]]: true,
        [classes.center]: isHorizontallyCentered,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default Container;
