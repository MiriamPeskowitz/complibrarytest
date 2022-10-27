import React from "react";

import TextField from "../TextField";
import ButtonIcon from "../ButtonIcon";

import IconVisibility from "../../shared/icons/icon-visibility.svg";
import IconVisibilityOff from "../../shared/icons/icon-visibility-off.svg";

import { getUseStyles } from "../../shared/helpers";
import styles from "./PasswordField.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-PasswordField");

export interface Props {
  className?: string;
  id: string;
  value?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testId?: string;
  noBottomMargin?: boolean;
  hasError?: boolean;
  hasSuccess?: boolean;
}

const PasswordField: React.FC<Props> = props => {
  const {
    className = "",
    id,
    value = "",
    required = false,
    name = "",
    placeholder = "",
    disabled = false,
    onChange = () => {
      /* empty */
    },
    testId = "",
    noBottomMargin = false,
    hasError = false,
    hasSuccess = false
  } = props;
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const classes = useStyles();

  const togglePasswordVisibility = () => setIsPasswordVisible(state => !state);

  return (
    <TextField
      id={id}
      testId={testId}
      className={classNames({ [className]: !!className })}
      type={isPasswordVisible ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      required={required}
      name={name}
      disabled={disabled}
      onChange={onChange}
      noBottomMargin={noBottomMargin}
      hasError={hasError}
      hasSuccess={hasSuccess}
      trailingIcon={
        <ButtonIcon
          variant="ghost"
          label={id}
          disabled={disabled}
          ariaControls={id}
          ariaExpanded={isPasswordVisible}
          icon={
            isPasswordVisible ? (
              <IconVisibilityOff is="svg" />
            ) : (
              <IconVisibility is="svg" />
            )
          }
          onClick={togglePasswordVisibility}
        />
      }
    />
  );
};

export default PasswordField;
