import React from "react";

import ButtonIcon from "../ButtonIcon";
import Grid from "../Grid";
import InputLabel from "../InputLabel";
import Option from "../Option";
import Select from "../Select";
import TextField from "../TextField";
import Typography from "../Typography";

import IconChevronLeft from "../../shared/icons/icon-chevron-left.svg";
import IconChevronRight from "../../shared/icons/icon-chevron-right.svg";
import IconDoubleChevronLeft from "../../shared/icons/icon-double-chevron-left.svg";
import IconDoubleChevronRight from "../../shared/icons/icon-double-chevron-right.svg";
import { getUseStyles } from "../../shared/helpers";

import styles from "./Pagination.jss.js";
import { getDisplayRowsFromPaginatedData } from "./Pagination";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Pagination");

export interface RowsPerPageOption {
  name: string;
  value: number;
}

export interface Props {
  className?: string;
  rows: any;
  rowsPerPageOptions: RowsPerPageOption[];
  updateDisplayRows: any;
  totalRows: number;
  serverSideNext?: any;
}

/**
 * Ensure that new page values are in bounds.
 *
 * @param {number} myPage
 * @param {number} myTotalPages
 * @returns {number}
 */
const getNewPage = (myPage: number, myTotalPages: number) => {
  if (myPage < 1) return 1;
  if (myPage > myTotalPages) return myTotalPages;
  return myPage;
};

/**
 * Calculate the next page value based on external page prop and upper bound.
 *
 * @param {number} myPage
 * @param {number} myTotalPages
 * @returns {number}
 */
const getNewNextPage = (myPage: number, myTotalPages: number) => {
  if (myPage + 1 > myTotalPages) return myTotalPages;
  return myPage + 1;
};

/**
 * Calculate the previous page value based on external page prop and lower
 * bound.
 *
 * @param {number} myPage
 * @returns {number}
 */
const getNewPreviousPage = (myPage: number) => {
  if (myPage - 1 < 1) return 1;
  return myPage - 1;
};

/**
 * Get the new row start value based on page and rows per page.
 *
 * @param {number} newPage
 * @param {number} myRowsPerPage
 * @returns {number}
 */
const getNewStart = (newPage: number, myRowsPerPage: number) => {
  if (newPage <= 1) return 1;
  return (newPage - 1) * myRowsPerPage + 1;
};

/**
 * Get the new row end value based on page and rows per page.
 *
 * @param {number} newPage
 * @param {number} myRowsPerPage
 * @param {number} myTotalRows
 * @returns {number}
 */
const getNewEnd = (
  newPage: number,
  myRowsPerPage: number,
  myTotalRows: number
) => {
  const newEnd = newPage * myRowsPerPage;

  if (newEnd > myTotalRows) return myTotalRows;
  return newEnd;
};

/**
 * Get the numeric representation of the jump to page input value for use in
 * calculations.
 *
 * @param {object} e Event object
 * @returns {number}
 */
const getNumericJumpToValueFromEvent = e => {
  const value = e.target.value;

  if (!value) return 1;
  return parseInt(value as string, 10);
};

/**
 * When changing rows per change, we need to recalculate the current page.
 *
 * @param {number} myStart
 * @param {number} myRowsPerPage
 * @returns {number}
 */
const getPageOnRowsPerPageChange = (myStart: number, myRowsPerPage: number) =>
  Math.ceil(myStart / myRowsPerPage);

/**
 * When changing rows per change, we need to recalculate the total pages.
 *
 * @param {number} myTotalRows
 * @param {number} myRowsPerPage
 * @returns {number}
 */
const getTotalPages = (myTotalRows: number, myRowsPerPage: number) =>
  Math.ceil(myTotalRows / myRowsPerPage);

