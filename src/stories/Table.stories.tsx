import * as React from "react";

import Grid from "../components/Grid";
import Pagination, { getDisplayRowsFromPaginatedData } from "../components/Pagination";

import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import TextField from "../components/TextField";
import Typography from "../components/Typography";

import { getUseStyles } from "../shared/helpers";

import {
  getRowsFilteredBySearch,
  sortRowsAlphabetically,
  updateColumnsSortStatus
} from "../components/Table/tableHelpers";
import styles from "../components/Table/Table.stories.jss.js";
import Table from "../components/Table";

const useStyles = getUseStyles(styles);

// Keys should be the column accessor to determine ownership
const rows = [
  {
    col1: "Praesent",
    col2: "lobortis",
    col3: "Aenean",
    col4: "lobortis",
    col5: "Aenean"
  },
  {
    col1: "Curabitur",
    col2: "bibendum",
    col3: "condimentum",
    col4: "bibendum",
    col5: "condimentum"
  },
  {
    col1: "Suspendisse",
    col2: "mollis",
    col3: "ultrices",
    col4: "tincidunt",
    col5: "ultrices"
  },
  {
    col1: "Pellentesque",
    col2: "tincidunt",
    col3: "Maecenas",
    col4: "mollis",
    col5: "Maecenas"
  },
  {
    col1: "laoreet",
    col2: "Nulla",
    col3: "scelerisque",
    col4: "Aenean",
    col5: "scelerisque"
  },
  {
    col1: "Vestibulum",
    col2: "cursus",
    col3: "Donec",
    col4: "scelerisque",
    col5: "Donec"
  },
  {
    col1: "Aliquam",
    col2: "scelerisque",
    col3: "erat",
    col4: "lobortis",
    col5: "erat"
  },
  {
    col1: "Curabitur",
    col2: "bibendum",
    col3: "condimentum",
    col4: "bibendum",
    col5: "condimentum"
  },
  {
    col1: "Suspendisse",
    col2: "mollis",
    col3: "ultrices",
    col4: "Maecenas",
    col5: "ultrices"
  }
];

// accessor is referenced by rows to determine its column
const columns = [
  {
    name: "Column 1",
    accessor: "col1"
  },
  {
    name: "Column 2",
    accessor: "col2"
  },
  {
    name: "Column 3",
    accessor: "col3"
  },
  {
    name: "Column 4",
    accessor: "col4"
  },
  {
    name: "Column 5",
    accessor: "col5"
  }
];

const BasicTable = () => <Table columns={columns} rows={rows} />;

const TableWithScroll = () => (
  <Table columns={columns} rows={rows} maxHeightForScroll={300} />
);

const TableWithSearch = () => {
  const [searchInput, setSearchInput] = React.useState("");
  const [searchedRows, setSearchedRows] = React.useState(rows);

  const onChange = e => {
    const { value } = e.target;

    setSearchInput(value as React.SetStateAction<string>);
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
    setSearchedRows(getRowsFilteredBySearch(rows, value));
  };
  const onSearchCancel = () => setSearchInput("");

  return (
    <Grid direction="column" spacing={3}>
      <TextField
        id="table-search"
        label="Search"
        hideLabel
        placeholder="Search"
        value={searchInput}
        onChange={onChange}
        onSearchCancel={onSearchCancel}
        type="search"
      />
      <Table columns={columns} rows={searchedRows} />
    </Grid>
  );
};

const TableWithCustomCell = () => {
  const RedTextPopUp = (row, key, index) => {
    const redAlert = () => alert(`Red cell clicked ${index}`);
    return (
      <Typography noTopMargin noBottomMargin component="span">
        <div style={{ color: "red", cursor: "pointer" }} onClick={redAlert}>
          {row[key]}
          <div>Click this cell</div>
        </div>
      </Typography>
    );
  };

  const myColumns = [
    {
      name: "Column 1",
      accessor: "col1"
    },
    {
      name: "Column 2",
      accessor: "col2"
    },
    {
      name: "Column 3",
      accessor: "col3",
      Cell: RedTextPopUp
    },
    {
      name: "Column 4",
      accessor: "col4"
    },
    {
      name: "Column 5",
      accessor: "col5"
    }
  ];

  return <Table columns={myColumns} rows={rows} />;
};

