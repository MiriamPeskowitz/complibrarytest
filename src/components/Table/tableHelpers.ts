/**
 * tableHelpers.tx
 *
 * Provides exportable utility functions for the table component to help in case
 * we need repeatable logic.
 */

/**
 * For a given column, set the row data alphabetically (a to z).
 *
 * @param {array} rows Array of row objects
 * @param {object} column Column object from table
 * @returns {array} Sorted rows data
 */
const sortRowsAlphabetically = (rows, column) => {
  // Copy array and sort
  const sortedRows = rows.slice().sort((a, b) => {
    if (a[column.accessor].toLowerCase() < b[column.accessor].toLowerCase()) {
      return -1 * column.sortDirection;
    } else if (
      a[column.accessor].toLowerCase() > b[column.accessor].toLowerCase()
    ) {
      return 1 * column.sortDirection;
    }
    return 0;
  });

  return sortedRows;
};

/**
 * Builds new array of column objects with the currently sorted column set to
 * active and sort direction inverted.
 *
 * @param {array} prevColumns Array of column objects before update
 * @param {object} curColumn Object for the current column that was sorted
 * @returns {array} New array of column objects
 */
const updateColumnsSortStatus = (prevColumns, curColumn) => {
  return prevColumns.map(prev => {
    if (prev.accessor !== curColumn.accessor)
      return { ...prev, isActive: false };

    return {
      ...prev,
      sortDirection: curColumn.sortDirection * -1,
      isActive: true
    };
  });
};

/**
 * Retrieves a filtered array of rows based on a search value.
 *
 * @param {array} rows Array of row objects
 * @param {string} value Search value
 * @returns {array} New array of filtered rows
 */
const getRowsFilteredBySearch = (rows, value) =>
  rows.filter(
    // @ts-ignore (typescript wants rows fully typed, but this is a problem
    //  because rows can have an indeterminate number of properties).
    row => Object.values(row).filter(cell => cell.includes(value)).length
  );

export {
  sortRowsAlphabetically,
  updateColumnsSortStatus,
  getRowsFilteredBySearch
};
