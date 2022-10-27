import * as React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./UnorderedList.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-UnorderedList");

export interface Props {
  className?: string;
  children: React.ReactNode[];
  variant?: "unstyled" | "icon";
  inline?: boolean;
  inlineWithSeparators?: boolean;
  noTopMargin?: boolean;
  noBottomMargin?: boolean;
  noLeftMargin?: boolean;
  spacing?: 0 | 1 | 2 | 3 | 4;
}

const NUMBER_TO_STRING = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four"
};

const UnorderedList: React.FC<Props> = props => {
  const {
    className = "",
    children,
    variant,
    inline = false,
    inlineWithSeparators = false,
    noTopMargin = false,
    noBottomMargin = false,
    noLeftMargin = false,
    spacing = 0
  } = props;
  const classes = useStyles();
  const direction = inline || inlineWithSeparators ? "inline" : "default";

  return (
    <ul
      className={classNames({
        [classes.unorderedList]: true,
        [classes[variant]]: !!variant,
        [classes.inlineWithSeparators]: inlineWithSeparators,
        [classes.inline]: inline && !inlineWithSeparators,
        [classes.noTopMargin]: noTopMargin,
        [classes.noBottomMargin]: noBottomMargin,
        [classes.noLeftMargin]: noLeftMargin,
        [classes[`${NUMBER_TO_STRING[spacing]}-${direction}`]]: !!spacing,
        [className]: !!className
      })}
    >
      {children}
    </ul>
  );
};

export default UnorderedList;
