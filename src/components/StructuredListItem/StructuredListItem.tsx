import * as React from "react";
import ButtonGroup from "../ButtonGroup";
import Grid from "../Grid";
import Typography from "../Typography";
import IconDot from "../../shared/icons/icon-dot.svg";
import { getUseStyles } from "../../shared/helpers";
import styles from "./StructuredListItem.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-StructuredListItem");

export interface Props {
  children: any;
  title: string;
  metadata: string;
  className?: string;
  actionLeft?: React.ReactNode[];
  actionRight?: React.ReactNode[];
  isRead?: boolean;
}

const StructuredListItem: React.FC<Props> = props => {
  const {
    children,
    className = "",
    title,
    metadata,
    actionLeft = null,
    actionRight = null,
    isRead = false
  } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [className]: !!className
      })}
    >
      {!isRead && (
        <div className={classes.icon}>
          <IconDot is="svg" />
        </div>
      )}
      <Grid
        alignItems="items-center"
        justifyContent="justify-between"
        wrap="no-wrap"
        className={classes.header}
      >
        <Grid
          alignItems="items-center"
          wrap="no-wrap"
          className={classes.truncate}
        >
          <Typography
            noBottomMargin
            noTopMargin
            variant="h5"
            component="p"
            className={classNames({
              [classes.truncate]: true,
              [classes.title]: true,
              [classes.isRead]: isRead,
              [classes.isUnread]: !isRead
            })}
          >
            {title}
          </Typography>
        </Grid>
        <Grid alignItems="items-center" wrap="no-wrap">
          {(actionLeft || actionRight) && (
            <ButtonGroup
              inline
              className={classNames({
                [classes.nowrap]: true,
                [classes.actions]: true
              })}
              wrap="no-wrap"
            >
              {actionLeft}
              {actionRight}
            </ButtonGroup>
          )}
          <Typography
            noBottomMargin
            noTopMargin
            body="smallCaps"
            className={classNames({
              [classes.nowrap]: true,
              [classes.metadata]: true,
              [classes.truncate]: true
            })}
          >
            {metadata}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        className={classNames({
          [classes.bodyText]: true
        })}
        noBottomMargin
        noTopMargin
        body="small"
      >
        {children}
      </Typography>
    </div>
  );
};

export default StructuredListItem;
