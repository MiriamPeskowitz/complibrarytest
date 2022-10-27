import * as React from "react";

import ButtonIcon from "../ButtonIcon";
import Typography from "../Typography";

import IconCheckCircle from "../../shared/icons/icon-check-circle.svg";
import IconClose from "../../shared/icons/icon-close.svg";
import IconExclamationCircle from "../../shared/icons/icon-exclamation-circle.svg";
import IconExclamationDiamond from "../../shared/icons/icon-exclamation-diamond.svg";
import IconInformationCircle from "../../shared/icons/icon-information-circle.svg";
import { getUseStyles } from "../../shared/helpers";

import styles from "./Banner.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Banner");

export interface Props {
  children: any;
  className?: string;
  id?: string;
  isDismissable?: boolean;
  action?: JSX.Element;
  autoDismiss?: number;
  position?: "top" | "bottom";
  zIndex?: number;
  isFixed?: boolean;
  variant?: "error" | "success" | "informational" | "warning";
}

const Banner: React.FC<Props> = props => {
  const {
    className = "",
    id = "",
    children,
    isDismissable = false,
    action = null,
    autoDismiss = 0,
    position = "top",
    zIndex = 1,
    isFixed = false,
    variant = "error"
  } = props;
  const classes = useStyles();
  const [isVisible, setIsVisible] = React.useState(true);
  const handleDismiss = () => setIsVisible(false);

  React.useEffect(() => {
    if (!autoDismiss) return;

    window.setTimeout(() => {
      setIsVisible(false);
    }, autoDismiss);
  });

  return (
    <>
      {isVisible && (
        <div
          id={id}
          data-testid="banner-container"
          style={{ zIndex }}
          className={classNames({
            [classes.banner]: true,
            [classes.bannerWithAction]: !!action,
            [classes.bannerWithoutAction]: !action,
            [classes.centerFixed]: isFixed,
            [classes[position]]: true,
            [classes[variant]]: true,
            [className]: className
          })}
        >
          {variant === "success" ? (
            <IconCheckCircle  />
          ) : variant === "informational" ? (
            <IconInformationCircle  />
          ) : variant === "warning" ? (
            <IconExclamationDiamond  />
          ) : (
            <IconExclamationCircle />
          )}
          <Typography
            className={classNames({
              [classes.message]: true
            })}
            noTopMargin
            variant="p"
            display="white"
          >
            {children}
          </Typography>
          {action && (
            <div className={classes.actionButton} data-testid="action">
              {action}
            </div>
          )}
          {isDismissable && (
            <ButtonIcon
              classOverrides={{ size: classes.dismissButton }}
              size="small"
              label="Dismiss"
              aria-label="Close"
              variant="ghost"
              onClick={handleDismiss}
              icon={<IconClose is="svg" />}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Banner;
