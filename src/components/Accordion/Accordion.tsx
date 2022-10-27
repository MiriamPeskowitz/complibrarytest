import React from "react";

import Typography from "../Typography";

import IconChevronRight from "../shared/icons/icon-chevron-right.svg";
import { getUseStyles } from "../../shared/helpers.js";

import styles from "./Accordion.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Accordion");

export interface Props {
  className?: string;
  title?: string;
  children?: any;
  id?: string;
  isOpen?: boolean;
  variant?: "h2" | "h3" | "h4" | "h5";
}

const Accordion: React.FC<Props> = props => {
  const {
    className,
    children,
    title,
    id,
    variant = "h3",
    isOpen = false
  } = props;
  const classes = useStyles();
  const [open, toggleOpen] = React.useState(isOpen);
  const toggleAccordion = () => toggleOpen(!open);

  return (
    <details
      className={classNames({
        [classes.details]: true,
        [className]: className
      })}
      aria-expanded={open}
      aria-controls={id}
      open={isOpen}
    >
      <summary className={classes.summary} onClick={toggleAccordion}>
        <span
          className={classNames({
            [classes[`icon-${variant}`]]: true,
            [classes.open]: open
          })}
        >
          <IconChevronRight />
        </span>
        <Typography
          variant={variant}
          className={classes.title}
          noTopMargin
          noBottomMargin
        >
          {title}
        </Typography>
      </summary>
      <div className={classes.content} id={id}>
        {children}
      </div>
    </details>
  );
};

export default Accordion;
