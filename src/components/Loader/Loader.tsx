import React from "react";

import IconSpinner from "../../shared/icons/icon-spinner.svg";

import { getUseStyles, getUseUtilityClasses } from "../../shared/helpers";
import { srOnly } from "../../shared/utilities";
import styles from "./Loader.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Loader");
const useUtilityStyles = getUseUtilityClasses({ srOnly }, "bdt-global");

export interface Props {
  className?: string;
  size?: number;
}

const Loader: React.FC<Props> = props => {
  const { className, size = 68 } = props;
  const classes = useStyles();
  useUtilityStyles();

  return (
    <div
      className={classNames({
        [classes.spinner]: true,
        [className]: className
      })}
      style={{ width: size, height: size }}
    >
      <span role="alert" aria-busy="true" className="bdt-global-srOnly">
        Loading
      </span>
      <IconSpinner />
    </div>
  );
};

export default Loader;
