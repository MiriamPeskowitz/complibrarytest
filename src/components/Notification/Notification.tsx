import * as React from "react";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Typography from "../Typography";

import IconInformationCircle from "../../shared/icons/icon-information-circle.svg";
import IconCheckCircle from "../../shared/icons/icon-check-circle.svg";
import IconExclamationCircle from "../../shared/icons/icon-exclamation-circle.svg";
import { getUseStyles } from "../../shared/helpers";

import styles from "./Notification.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Notification");

export interface Props {
  children: any;
  variant?: "success" | "error" | "informational" | "none";
  onActionClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onDismissClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  actionName: string;
  className?: string;
  id?: string;
  hasDismissAction?: boolean;
  isDismissed?: boolean;
}

const Notification: React.FC<Props> = props => {
  const {
    children,
    className = "",
    id = "",
    variant = "none",
    hasDismissAction = true,
    onActionClick,
    onDismissClick = () => false,
    actionName,
    isDismissed = false
  } = props;
  const classes = useStyles();
  const [hasNotification, setHasNotification] = React.useState(true);
  const handleDismiss = e => {
    onDismissClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    setHasNotification(false);
  };

  return (
    <>
      {hasNotification && !isDismissed && (
        <div className={classes.container} id={id}>
          <div
            className={classNames({
              [classes.notification]: true,
              [classes[variant]]: true,
              [className]: className
            })}
          >
            {variant === "success" ? (
              <IconCheckCircle is="svg" />
            ) : variant === "error" ? (
              <IconExclamationCircle is="svg" />
            ) : variant === "informational" ? (
              <IconInformationCircle is="svg" />
            ) : variant === "none" ? null : null}
            <Typography
              noTopMargin
              className={classNames({ [classes.truncate]: true })}
              variant="p"
            >
              {children}
            </Typography>
          </div>
          <ButtonGroup inline className={classes.buttonGroup}>
            <Button
              ariaLabel={actionName}
              variant="text"
              size="compact"
              onClick={onActionClick}
            >
              {actionName}
            </Button>
            {hasDismissAction && (
              <Button
                ariaLabel="Close"
                variant="text"
                size="compact"
                onClick={handleDismiss}
              >
                Dismiss
              </Button>
            )}
          </ButtonGroup>
        </div>
      )}
    </>
  );
};

export default Notification;
