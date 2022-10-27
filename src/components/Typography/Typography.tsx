import * as React from "react";

import { getOverrideNames, getUseStyles } from "../../shared/helpers.js";

import styles from "./Typography.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Typography");

interface ClassOverrides {
  normal?: string;
  light?: string;
  white?: string;
}

/* eslint-disable no-shadow */
type variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "error"
  | "success";

export interface Props {
  children: any;
  className?: string;
  classOverrides?: ClassOverrides;
  display?: "normal" | "light" | "white";
  id?: string;
  noBottomMargin?: boolean;
  noTopMargin?: boolean;
  body?: "default" | "small" | "smallCaps";
  variant?: variant;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Typography: React.FC<Props> = props => {
  const {
    id,
    children,
    className = "",
    classOverrides = {},
    display = "normal",
    noBottomMargin = false,
    noTopMargin = false,
    body = "default",
    variant = "p",
    component
  } = props;
  const classes = useStyles();
  const overrideNames = getOverrideNames(classOverrides);

  const variantToComponentMap: { [key in variant]: Props["component"] } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    error: "p",
    success: "p"
  };

  const Component = component || variantToComponentMap[variant];

  return (
    <Component
      id={id}
      className={classNames({
        [classes[display]]: !classOverrides?.[display],
        [classes[variant]]: true,
        [classes.textSelection]: true,
        [classes[body]]: body !== "default",
        [classes.noBottomMargin]: noBottomMargin,
        [classes.noTopMargin]: noTopMargin,
        [className]: !!className,
        [overrideNames]: !!overrideNames
      })}
    >
      {children}
    </Component>
  );
};

export default Typography;
