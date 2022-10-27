// /**
//  * @jest-environment jsdom
//  */

// import { render } from "@testing-library/react";
// import * as React from "react";

// import Pagination, {
//   getNewEnd,
//   getNewNextPage,
//   getNewPage,
//   getNewPreviousPage,
//   getNewStart,
//   getNumericJumpToValueFromEvent,
//   getPageOnRowsPerPageChange,
//   getTotalPages
// } from "./Pagination";
// import {
//   getDisplayRowsFromPaginatedData,
//   getPaginatedData
// } from "./paginationHelpers";

// const fn = () => {
//   /* intentionally empty */
// };

// describe("Pagination", () => {
//   it("should render a Pagination", () => {
//     const { queryAllByText } = render(
//       <Pagination
//         rows={[
//           { children: "Praesent vel ex lobortis" },
//           { children: "Aenean bibendum" },
//           { children: "Curabitur nisi ipsum" }
//         ]}
//         totalRows={3}
//         updateDisplayRows={fn}
//         rowsPerPageOptions={[
//           { name: "15", value: 15 },
//           { name: "30", value: 30 },
//           { name: "50", value: 50 }
//         ]}
//       />
//     );
//     expect(queryAllByText(/Showing/)).toHaveLength(1);
//     expect(queryAllByText(/Jump to/)).toHaveLength(1);
//   });

//   it("should properly calculate new ending row value on page change", () => {
//     const outOfBounds = getNewEnd(5, 5, 20);
//     const inBounds = getNewEnd(2, 5, 20);

//     expect(outOfBounds).toBe(20);
//     expect(inBounds).toBe(10);
//   });

//   it("should properly increment page when navigating to next page", () => {
//     const outOfBounds = getNewNextPage(1, 2);
//     const inBounds = getNewNextPage(4, 3);

//     expect(outOfBounds).toBe(2);
//     expect(inBounds).toBe(3);
//   });

//   it("should keep page in bounds when jumping to page", () => {
//     const outOfUpperBound = getNewPage(3, 2);
//     const outOfLowerBound = getNewPage(-1, 2);
//     const inBounds = getNewPage(1, 2);

//     expect(outOfUpperBound).toBe(2);
//     expect(outOfLowerBound).toBe(1);
//     expect(inBounds).toBe(1);
//   });

//   it("should properly decrement page when navigating to previous page", () => {
//     const outOfBounds = getNewPreviousPage(1);
//     const inBounds = getNewPreviousPage(3);

//     expect(outOfBounds).toBe(1);
//     expect(inBounds).toBe(2);
//   });

//   it("should properly calculate new starting row value on page change", () => {
//     const outOfBounds = getNewStart(-5, 5);
//     const inBounds = getNewStart(2, 5);

//     expect(outOfBounds).toBe(1);
//     expect(inBounds).toBe(6);
//   });

//   it("should retrieve numeric value from event object on jump to input", () => {
//     const value0 = getNumericJumpToValueFromEvent({ target: { value: 2 } });
//     const value1 = getNumericJumpToValueFromEvent({ target: { value: "3" } });

//     expect(value0).toBe(2);
//     expect(value1).toBe(3);
//   });

//   it("should properly calculate page when rows per page changes", () => {
//     const page0 = getPageOnRowsPerPageChange(1, 5);
//     const page1 = getPageOnRowsPerPageChange(10, 5);
//     const page2 = getPageOnRowsPerPageChange(21, 10);

//     expect(page0).toBe(1);
//     expect(page1).toBe(2);
//     expect(page2).toBe(3);
//   });

//   it("should properly calculate total pages from rows, rows per page", () => {
//     const totalPages0 = getTotalPages(50, 5);
//     const totalPages1 = getTotalPages(50, 10);
//     const totalPages2 = getTotalPages(50, 15);
//     const totalPages3 = getTotalPages(10, 15);

//     expect(totalPages0).toBe(10);
//     expect(totalPages1).toBe(5);
//     expect(totalPages2).toBe(4);
//     expect(totalPages3).toBe(1);
//   });
// });

// describe("paginationHelpers", () => {
//   it("should normalize row array data into separate paginated arrays", () => {
//     const rows = [
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" }
//     ];
//     const paginatedExpected0 = {
//       0: [
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" },
//         { children: "Curabitur nisi ipsum" },
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" }
//       ],
//       1: [
//         { children: "Curabitur nisi ipsum" },
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" },
//         { children: "Curabitur nisi ipsum" }
//       ]
//     };
//     const paginatedExpected1 = {
//       0: [
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" },
//         { children: "Curabitur nisi ipsum" },
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" },
//         { children: "Curabitur nisi ipsum" },
//         { children: "Praesent vel ex lobortis" },
//         { children: "Aenean bibendum" },
//         { children: "Curabitur nisi ipsum" }
//       ]
//     };

//     const paginated0 = getPaginatedData(rows, 5);
//     const paginated1 = getPaginatedData(rows, 15);

//     expect(paginated0).toEqual(paginatedExpected0);
//     expect(paginated1).toEqual(paginatedExpected1);
//   });

//   it("should return the proper page from paginated row data", () => {
//     const rows = [
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" }
//     ];
//     const rowsExpected0 = [
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" }
//     ];
//     const rowsExpected1 = [
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" },
//       { children: "Praesent vel ex lobortis" },
//       { children: "Aenean bibendum" },
//       { children: "Curabitur nisi ipsum" }
//     ];

//     const page0 = getDisplayRowsFromPaginatedData(rows, 2, 5);
//     const page1 = getDisplayRowsFromPaginatedData(rows, 1, 10);

//     expect(page0).toEqual(rowsExpected0);
//     expect(page1).toEqual(rowsExpected1);
//   });
// });
