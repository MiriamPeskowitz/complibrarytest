import React from "react";

import { getUseStyles } from "../../shared/helpers.js";
import styles from "./Tooltip.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Tooltip");

type Positions = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

export interface Props {
  children: any;
  hoverContent: JSX.Element | string;
  tooltipClass?: string;
  className?: string;
  description?: string;
  staticPosition?: Positions;
}

const getNum = (val: string) => parseInt(val, 10);

const Tooltip: React.FC<Props> = props => {
  const {
    children,
    hoverContent,
    className,
    tooltipClass,
    description,
    staticPosition
  } = props;

  const classes = useStyles();
  const [position, setPosition] = React.useState<Positions>("bottomRight");
  const containerRef = React.useRef();
  const tooltipRef = React.useRef();

  React.useEffect(() => {
    let containerRect: any;
    let tooltipRect: any;
    containerRect = containerRef.current;
    tooltipRect = tooltipRef.current;

    if (staticPosition) {
      setPosition(staticPosition);
    } else if (tooltipRect !== null) {
      containerRect = containerRect.getBoundingClientRect();
      tooltipRect = tooltipRect.getBoundingClientRect();

      const docWidth = document.documentElement.clientWidth;
      const docHeight = document.documentElement.clientHeight;

      const rx =
        getNum(containerRect.x as string) +
        getNum(containerRect.width as string); // most right x
      const lx = containerRect.x; // most left x
      const ty = containerRect.y; // most top y
      const by =
        getNum(containerRect.y as string) +
        getNum(containerRect.height as string); // most bottom y

      const spaceRight =
        rx + getNum(tooltipRect.width as string) <= window.scrollX + docWidth;
      const spaceLeft = lx - getNum(tooltipRect.width as string) >= 0;
      const spaceAbove = ty - getNum(tooltipRect.height as string) >= 0;
      const spaceBelow =
        by + getNum(tooltipRect.height as string) <= window.scrollY + docHeight;

      // dynamically set the position by available space
      if (spaceRight && spaceBelow) {
        setPosition("bottomRight");
      } else if (spaceLeft && spaceBelow) {
        setPosition("bottomLeft");
      } else if (spaceRight && spaceAbove) {
        setPosition("topRight");
      } else if (spaceLeft && spaceAbove) {
        setPosition("topLeft");
      }
    }
  }, [position]);

  return (
    <>
      <span
        aria-describedby={description}
        tabIndex={0}
        ref={containerRef}
        className={classNames({
          [classes.tooltip]: true,
          [className]: className
        })}
      >
        {children}
      </span>
      <span
        role="tooltip"
        id={description}
        className={classNames({
          [classes.text]: true,
          [classes.hidden]: true,
          [classes[position]]: true,
          [tooltipClass]: tooltipClass
        })}
        ref={tooltipRef}
      >
        {hoverContent}
      </span>
    </>
  );
};

export default Tooltip;
