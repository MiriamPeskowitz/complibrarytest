import * as React from "react";
import { getUseStyles } from "../../shared/helpers";
import styles from "./Divider.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Divider");

export interface Props {
  className?: string;
  noTopMargin?: string;
  noBottomMargin?: string;
}

const Divider: React.FC<Props> = props => {
  const { className = "", noTopMargin = false, noBottomMargin = false } = props;
  const classes = useStyles();

  return (
    <div
      role="separator"
      className={classNames({
        [className]: className,
        [classes.divider]: true,
        [classes.noBottomMargin]: noBottomMargin,
        [classes.noTopMargin]: noTopMargin
      })}
    />
  );
};

export default Divider;
