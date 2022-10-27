import React from "react";

import ButtonIcon from "../ButtonIcon";
import Grid from "../Grid";

import IconSortAscending from "../../shared/icons/icon-sort-ascending.svg";
import IconSortDescending from "../../shared/icons/icon-sort-descending.svg";
import IconSort from "../../shared/icons/icon-sort-unsorted.svg";

import { getUseStyles } from "../../shared/helpers";
import styles from "./TableSortHeader.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-TableSortHeader");

export interface Props {
  children: React.ReactNode;
  column: any;
  isActive?: boolean;
  sortRows(column: any): any[];
  postSort?(column: any): any[];
  className?: string;
}

const nameToSortDirection = { "1": "Ascending", "-1": "Descending" };

// NOTE: `unbound-method` appears erroneous here, can't be found in this file
/* eslint-disable  @typescript-eslint/unbound-method */
const TableSortHeader: React.FC<Props> = props => {
  const {
    children,
    className,
    column,
    isActive = false,
    sortRows,
    postSort = () => {
      /* empty */
    }
  } = props;
  const classes = useStyles();

  const onClickSort = () => {
    sortRows(column);
    postSort(column);
  };
  const getSortIcon = () => {
    if (isActive && column.sortDirection === 1)
      return <IconSortAscending is="svg" role="img" aria-hidden="true" />;
    else if (isActive && column.sortDirection === -1)
      return <IconSortDescending is="svg" role="img" aria-hidden="true" />;
    else return <IconSort is="svg" role="img" aria-hidden="true" />;
  };

  return (
    <Grid
      spacing={1}
      alignItems="items-center"
      className={classNames({
        [className]: className
      })}
    >
      {children}
      <ButtonIcon
        classOverrides={{ size: classes.sortIcon }}
        label={`Sort ${nameToSortDirection[column.sortDirection]}`}
        variant="ghost"
        aria-label={`Sort ${nameToSortDirection[column.sortDirection]}`}
        onClick={onClickSort}
        icon={getSortIcon()}
      />
    </Grid>
  );
};
/* eslint-enable  @typescript-eslint/unbound-method */

export default TableSortHeader;
