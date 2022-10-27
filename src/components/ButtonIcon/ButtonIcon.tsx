import React from "react";

import Button from "../Button";

import { getUseStyles } from "../../shared/helpers";

import styles from "./ButtonIcon.jss.js";

import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-ButtonIcon");

interface ClassOverrides {
  shape?: string;
  size?: string;
  variant?: string;
}

export interface Props {
  label: string;
  testId?: string;
  icon: JSX.Element;
  variant?: "solid" | "outlined" | "text" | "ghost";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  classOverrides?: ClassOverrides;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  shape?: "default" | "circle" | "square";
  size?: "tiny" | "small" | "medium" | "large";
  ariaControls?: string;
  ariaExpanded?: boolean;
}

const ButtonIcon: React.FC<Props> = props => {
  const {
    variant = "solid",
    testId = "",
    className = "",
    classOverrides = {},
    disabled,
    loading,
    icon,
    onClick = () => {
      /* empty */
    },
    label = "",
    shape = "default",
    size = "small",
    ariaControls,
    ariaExpanded
  } = props;
  const classes = useStyles();

  return (
    <Button
      testId={testId}
      variant={variant === "ghost" ? undefined : variant}
      className={classNames({
        [classes.buttonIcon]: true,
        [className]: className
      })}
      classOverrides={{
        shape: classNames({
          [classes[shape]]: !classOverrides?.shape,
          [classOverrides.shape]: !!classOverrides?.shape
        }),
        size: classNames({
          [classes[size]]: !classOverrides?.size,
          [classOverrides.size]: !!classOverrides?.size
        }),
        variant: classNames({
          [classes[variant]]: !classOverrides?.variant,
          [classOverrides.variant]: !!classOverrides?.variant
        })
      }}
      disabled={disabled}
      ariaLabel={label}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      onClick={onClick}
      loading={loading}
    >
      {icon}
    </Button>
  );
};

export default ButtonIcon;
