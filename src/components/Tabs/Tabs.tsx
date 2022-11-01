import * as React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles from "./Tabs.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Tabs");

export interface Props {
  children: any;
  className?: string;
  fullWidth?: boolean;
  wrapperClass?: string;
}

const Tabs: React.FC<Props> = props => {
  const { children, className, fullWidth, wrapperClass } = props;
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(null);

  const isTabActive = index => activeTab === index;

  return (
    <div
      className={classNames({
        [wrapperClass]: wrapperClass,
        [classes.tabWrapper]: true
      })}
    >
      <div
        className={classNames({
          [className]: className,
          [classes.fullWidth]: fullWidth,
          [classes.horizontal]: true
        })}
      >
        {children.map((child, i) => {
          const onClick = e => {
            setActiveTab(i);
            child.props.onClick(e);
          };
          const isActive = isTabActive(i);
          return React.cloneElement(
            child as React.DetailedReactHTMLElement<any, HTMLElement>,
            {
              ...child.props,
              onClick,
              isActive,
              fullWidth,
              key: i
            }
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
