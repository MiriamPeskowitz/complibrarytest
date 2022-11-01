import * as React from "react";
import Button from "../Button";
import { getUseStyles } from "../../shared/helpers";
import styles from "./Tab.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Tab");

export interface Props {
  children: any;
  className?: string;
  size?: "default" | "compact";
  fullWidth?: boolean;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  leadingIcon?: React.ReactElement | false;
}

const Tab: React.FC<Props> = props => {
  const classes = useStyles();
  const {
    children,
    className,
    size = "default",
    fullWidth = false,
    isActive = false,
    onClick,
    leadingIcon = false
  } = props;

  return (
    <Button
      className={classNames({
        [className]: className,
        [classes.tab]: true,
        [classes.fullWidth]: fullWidth,
        [classes.active]: isActive
      })}
      classOverrides={{
        size: classNames({ [classes.compact]: size === "compact" }),
        shape: classNames({ [classes.shape]: true })
      }}
      size={size}
      variant="text"
      onClick={onClick}
      leadingIcon={leadingIcon}
    >
      {children}
    </Button>
  );
};

export default Tab;
