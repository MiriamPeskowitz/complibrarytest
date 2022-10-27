import * as React from "react";

import Grid from "../Grid";

import classNames from "classnames";

export interface Props {
  children: any;
  inline?: boolean;
  className?: string;
  spacing?: 1 | 2 | 3 | 4;
  wrap?: "wrap" | "no-wrap";
}

const ButtonGroup: React.FC<Props> = props => {
  const {
    children,
    inline = false,
    className,
    spacing = 1,
    wrap = "wrap"
  } = props;

  return (
    <Grid
      spacing={spacing}
      direction={inline ? "row" : "column"}
      alignItems={"items-start"}
      className={classNames({
        [className]: className
      })}
      wrap={wrap}
    >
      {children}
    </Grid>
  );
};

export default ButtonGroup;
