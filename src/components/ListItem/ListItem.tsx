import React from "react";
import { getUseStyles } from "../../shared/helpers";
import styles from "./ListItem.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-ListItem");

export interface Props {
  children: any;
  className?: string;
  hasBulletIcon?: boolean;
}

const ListItem: React.FC<Props> = props => {
  const { children, className, hasBulletIcon } = props;
  const classes = useStyles();

  return (
    <li
      className={classNames({
        [classes.listItem]: true,
        [classes.customBullet]: hasBulletIcon,
        [className]: className
      })}
    >
      {children}
    </li>
  );
};

export default ListItem;
