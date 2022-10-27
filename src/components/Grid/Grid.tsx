import React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./Grid.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Grid");

export type Props = {
  children: any;
  alignItems?:
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
  className?: string;
  direction?: "row" | "column";
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  spacing?: 0 | 1 | 2 | 3 | 4;
  wrap?: "wrap" | "no-wrap";
};

const NUMBER_TO_STRING = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four"
};

const Grid: React.FC<Props> = props => {
  const {
    children,
    alignItems,
    className,
    direction = "row",
    justifyContent,
    spacing = 1,
    wrap = "wrap"
  } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.flex]: true,
        [classes[`${NUMBER_TO_STRING[spacing]}-${direction}`]]: !!spacing,
        [classes[direction]]: true,
        [classes[wrap]]: true,
        [classes[alignItems]]: !!alignItems,
        [classes[justifyContent]]: !!justifyContent,
        [className]: !!className
      })}
    >
      {children}
    </div>
  );
};

export default Grid;
