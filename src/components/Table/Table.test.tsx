/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/react";
import * as React from "react";

import Table from "./Table";
import {
  getRowsFilteredBySearch,
  sortRowsAlphabetically,
  updateColumnsSortStatus
} from "./tableHelpers";

describe("Table", () => {
  it("should render a Table", () => {
    const { queryAllByText } = render(
      <Table
        columns={[{ name: "Header", accessor: "foo" }]}
        rows={[{ foo: "bar" }]}
      />
    );
    expect(queryAllByText(/Header/)).toHaveLength(1);
    expect(queryAllByText(/bar/)).toHaveLength(1);
  });

  it("should render a Table with a custom Cell", () => {
    const CustomCell = (row, key, index) => (
      <div>
        <span>baz</span>
        <span>{Object.values(row as any[])[0]}</span>
        <span>{key}</span>
        <span>{index}</span>
      </div>
    );
    const { queryAllByText } = render(
      <Table
        columns={[{ name: "Header", accessor: "foo", Cell: CustomCell }]}
        rows={[{ foo: "bar" }]}
      />
    );

    expect(queryAllByText(/baz/)).toHaveLength(1); // Custom content
    expect(queryAllByText(/bar/)).toHaveLength(1); // Row values
    expect(queryAllByText(/foo/)).toHaveLength(1); // Column key/accessor
    expect(queryAllByText(/0/)).toHaveLength(1); // Index value
  });

  it("should render a Table with a sort button when sorting is enabled and sortDirection === 1", () => {
    const sortRowsMock = jest.fn();
    const { queryAllByLabelText } = render(
      <Table
        columns={[
          {
            name: "Header",
            accessor: "foo",
            isSortable: true,
            sortRows: sortRowsMock,
            sortDirection: 1
          }
        ]}
        rows={[{ foo: "bar" }, { foo: "baz" }, { foo: "qux" }]}
      />
    );

    expect(queryAllByLabelText(/Sort Ascending/)).toHaveLength(1);
  });

  it("should render a Table with a sort header when sorting is enabled and sortDirection === -1", () => {
    const sortRowsMock = jest.fn();
    const { queryAllByLabelText } = render(
      <Table
        columns={[
          {
            name: "Header",
            accessor: "foo",
            isSortable: true,
            sortRows: sortRowsMock,
            sortDirection: -1
          }
        ]}
        rows={[{ foo: "bar" }, { foo: "baz" }, { foo: "qux" }]}
      />
    );

    expect(queryAllByLabelText(/Sort Descending/)).toHaveLength(1);
  });

  it("should invoke sorting methods when the sort button is clicked", () => {
    const sortRowsMock = jest.fn();
    const postSortMock = jest.fn();
    const { getByLabelText } = render(
      <Table
        columns={[
          {
            name: "Header",
            accessor: "foo",
            isSortable: true,
            sortRows: sortRowsMock,
            sortDirection: 1
          }
        ]}
        rows={[{ foo: "bar" }, { foo: "baz" }, { foo: "qux" }]}
        updateColumnsPostSort={postSortMock}
      />
    );

    fireEvent.click(getByLabelText(/Sort Ascending/));
    expect(sortRowsMock).toHaveBeenCalled();
    expect(postSortMock).toHaveBeenCalled();
  });
});

describe("tableHelpers", () => {
  describe("sortRowsAlphabetically", () => {
    it("should sort an array of rows alphabetically a to z for sortDirection === 1", () => {
      const rows = [{ foo: "baz" }, { foo: "qux" }, { foo: "bar" }];
      const sortRowsMock = jest.fn();
      const column = {
        name: "Header",
        accessor: "foo",
        isSortable: true,
        sortRows: sortRowsMock,
        sortDirection: 1
      };
      const sortedRows = sortRowsAlphabetically(rows, column);

      expect(sortedRows).toEqual([
        { foo: "bar" },
        { foo: "baz" },
        { foo: "qux" }
      ]);
    });

    it("should sort an array of rows alphabetically z to a for sortDirection === -1", () => {
      const rows = [{ foo: "baz" }, { foo: "qux" }, { foo: "bar" }];
      const sortRowsMock = jest.fn();
      const column = {
        name: "Header",
        accessor: "foo",
        isSortable: true,
        sortRows: sortRowsMock,
        sortDirection: -1
      };
      const sortedRows = sortRowsAlphabetically(rows, column);

      expect(sortedRows).toEqual([
        { foo: "qux" },
        { foo: "baz" },
        { foo: "bar" }
      ]);
    });
  });

  describe("updateColumnsSortStatus", () => {
    it("should properly update column sort status when initial sortDirection === 1", () => {
      const sortRowsMock = jest.fn();
      const columns = [
        {
          name: "Header",
          accessor: "foo",
          isSortable: true,
          sortRows: sortRowsMock,
          sortDirection: 1
        }
      ];
      const updatedColumns = updateColumnsSortStatus(columns, columns[0]);

      expect(updatedColumns).toEqual([
        {
          name: "Header",
          accessor: "foo",
          isSortable: true,
          sortRows: sortRowsMock,
          sortDirection: -1,
          isActive: true
        }
      ]);
    });

    it("should properly update column sort status when initial sortDirection === -1", () => {
      const sortRowsMock = jest.fn();
      const columns = [
        {
          name: "Header",
          accessor: "foo",
          isSortable: true,
          sortRows: sortRowsMock,
          sortDirection: -1
        }
      ];
      const updatedColumns = updateColumnsSortStatus(columns, columns[0]);

      expect(updatedColumns).toEqual([
        {
          name: "Header",
          accessor: "foo",
          isSortable: true,
          sortRows: sortRowsMock,
          sortDirection: 1,
          isActive: true
        }
      ]);
    });
  });

  describe("getRowsFilteredBySearch", () => {
    it("should properly filter rows based on a search value", () => {
      const rows = [{ foo: "baz" }, { foo: "qux" }, { foo: "bar" }];

      expect(getRowsFilteredBySearch(rows, "b")).toEqual([
        { foo: "baz" },
        { foo: "bar" }
      ]);
      expect(getRowsFilteredBySearch(rows, "q")).toEqual([{ foo: "qux" }]);
      expect(getRowsFilteredBySearch(rows, "y")).toEqual([]);
    });
  });
});
