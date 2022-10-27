import colors from "../../shared/colors";

const styles = {
  last: {},
  separator: {
    userSelect: "none",
    color: colors.grey700,
    fontWeight: 400,
    fontSize: "10px",
    marginLeft: "0.5rem",
    display: "flex",
    "& svg": {
      width: "10px",
      height: "10px"
    },
    "& path": {
      fill: colors.grey700
    }
  },
  breadcrumb: {
    color: colors.blue500,
    lineHeight: "24px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    userSelect: "none",
    fontSize: "16px",
    "&$last": {
      fontWeight: 400,
      "& a": {
        color: colors.grey700
      },
      "& a:hover": {
        cursor: "default"
      }
    }
  }
};

export default styles;
