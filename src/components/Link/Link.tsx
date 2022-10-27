import React from "react";
import Tooltip from "../Tooltip";
import Typography from "../Typography";

import {
  getUseStyles,
  getUseUtilityClasses
} from "../../shared/helpers.js";
import { srOnly } from "../../shared/utilities.js";
import IconExternalLink from "../../shared/icons/icon-external-link.svg";

import styles from "./Link.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Link");
const useUtilityStyles = getUseUtilityClasses({ srOnly }, "bdt-global");


//Changed to LinkProps --> change back, leave as plain props, then below, props: Props?

export interface LinkProps {
  children: any;
  url: string;
  className?: string;
  isExternal?: boolean;
  role?: string;
  isTruncated?: boolean;
  isActive?: boolean;
  isUnderlined?: boolean;
  display?: "default" | "light" | "white";
  onClick?: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const Link = (props: LinkProps)  => {
  const {
    children,
    className = "",
    url,
    isExternal = false,
    role = "",
    isTruncated = false,
    isActive = true,
    isUnderlined = true,
    display = "default",
    onClick = () => {
      /* empty */
    }
  } = props;

  const classes = useStyles();

  useUtilityStyles();

  const internalClickHandler = (e:any) => {
    e.preventDefault();
    onClick(e as React.MouseEvent<HTMLLabelElement, MouseEvent>);
  };

  return (
    <a
      className={classNames({
        [classes.link]: true,
        [classes.external]: isExternal,
        [classes.inactive]: !isActive,
        [classes[display]]: true,
        [className]: className
      })}
      href={url}
      target={isExternal ? "_blank" : undefined}
      role={role}
      rel={isExternal ? "noopener" : undefined}
      onClick={isExternal ? null : internalClickHandler}
    >
      {isTruncated ? (
        <Tooltip
          hoverContent={
            <Typography
              className={classes.hoverContent}
              noTopMargin
              noBottomMargin
              body="small"
            >
              {children}
            </Typography>
          }
          staticPosition="bottomRight"
        >
          <div
            className={classNames({
              [classes.typography]: true,
              [classes.underlined]: isUnderlined,
              [classes.truncate]: true
            })}
          >
            {children}
          </div>
        </Tooltip>
      ) : (
        <span
          className={classNames({
            [classes.typography]: true,
            [classes.underlined]: isUnderlined
          })}
        >
          {children}
        </span>
      )}
      {isExternal && <IconExternalLink className={classes["external-icon"]} />}
      {isExternal && (
        <span className="bdt-global-srOnly">Opens in a new window</span>
      )}
    </a>
  );
};

export default Link;
