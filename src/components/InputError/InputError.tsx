import * as React from "react";

import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers";
import styles from "./InputError.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-InputError");

export interface Props {
  children: any;
  className?: string;
  size?: "default" | "medium";
}

const SIZE_TO_BODY = {
  default: "small",
  medium: "default"
};

const InputError: React.FC<Props> = props => {
  const { children, className, size = "default" } = props;
  const classes = useStyles();

  return (
    <Typography
      // @ts-ignore Using strings as enums for simplicity
      body={SIZE_TO_BODY[size]}
      className={classNames({
        [classes.errorMessage]: true,
        [className]: !!className
      })}
      classOverrides={{ normal: classes.errorColor }}
      noTopMargin
    >
      {children}
    </Typography>
  );
};

export default InputError;
