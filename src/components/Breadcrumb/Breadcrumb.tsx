import * as React from "react";

import Link from "../Link";
import ListItem from "../ListItem";

import { getUseStyles } from "../../shared/helpers";
import styles from "./Breadcrumb.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Breadcrumb");

export interface Props {
  children: any;
  className?: string;
  separator?: any;
  last?: boolean;
  url: string;
  isTruncated?: boolean;
}

const Breadcrumb: React.FC<Props> = props => {
  const {
    children,
    className,
    separator = ">",
    last = false,
    url,
    isTruncated = false
  } = props;

  const classes = useStyles();

  return (
    <ListItem
      className={classNames({
        [classes.breadcrumb]: true,
        [classes.last]: last,
        [className]: className
      })}
    >
      <Link isTruncated={isTruncated} url={url} isUnderlined={false}>
        {children}
      </Link>
      {!last && (
        <span className={classes.separator} aria-hidden="true">
          {separator}
        </span>
      )}
    </ListItem>
  );
};

export default Breadcrumb;
