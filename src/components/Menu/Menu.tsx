import * as React from "react";

import Button from "../Button";

import IconCaretDown from "../../shared/icons/icon-caret-down.svg";
import { getUseStyles } from "../../shared/helpers";

import styles from "./Menu.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Menu");

interface ClassOverrides {
  status?: string;
}

export interface Props {
  className?: string;
  classOverrides?: ClassOverrides;
  children: React.ReactElement | React.ReactElement[];
  size?: "default" | "compact";
  name: string;
  leadingIcon?: React.ReactElement | false;
  variant?: "solid" | "outlined" | "text" | "inverted";
  align?: "left" | "right";
}

const Menu: React.FC<Props> = props => {
  const {
    className = "",
    children,
    size = "default",
    name,
    leadingIcon = false,
    variant = "solid",
    align = "left",
    classOverrides
  } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = () => setOpen(false);

  return (
    <div
      className={classNames({
        [classes.normal]: true,
        [classes.defaultWidth]: true,
        [classes[align]]: true,
        [className]: !!className
      })}
    >
      <Button
        leadingIcon={leadingIcon}
        trailingIcon={<IconCaretDown is="svg" />}
        onClick={onClickOpen}
        variant={variant}
        size={size}
        className={classes.menu}
        classOverrides={{
          size: classNames({
            [classes.textVariantDefaultSize]:
              variant === "text" && size === "default",
            [classes.textVariantCompactSize]:
              variant === "text" && size === "compact"
          }),
          status: classNames({
            [classOverrides?.status]:
              variant === "inverted" && !!classOverrides?.status
          })
        }}
      >
        {name}
      </Button>
      <ul
        role="listbox"
        data-testid="listbox"
        className={classNames({
          [classes.options]: true,
          [classes.optionsCompact]: size === "compact" && variant !== "text",
          [classes.optionsDefault]: size === "default" && variant !== "text",
          [classes.optionsText]: variant === "text",
          [classes.open]: open,
          [classes.closed]: !open,
          [classes.defaultWidth]: true
        })}
      >
        {React.Children.map(children || null, (child: React.ReactElement) => {
          const newChildProps = { ...child.props };

          // Make sure `Menu` closes whenever a clickable `Option` is selected
          if (child.props.hasOwnProperty("onClick")) {
            const onClick = e => {
              setOpen(false);
              child.props.onClick(e);
            };

            newChildProps.onClick = onClick;
          }

          return React.cloneElement(child, { ...(newChildProps as Props) });
        })}
      </ul>

      {open && <div className={classes.backdrop} onClick={onClickClose} />}
    </div>
  );
};

export default Menu;
