import React from "react";

import ListItem from "../components/ListItem";
import Loader from "../components/Loader";
import OrderedList from "../components/OrderedList";
import Typography from "../components/Typography";

import Pagination, { getDisplayRowsFromPaginatedData } from "../components/Pagination";

const Primary = () => {
  const initialRows = [
    { children: "Praesent vel ex lobortis" },
    { children: "Aenean bibendum" },
    { children: "Curabitur nisi ipsum" },
    { children: "Duis bibendum condimentum" },
    { children: "Cras lacinia feugiat" },
    { children: "Suspendisse mollis ultrices" },
    { children: "Praesent vel ex lobortis" },
    { children: "Curabitur volutpat dui dictum" },
    { children: "Vestibulum cursus" },
    { children: "Donec et sem lectus" },
    { children: "Pellentesque tincidunt" },
    { children: "Maecenas vel laoreet quam" },
    { children: "Nulla a leo luctus" },
    { children: "Aliquam scelerisque erat" },
    { children: "Sed arcu ipsum" }
  ];
  const rowsPerPageOptions = [
    { name: "5", value: 5 },
    { name: "10", value: 10 },
    { name: "15", value: 15 }
  ];

  const [rows, setRows] = React.useState(initialRows);
  const [displayRows, setDisplayRows] = React.useState(
    getDisplayRowsFromPaginatedData(rows, 1, 5)
  );

  const updateDisplayRows = myDisplayRows => {
    setDisplayRows(myDisplayRows);
  };

  return (
    <>
      <Typography noTopMargin noBottomMargin variant="h1">
        Primary
      </Typography>
      <OrderedList>
        {displayRows.map((r, i) => (
          <ListItem key={i}>
            <Typography noTopMargin component="span">
              {r.children}
            </Typography>
          </ListItem>
        ))}
      </OrderedList>
      <Pagination
        rows={rows}
        totalRows={rows.length}
        rowsPerPageOptions={rowsPerPageOptions}
        updateDisplayRows={updateDisplayRows}
      />
    </>
  );
};

const ServerSideNext = () => {
  const serverSideRows = [
    { children: "Sed vel ex lobortis" },
    { children: "Aenean bibendum" },
    { children: "Aliquam nisi ipsum" },
    { children: "Nulla bibendum condimentum" },
    { children: "Maecenas lacinia feugiat" },
    { children: "Suspendisse mollis ultrices" },
    { children: "Pellentesque vel ex lobortis" },
    { children: "Donec volutpat dui dictum" },
    { children: "Vestibulum cursus" },
    { children: "Praesent et sem lectus" },
    { children: "Cras tincidunt" },
    { children: "Duis vel laoreet quam" },
    { children: "Curabitur a leo luctus" },
    { children: "Aenean scelerisque erat" },
    { children: "Praesent arcu ipsum" }
  ];
  const initialRows = [
    { children: "Praesent vel ex lobortis" },
    { children: "Aenean bibendum" },
    { children: "Curabitur nisi ipsum" },
    { children: "Duis bibendum condimentum" },
    { children: "Cras lacinia feugiat" },
    { children: "Suspendisse mollis ultrices" },
    { children: "Praesent vel ex lobortis" },
    { children: "Curabitur volutpat dui dictum" },
    { children: "Vestibulum cursus" },
    { children: "Donec et sem lectus" },
    { children: "Pellentesque tincidunt" },
    { children: "Maecenas vel laoreet quam" },
    { children: "Nulla a leo luctus" },
    { children: "Aliquam scelerisque erat" },
    { children: "Sed arcu ipsum" }
  ];
  const rowsPerPageOptions = [
    { name: "5", value: 5 },
    { name: "10", value: 10 },
    { name: "15", value: 15 }
  ];
  const ROW_TOTAL = 60;

  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState(initialRows);
  const [displayRows, setDisplayRows] = React.useState(
    getDisplayRowsFromPaginatedData(rows, 1, 5)
  );

  const updateDisplayRows = myDisplayRows => {
    setDisplayRows(myDisplayRows);
  };

  const serverSideNext = (page, rowsPerPage, update) => {
    // We've reached the maximum number of rows
    if (rows.length >= ROW_TOTAL) {
      update(rows);
      return;
    }

    setIsLoading(true);

    // Simulate xhr
    window.setTimeout(() => {
      const newRows = rows.concat(serverSideRows);

      setRows(newRows);

      update(newRows);

      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Typography noTopMargin noBottomMargin variant="h1">
        Server Side Next Button (Simulated)
      </Typography>
      {isLoading && <Loader />}
      {!isLoading && (
        <OrderedList>
          {displayRows.map((r, i) => (
            <ListItem key={i}>
              <Typography noTopMargin component="span">
                {r.children}
              </Typography>
            </ListItem>
          ))}
        </OrderedList>
      )}
      <Pagination
        rows={rows}
        totalRows={ROW_TOTAL}
        rowsPerPageOptions={rowsPerPageOptions}
        updateDisplayRows={updateDisplayRows}
        serverSideNext={serverSideNext}
      />
    </>
  );
};

const paginationStories = {
  Primary,
  ServerSideNext
};

export default paginationStories;
