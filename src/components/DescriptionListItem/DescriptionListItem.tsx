import React from "react";
import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers.js";
import  styles from "./DescriptionListItem.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-DescriptionListItem");

export interface Props {
  children: React.ReactNode;
  className?: string;
  inline?: boolean;
  heading: string;
}

const DescriptionListItem: React.FC<Props> = props => {
  const { children, className = "", inline = false, heading } = props;
  const classes = useStyles();

  return (
    <>
      {inline ? (
        <li
          className={classNames({
            [className]: className,
            [classes.row]: true,
            [classes.listItem]: true
          })}
        >
          <div className={classes.headerCell}>
            <Typography variant="h5" component="p" noBottomMargin noTopMargin>
              {heading}
            </Typography>
          </div>
          <div className={classes.cell}>
            <Typography component="p" noTopMargin>
              {children}
            </Typography>
          </div>
        </li>
      ) : (
        <li
          className={classNames({
            [className]: className,
            [classes.listItem]: true
          })}
        >
          <Typography variant="h5" component="p" noBottomMargin noTopMargin>
            {heading}
          </Typography>
          <Typography component="p" noTopMargin>
            {children}
          </Typography>
        </li>
      )}
    </>
  );
};

export default DescriptionListItem;
