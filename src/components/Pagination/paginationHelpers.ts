/**
 * paginationHelpers.js
 *
 * Provides exportable utility functions to help with pagination logic.
 *
 * It makes sense to put functions here that do not have any dependencies in the
 * primary TablePagination component and/or that we might want to allow
 * consumers of the library to import and use for the sake of convenience.
 */

/**
 * Transform row data into a paginated object (rows separated by page key).
 *
 * @param {array} rows Array of row objects
 * @param {number} rowsPerPage
 * @returns {object}
 */
const getPaginatedData = (rows: any[], rowsPerPage: number) => {
  return rows.reduce((acc, cur, index) => {
    const startIndex = index === 0 ? index : index * rowsPerPage;
    const endIndex =
      index === 0 ? rowsPerPage : index * rowsPerPage + rowsPerPage;

    if (startIndex >= rows.length) return { ...acc };
    return {
      ...acc,
      [index]: rows.slice(startIndex, endIndex)
    };
  }, {});
};

/**
 * Retrieves a specific page from a pagination object that is transformed from
 * a typical array of row data.
 *
 * @param {array} rows Array of row objects
 * @param {number} page
 * @param {number} rowsPerPage
 * @returns {array} Array of row objects pertaining to the chosen page
 */
const getDisplayRowsFromPaginatedData = (
  rows: any[],
  page: number,
  rowsPerPage: number
) => {
  // Page value is 0-indexed
  return getPaginatedData(rows, rowsPerPage)[page - 1];
};

export { getPaginatedData, getDisplayRowsFromPaginatedData };
