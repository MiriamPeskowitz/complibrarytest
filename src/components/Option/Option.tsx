import * as React from "react";

import Typography from "../Typography";

import IconCheck from "../../shared/icons/icon-check.svg";

import { getUseStyles } from "../../shared/helpers";
import styles from "./Option.jss.js";

import classNames from "classnames";
const PREFIX = "bdt-Option";
const useStyles = getUseStyles(styles, PREFIX);

enum TestIdPostfix {
  disabled = "disabled",
  selected = "selected",
  enabled = "enabled"
}

export interface Props {
  className?: string;
  children: React.ReactNode;
  value: string | number;
  disabled?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    val: string
  ) => void;
  selected?: boolean;
}

/**
 * Determine postfix for testid to help us determine state during testing.
 *
 * @param {boolean} disabled
 * @param {boolean} selected
 * @return {string} TestIdPostfix
 */
const getTestIdPostfix = (
  disabled: boolean,
  selected: boolean
): TestIdPostfix => {
  if (disabled) return TestIdPostfix.disabled;
  if (selected) return TestIdPostfix.selected;

  return TestIdPostfix.enabled;
};

const Option: React.FC<Props> = props => {
  const {
    className,
    children,
    value,
    disabled = false,
    onClick = () => {
      /* intentionally empty */
    },
    selected = false
  } = props;
  const classes = useStyles();

  if (disabled && selected) {
    /* eslint-disable no-console */
    console.warn(
      `Option: value: "${value}", is set to both selected and disabled, which is likely a mistake.`
    );
  }

  /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
  const onClickSelect = (val: string) => e => onClick(e, val);
  const testIdPostfix = getTestIdPostfix(disabled, selected);

  return (
    <li
      role="option"
      key={value}
      className={classNames({
        [classes.option]: true,
        [classes.defaultWidth]: true,
        [classes.enabled]: !disabled,
        [classes.disabled]: disabled,
        [className]: !!className
      })}
      onClick={disabled ? null : onClickSelect(value as string)}
      aria-selected={selected}
      aria-disabled={disabled}
      data-testid={`${PREFIX}-${testIdPostfix}`}
    >
      <Typography
        noTopMargin
        component="span"
        className={classNames({
          [classes.optionText]: true,
          [classes.selected]: selected
        })}
        classOverrides={{
          normal: classNames({
            [classes.optionTextColor]: !disabled,
            [classes.disabledOptionTextColor]: disabled
          })
        }}
      >
        {children}
      </Typography>
      {selected && <IconCheck is="svg" />}
    </li>
  );
};

export default Option;
