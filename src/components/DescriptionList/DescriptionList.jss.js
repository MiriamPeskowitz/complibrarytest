const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0,
    listStyle: "none"
  },
  table: {
    "display": "table",
    "paddingLeft": 0,
    "listStyle": "none",
    "& > *": {
      marginBottom: "8px"
    },
    "& > *:last-child": {
      marginBottom: 0
    }
  }
};

export default styles;
