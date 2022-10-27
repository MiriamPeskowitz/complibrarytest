import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { scrollEffect } from "../../shared/utilities";

const styles = {
  table: {
    borderCollapse: "collapse",
    borderTop: `1px solid ${colors.grey300}`
  },
  headerCell: {
    padding: "0 16px",
    background: colors.grey100,
    minWidth: "216px",
    height: "30px",
    textAlign: "left",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    fontFamily: fonts.headers,
    "&:hover": {
      background: colors.blue100
    },
    "&:active": {
      background: colors.grey300
    }
  },
  bodyCell: {
    padding: "1rem"
  },
  row: {
    borderBottom: `1px solid ${colors.grey300}`,
    borderLeft: `1px solid ${colors.grey300}`,
    borderRight: `1px solid ${colors.grey300}`
  },
  bodyRow: {
    "&:hover": {
      background: colors.blue100,
      borderLeft: `2px solid ${colors.blue500}`
    }
  },
  tableScroll: {
    display: "inline-block",
    overflow: "auto"
  },
  scroll: {
    ...scrollEffect
  }
};

export default styles;
