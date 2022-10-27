import * as React from "react";

import Grid from "../Grid";
import IconIsometric from "../IconIsometric";
import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers";
import IconIsometricNames from "../IconIsometric/IconIsometricNames";
import styles from "./Callout.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Callout");

export interface Props {
  className?: string;
  headline: string;
  secondary?: string;
  iconName?: IconIsometricNames;
  buttonElement?: React.ReactElement | false;
  chipElement?: React.ReactElement | false;
}

const Callout: React.FC<Props> = props => {
  const {
    className = "",
    headline = "",
    secondary = "",
    iconName = "",
    chipElement,
    buttonElement
  } = props;
  const classes = useStyles();

  return (
    <div
      className={classNames({
        [classes.container]: true,
        [className]: className
      })}
    >
      <Grid
        justifyContent="justify-between"
        alignItems="items-center"
        className={classes.grid}
        wrap="no-wrap"
        spacing={3}
      >
        <Grid alignItems="items-center" wrap="no-wrap" spacing={3}>
          {iconName && <IconIsometric iconName={iconName} />}
          <Grid direction="column">
            <Grid spacing={2} alignItems="items-center">
              <Typography noTopMargin noBottomMargin variant="h3">
                {headline}
              </Typography>
              {chipElement}
            </Grid>
            <div
              className={classNames({
                [classes.secondaryWithButton]: buttonElement
              })}
            >
              {secondary && <Typography noTopMargin>{secondary}</Typography>}
            </div>
          </Grid>
        </Grid>
        {buttonElement}
      </Grid>
    </div>
  );
};

export default Callout;
