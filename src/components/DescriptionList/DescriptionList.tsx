import React from "react";

import { getUseStyles } from "../../shared/helpers.js";
import styles from "./DescriptionList.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-DescriptionList");

export interface Props {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
}

const DescriptionList: React.FC<Props> = (props) => {
  const { className = "", children, inline = false } = props;
  const classes = useStyles();

  return (
    <ul
      className={classNames({
        [className]: className,
        [classes.list]: inline,
        [classes.table]: !inline
      })}
    >
      {children}
    </ul>
  );
};

export default DescriptionList;