const Pagination: React.FC<Props> = props => {
  const {
    className,
    rows,
    rowsPerPageOptions,
    updateDisplayRows,
    totalRows,
    serverSideNext
  } = props;
  const classes = useStyles();

  const [page, setPage] = React.useState(1);
  const [start, setStart] = React.useState(1);
  const [rowsPerPageOption, setRowsPerPageOption] = React.useState(
    rowsPerPageOptions[0]
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(
    rowsPerPageOptions[0].value
  );
  const [end, setEnd] = React.useState(rowsPerPage);
  const [totalPages, setTotalPages] = React.useState(
    Math.ceil(totalRows / rowsPerPage)
  );

  /**
   * Handle click related to rows per page values.
   *
   * @param {array} myRows
   * @param {number} myStart
   * @param {number} myTotalRows
   * @param {object} e Event object
   * @param {number} val Value returned from Select
   * @returns {void}
   */
  const rowsPerPageOnClick =
    (myRows: any[], myStart: number, myTotalRows: number) => (e, val) => {
      const value = val;
      const newPage = getPageOnRowsPerPageChange(myStart, value as number);
      const newTotalPages = getTotalPages(myTotalRows, value as number);

      updateDisplayRows(
        getDisplayRowsFromPaginatedData(myRows, newPage, value as number)
      );

      setRowsPerPageOption({ name: value.toString(), value });
      setRowsPerPage(value as React.SetStateAction<number>);
      setPage(newPage);
      setTotalPages(newTotalPages);
      setStart(getNewStart(newPage, value as number));
      setEnd(getNewEnd(newPage, value as number, myTotalRows));
    };

  /**
   * Handles jump to page functionality.
   *
   * @param {array} myRows
   * @param {number} myRowsPerPage
   * @param {number} myTotalRows
   * @param {number} myTotalPages
   * @param {object} e Event object
   * @returns {void}
   */
  const jumpTo =
    (
      myRows: any[],
      myRowsPerPage: number,
      myTotalRows: number,
      myTotalPages: number
    ) =>
    e => {
      const value = getNumericJumpToValueFromEvent(e);
      const newPage = getNewPage(value, myTotalPages);

      updateDisplayRows(
        getDisplayRowsFromPaginatedData(myRows, newPage, myRowsPerPage)
      );

      setPage(newPage);
      setStart(getNewStart(newPage, myRowsPerPage));
      setEnd(getNewEnd(newPage, myRowsPerPage, myTotalRows));
    };

  /**
   * Set the page value to the first page and update related state.
   *
   * @param {array} myRows
   * @param {number} myRowsPerPage
   * @param {number} myTotalRows
   * @returns {void}
   */
  const jumpToFirst =
    (myRows: any[], myRowsPerPage: number, myTotalRows: number) => () => {
      updateDisplayRows(
        getDisplayRowsFromPaginatedData(myRows, 1, myRowsPerPage)
      );

      setPage(1);
      setStart(1);
      setEnd(getNewEnd(1, myRowsPerPage, myTotalRows));
    };

  /**
   * Set the page value to the last page and update related state.
   *
   * @param {array} myRows
   * @param {number} myRowsPerPage
   * @param {number} myTotalPages
   * @param {number} myTotalRows
   * @returns {void}
   */
  const jumpToLast =
    (
      myRows: any[],
      myRowsPerPage: number,
      myTotalPages: number,
      myTotalRows: number
    ) =>
    () => {
      updateDisplayRows(
        getDisplayRowsFromPaginatedData(myRows, myTotalPages, myRowsPerPage)
      );

      setPage(myTotalPages);
      setStart(getNewStart(myTotalPages, myRowsPerPage));
      setEnd(myTotalRows);
    };

  /**
   * Handle paginating to the next page, if possible, and update related state.
   *
   * @param {aray} myRows
   * @param {number} myPage
   * @param {number} myRowsPerPage
   * @param {number} myTotalPages
   * @param {function|false} onServerSideNext
   * @returns {void}
   */
  const next =
    (
      myRows: any[],
      myPage: number,
      myRowsPerPage: number,
      myTotalPages: number,
      onServerSideNext = false
    ) =>
    () => {
      const newPage = getNewNextPage(myPage, myTotalPages);

      const update = newRows => {
        const newTotalRows = newRows.length;

        updateDisplayRows(
          getDisplayRowsFromPaginatedData(
            newRows as any[],
            newPage,
            myRowsPerPage
          )
        );

        setPage(newPage);
        setStart(getNewStart(newPage, myRowsPerPage));
        setEnd(getNewEnd(newPage, myRowsPerPage, newTotalRows as number));
        setTotalPages(getTotalPages(newTotalRows as number, myRowsPerPage));
      };

      if (onServerSideNext) serverSideNext(myPage, myRowsPerPage, update);
      else update(myRows);
    };

  /**
   * Handle paginating to the previous page, if possible, and update related
   * state.
   *
   * @param {array} myRows
   * @param {number} myPage
   * @param {number} myRowsPerPage
   * @param {number} myTotalRows
   * @returns {void}
   */
  const previous =
    (
      myRows: any[],
      myPage: number,
      myRowsPerPage: number,
      myTotalRows: number
    ) =>
    () => {
      const newPage = getNewPreviousPage(myPage);

      updateDisplayRows(
        getDisplayRowsFromPaginatedData(myRows, newPage, myRowsPerPage)
      );

      setPage(newPage);
      setStart(getNewStart(newPage, myRowsPerPage));
      setEnd(getNewEnd(newPage, myRowsPerPage, myTotalRows));
    };

  const Overview = myProps => {
    const { start: myStart, end: myEnd, total: myTotal } = myProps;

    return (
      <div className={classes.overview}>
        <Typography noTopMargin>
          Showing {myStart}-{myEnd} of {myTotal}
        </Typography>
      </div>
    );
  };

  const RowsPerPage = myProps => {
    const { options, selectedName, selectedValue, onClick } = myProps;
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    const onOptionClick = val => e => onClick(e, val);

    return (
      <Grid spacing={2} alignItems="items-center">
        <InputLabel
          label="Show"
          htmlFor="rows-per-page"
          noBottomMargin
          className={classes.dropDownLabel}
        />
        <Select
          selected={selectedName}
          noBottomMargin
          compact
          placeholder=""
          id="rows-per-page"
          className={classes.dropDown}
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selectedValue === option.value}
              disabled={option.disabled}
              onClick={onOptionClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </Grid>
    );
  };

  const JumpTo = myProps => {
    const { onChange, page: myPage } = myProps;

    return (
      <Grid spacing={2} alignItems="items-center">
        <InputLabel
          label="Jump to"
          htmlFor="jump"
          noBottomMargin
          className={classes.jumpToLabel}
        />
        <TextField
          className={classes.jumpToInput}
          onChange={onChange}
          value={myPage}
          id="jump"
          fullWidth={false}
          size={2}
          noBottomMargin
        />
      </Grid>
    );
  };

  const PaginationButtons = myProps => {
    const { onClickFirst, onClickLast, onNext, onPrevious } = myProps;

    return (
      <Grid alignItems="items-center" spacing={0}>
        <ButtonIcon
          classOverrides={{ variant: classes.paginationButton }}
          onClick={onClickFirst}
          label="first"
          variant="outlined"
          icon={<IconDoubleChevronLeft is="svg" />}
        />
        <ButtonIcon
          classOverrides={{ variant: classes.paginationButton }}
          onClick={onPrevious}
          label="previous"
          variant="outlined"
          icon={<IconChevronLeft is="svg" />}
        />
        <ButtonIcon
          classOverrides={{ variant: classes.paginationButton }}
          onClick={onNext}
          label="next"
          variant="outlined"
          icon={<IconChevronRight is="svg" />}
        />
        <ButtonIcon
          classOverrides={{ variant: classes.paginationButton }}
          onClick={onClickLast}
          label="last"
          variant="outlined"
          icon={<IconDoubleChevronRight is="svg" />}
        />
      </Grid>
    );
  };

  return (
    <Grid
      alignItems="items-center"
      spacing={3}
      className={classNames({ [className]: !!className })}
    >
      <Overview end={end} start={start} total={totalRows} />
      <RowsPerPage
        options={rowsPerPageOptions}
        selectedName={rowsPerPageOption.name}
        selectedValue={rowsPerPageOption.value}
        onClick={rowsPerPageOnClick(rows as any[], start, totalRows)}
      />
      <JumpTo
        onChange={jumpTo(rows as any[], rowsPerPage, totalRows, totalPages)}
        page={page}
      />
      <PaginationButtons
        onClickFirst={jumpToFirst(rows as any[], rowsPerPage, totalRows)}
        onClickLast={jumpToLast(
          rows as any[],
          rowsPerPage,
          totalPages,
          totalRows
        )}
        onNext={next(
          rows as any[],
          page,
          rowsPerPage,
          totalPages,
          serverSideNext as boolean
        )}
        onPrevious={previous(rows as any[], page, rowsPerPage, totalRows)}
      />
    </Grid>
  );
};

export default Pagination;
export {
  getNewPage,
  getNewNextPage,
  getNewPreviousPage,
  getNewStart,
  getNewEnd,
  getNumericJumpToValueFromEvent,
  getPageOnRowsPerPageChange,
  getTotalPages
};
