import React from "react";
import IconChevronLeft from "../../shared/icons/icon-chevron-left.svg";
import IconChevronRight from "../../shared/icons/icon-chevron-right.svg";
import IconDollar from "../../shared/icons/icon-dollar.svg";
import IconExclamationCircle from "../../shared/icons/icon-exclamation-circle.svg";
import IconInformationCircle from "../../shared/icons/icon-information-circle.svg";
import IconPlusCircle from "../../shared/icons/icon-plus-circle.svg";
import IconCheckCircle from "../../shared/icons/icon-check-circle.svg";
import IconExclamationDiamond from "../../shared/icons/icon-exclamation-diamond.svg";
import IconPrint from "../../shared/icons/icon-print.svg";
import IconUser from "../../shared/icons/icon-user.svg";
import { getUseStyles } from "../../shared/helpers";
import IconNames from "./IconNames";
import styles from "./Icon.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Icon");

interface ClassOverrides {
  color?: string;
}

export interface Props {
  iconName?: IconNames;
  size?: "tiny" | "small" | "medium" | "large";
  color?: "warning" | "error" | "success" | "info" | "default";
  classOverrides?: ClassOverrides;
}

const Icon: React.FC<Props> = props => {
  const {
    iconName,
    size = "small",
    color = "default",
    classOverrides = {}
  } = props;
  const classes = useStyles();
  const nameToIconMap = {
    "chevron-left": <IconChevronLeft />,
    "chevron-right": <IconChevronRight />,
    "dollar": <IconDollar />,
    "exclamation-circle": <IconExclamationCircle />,
    "information-circle": <IconInformationCircle />,
    "plus-circle": <IconPlusCircle />,
    "check-circle": <IconCheckCircle />,
    "exclamation-diamond": <IconExclamationDiamond />,
    "print": <IconPrint />,
    "user": <IconUser />
  };

  return (
    <span
      className={classNames({
        [classes[size]]: classes[size],
        [classes[color]]: !classOverrides?.color,
        [classOverrides.color]: !!classOverrides?.color
      })}
      data-testid={iconName}
    >
      {nameToIconMap[iconName]}
    </span>
  );
};

export default Icon;
