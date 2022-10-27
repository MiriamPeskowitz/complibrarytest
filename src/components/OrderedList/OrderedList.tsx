import React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./OrderedList.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-OrderedList");

export interface Props {
  listClassName?: string;
  children: React.ReactNode[];
  numberIcons?: boolean;
  inline?: boolean;
  noTopMargin?: boolean;
  noBottomMargin?: boolean;
}

const OrderedList: React.FC<Props> = props => {
  const {
    listClassName,
    children,
    numberIcons = false,
    inline = false,
    noTopMargin = false,
    noBottomMargin = false
  } = props;
  const classes = useStyles();

  return (
    <ol
      className={classNames({
        [classes.orderedList]: true,
        [classes.numIcons]: numberIcons,
        [classes.inlineList]: inline,
        [classes.noTopMargin]: noTopMargin,
        [classes.noBottomMargin]: noBottomMargin,
        [listClassName]: listClassName
      })}
    >
      {children}
    </ol>
  );
};

export default OrderedList;
