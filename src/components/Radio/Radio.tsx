import * as React from "react";
import { getUseStyles, getUseUtilityClasses } from "../../shared/helpers";
import { srOnly } from "../../shared/utilities";
import { styles, radio } from "./Radio.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Radio");
const useUtilityStyles = getUseUtilityClasses({ srOnly, radio }, "bdt-global");

export interface Props {
  name: string;
  value: string;
  className?: string;
  id: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  checked: boolean;
  inputRef?: any;
  isRequired?: boolean;
  hasError?: boolean;
  testId?: string;
}

const Radio: React.FC<Props> = props => {
  const {
    className = "",
    name,
    value,
    id,
    disabled = false,
    onChange = () => {
      /* empty */
    },
    onClick = () => {
      /* empty */
    },
    checked = false,
    isRequired = false,
    hasError = false,
    inputRef,
    testId = ""
  } = props;
  const classes = useStyles();
  useUtilityStyles();

  const onRadioClick = e => {
    if (disabled) return;
    onClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
  };

  return (
    <div
      className={classNames({
        [classes.hover]: !checked && !disabled && !hasError,
        [classes.error]: hasError,
        [classes.checked]: checked,
        [classes.disabled]: disabled,
        [className]: !!className
      })}
    >
      <input
        data-testid={testId}
        type="radio"
        className="bdt-global-srOnly"
        name={name}
        value={value}
        id={id}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        required={isRequired}
        ref={inputRef}
      />
      <div
        className={classNames({
          "bdt-global-radio": !checked && !disabled && !hasError,
          [classes.dot]: true
        })}
        role="radio"
        onClick={onRadioClick}
        tabIndex={1}
      />
    </div>
  );
};

export default Radio;
