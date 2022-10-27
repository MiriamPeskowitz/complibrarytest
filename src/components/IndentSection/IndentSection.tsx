import * as React from "react";

import { getUseStyles } from "../../shared/helpers";
import styles from "./IndentSection.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-IndentSection");

export interface Props {
  children: any;
  className?: string;
}

const IndentSection: React.FC<Props> = props => {
  const { children, className } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [className]: className
      })}
    >
      {children}
    </div>
  );
};

export default IndentSection;
