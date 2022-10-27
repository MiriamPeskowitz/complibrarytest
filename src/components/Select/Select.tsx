import * as React from "react";
import Typography from "../Typography";
import { getUseStyles } from "../../shared/helpers";
import styles from "./Select.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Select");

export interface Props {
  className?: string;
  children: React.ReactElement | React.ReactElement[];
  compact?: boolean;
  selected?: string;
  placeholder?: string;
  helperText?: string;
  id: string;
  noBottomMargin?: boolean;
  multiSelect?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hasError?: boolean;
  hasSuccess?: boolean;
}

interface NewChildProps {
  onClick: (e: React.MouseEvent) => void;
}

const Select: React.FC<Props> = props => {
  const {
    className = "",
    children,
    compact = false,
    selected = "",
    placeholder = "",
    helperText,
    noBottomMargin = false,
    id,
    multiSelect = false,
    required = false,
    disabled = false,
    readOnly = false,
    hasError = false,
    hasSuccess = false
  } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = () => setOpen(false);

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [classes.defaultWidth]: true,
        [className]: !!className
      })}
    >
      <div
        role="button"
        aria-labelledby={id}
        aria-disabled={disabled}
        aria-invalid={hasError && !disabled}
        aria-required={required}
        data-testid={
          hasSuccess && !hasError && !disabled
            ? `${id}-button-success`
            : `${id}-button`
        }
        className={classNames({
          [classes.select]: true,
          [classes.normal]: !compact,
          [classes.compact]: compact,
          [classes.disabled]: disabled,
          [classes.noBottomMargin]: noBottomMargin,
          [classes.readOnly]: readOnly,
          [classes.error]: hasError && !disabled,
          [classes.success]: hasSuccess && !hasError && !disabled
        })}
        onClick={!disabled && !readOnly ? onClickOpen : null}
        tabIndex={0}
      >
        <Typography
          noTopMargin
          noBottomMargin
          component="span"
          className={classNames({
            [classes.placeholder]: !selected && placeholder,
            [classes.selectedValue]: selected
          })}
          classOverrides={{
            normal: classNames({
              [classes.selectTextColor]: true,
              [classes.disabledTextColor]: disabled
            })
          }}
        >
          {selected || placeholder}
        </Typography>
      </div>
      <ul
        role="listbox"
        data-testid={`${id}-listbox`}
        className={classNames({
          [classes.options]: true,
          [classes.open]: open,
          [classes.closed]: !open,
          [classes.defaultWidth]: true
        })}
      >
        {React.Children.map(children || null, (child: React.ReactElement) => {
          const newChildProps: NewChildProps = { ...child.props };

          // Make sure `Select` closes whenever a clickable `Option` is selected
          if (child.props.hasOwnProperty("onClick")) {
            const onClick = e => {
              setOpen(false);
              child.props.onClick(e);
            };

            newChildProps.onClick = onClick;
          }
          return React.cloneElement(child, { ...newChildProps });
        })}
      </ul>

      {helperText && (
        <Typography body="small" className={classes.helper}>
          {helperText}
        </Typography>
      )}
      {open && <div className={classes.backdrop} onClick={onClickClose} />}
    </div>
  );
};

export default Select;
