import * as React from "react";

import Button from "../Button";
import Typography from "../Typography";

import IconLoading from "../../shared/icons/icon-loading.svg";
import IconUpload from "../../shared/icons/icon-upload.svg";
import {
  getUseStyles,
  getUseUtilityClasses
} from "../../shared/helpers";
import { hidden, srOnly } from "../../shared/utilities";

import styles from "./FileUpload.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-FileUpload");
const useUtilityStyles = getUseUtilityClasses({ srOnly, hidden }, "bdt-global");

interface OnChangeActionArgType {
  file: File;
  reader: FileReader;
}

export interface Props {
  className?: string;
  disabled?: boolean;
  helperText?: string;
  id: string;
  inputRef?: any;
  label: string;
  name?: string;
  loading?: boolean;
  noBottomMargin?: boolean;
  onChangeAction?: (obj: OnChangeActionArgType) => void;
  required?: boolean;
  nativeRequired?: boolean;
  variant?: "solid" | "outlined" | "text";
  withForm?: boolean;
}

const FileUpload: React.FC<Props> = props => {
  const {
    className,
    disabled,
    id,
    inputRef,
    helperText,
    label,
    name,
    loading,
    noBottomMargin,
    onChangeAction,
    required,
    nativeRequired,
    variant = "solid",
    withForm = true
  } = props;
  const classes = useStyles();
  useUtilityStyles();

  const onChange = e => {
    const file: File = e.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onloadend = () => {
      onChangeAction({ file, reader });
    };
    reader.readAsDataURL(file);
  };

  // Simulates click on input so that we can use button element for file upload
  const onClick = () => document.getElementById(id).click();

  const component = (
    <div className={classes.wrapper}>
      <input
        id={id}
        name={name}
        className="bdt-global-srOnly"
        type="file"
        accept=".pdf,image/*"
        onChange={onChange}
        disabled={disabled}
        required={nativeRequired}
        ref={inputRef}
      />

      <label
        className={classNames({
          [classes.button]: true,
          [classes.disabled]: loading || disabled,
          [className]: className
        })}
        htmlFor={id}
      >
        <Button
          variant={variant}
          disabled={disabled}
          onClick={onClick}
          leadingIcon={<IconUpload is="svg" />}
          className={classNames({
            [classes.button]: true,
            [classes.noBottomMargin]: noBottomMargin
          })}
        >
          <span className={loading ? "bdt-global-hidden" : ""}>
            {label}{" "}
            {(required || nativeRequired) && (
              <span className={classes.required} />
            )}
          </span>
          {loading && (
            <span className={classes.loadingIcon}>
              <IconLoading is="svg" />
            </span>
          )}
        </Button>
      </label>

      {helperText && (
        <Typography noTopMargin body="small">
          {helperText}
        </Typography>
      )}
    </div>
  );

  return withForm ? (
    <form
      className={classNames({
        [className]: className,
        [classes.noBottomMargin]: noBottomMargin
      })}
      encType="multipart/form-data"
    >
      {component}
    </form>
  ) : (
    component
  );
};

export default FileUpload;