const TableWithActions = () => {
  const Actions = (row = {}, key, index) => {
    const classes = useStyles();
    const onEditClick = () => alert(`Edit row ${Object.values(row)}`);
    const onDeleteClick = () => alert(`Delete row ${index}`);

    return (
      <ButtonGroup inline>
        <Button
          variant="text"
          onClick={onEditClick}
          classOverrides={{ size: classes.actions }}
        >
          Edit
        </Button>
        <Button
          variant="text"
          danger
          onClick={onDeleteClick}
          classOverrides={{ size: classes.actions }}
        >
          Delete
        </Button>
      </ButtonGroup>
    );
  };

  const myColumns = [
    {
      name: "Column 1",
      accessor: "col1"
    },
    {
      name: "Column 2",
      accessor: "col2"
    },
    {
      name: "Column 3",
      accessor: "col3"
    },
    {
      name: "Column 4",
      accessor: "col4"
    },
    {
      name: "Actions",
      accessor: "col5",
      Cell: Actions
    }
  ];

  return <Table columns={myColumns} rows={rows} />;
};

const TableWithPagination = () => {
  const classes = useStyles();

  const rowsPerPageOptions = [
    { name: "3", value: 3 },
    { name: "6", value: 6 }
  ];

  // NOTE: getDisplayRowsFromPaginatedData Takes row data, starting page, and
  //  number of results to show per page
  const [displayRows, setDisplayRows] = React.useState(
    getDisplayRowsFromPaginatedData(rows, 1, rowsPerPageOptions[0].value)
  );
  const updateDisplayRows = myDisplayRows => setDisplayRows(myDisplayRows);

  return (
    <Grid
      spacing={3}
      direction="column"
      alignItems="items-start"
      className={classes.left}
    >
      <Table columns={columns} rows={displayRows} />
      <Pagination
        rows={rows}
        totalRows={rows.length}
        rowsPerPageOptions={rowsPerPageOptions}
        updateDisplayRows={updateDisplayRows}
      />
    </Grid>
  );
};

const TableWithColumnSorting = () => {
  // Handles sorted rows for table
  const [sortedRows, setSortedRows] = React.useState(rows);

  // Handles sorting of rows based on column sorted
  const sortRows = column =>
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
    setSortedRows(sortRowsAlphabetically(sortedRows, column));

  const myColumns = [
    {
      name: "Column 1",
      accessor: "col1"
    },
    {
      name: "Column 2",
      accessor: "col2",
      isSortable: true,
      sortRows,
      sortDirection: 1
    },
    {
      name: "Column 3",
      accessor: "col3",
      isSortable: true,
      sortRows,
      sortDirection: 1
    },
    {
      name: "Column 4",
      accessor: "col4",
      isSortable: true,
      sortRows,
      sortDirection: 1
    },
    {
      name: "Column 5",
      accessor: "col5"
    }
  ];

  // The column display will change based on sort status
  const [displayColumns, setDisplayColumns] = React.useState(myColumns);

  // Updates sort direction and active status based on column sorted
  /* eslint-disable  @typescript-eslint/no-unsafe-return */
  const updateColumnsPostSort = column =>
    setDisplayColumns(prevState => updateColumnsSortStatus(prevState, column));
  /* eslint-enable  @typescript-eslint/no-unsafe-return */

  return (
    <Table
      columns={displayColumns}
      rows={sortedRows}
      updateColumnsPostSort={updateColumnsPostSort}
    />
  );
};

const tableStories = {
  BasicTable,
  TableWithScroll,
  TableWithSearch,
  TableWithCustomCell,
  TableWithActions,
  TableWithPagination,
  TableWithColumnSorting
};

export default tableStories;
