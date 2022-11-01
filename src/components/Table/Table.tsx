import * as React from "react";

import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers.js";

import TableSortHeader from "./TableSortHeader";
import styles from "./Table.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Table");

export interface Column {
  name: string;
  accessor: string;
  isActive?: boolean;
  isSortable?: boolean;
  sortRows?(column: Column): object[];
  sortDirection?: 1 | -1;
  Cell?: (row: any, key: string, index: number) => React.ReactNode;
  Header?: any;
}
export interface Props {
  className?: string | undefined;
  maxHeightForScroll?: number;
  updateColumnsPostSort?(column: Column): object[];
  columns: Column[];
  rows: object[];
}

// NOTE: `unbound-method` appears erroneous here, can't be found in this file
/* eslint-disable  @typescript-eslint/unbound-method */
const Table: React.FC<Props> = props => {
  const {
    columns,
    rows,
    className,
    maxHeightForScroll = false,
    updateColumnsPostSort
  } = props;
  const classes = useStyles();

  return (
    <table
      className={classNames({
        [classes.table]: true,
        [classes.tableScroll]: !!maxHeightForScroll,
        [classes.scroll]: !!maxHeightForScroll,
        [className]: className
      })}
      style={{ maxHeight: !!maxHeightForScroll ? maxHeightForScroll : "auto" }}
    >
      <thead>
        <tr className={classes.row}>
          {columns.map(col => {
            return (
              <th
                key={col.accessor}
                className={classNames({
                  [classes.headerCell]: true,
                  [classes.active]: col.isActive
                })}
              >
                {col?.isSortable && (
                  <TableSortHeader
                    column={col}
                    isActive={col.isActive}
                    sortRows={col.sortRows}
                    postSort={updateColumnsPostSort}
                  >
                    {col.name}
                  </TableSortHeader>
                )}
                {!col?.isSortable && col?.Header && col.Header(col)}
                {!col?.isSortable && !col?.Header && col.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr
              key={index}
              className={classNames({
                [classes.row]: true,
                [classes.bodyRow]: true
              })}
            >
              {Object.keys(row).map(key => {
                const Cell = columns.find(col => col.accessor === key)?.Cell;

                return (
                  <td key={`${index}-${key}`} className={classes.bodyCell}>
                    {Cell ? (
                      Cell(row, key, index)
                    ) : (
                      <Typography component="span" noTopMargin>
                        {row[key]}
                      </Typography>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
/* eslint-enable  @typescript-eslint/unbound-method */

export default Table;
