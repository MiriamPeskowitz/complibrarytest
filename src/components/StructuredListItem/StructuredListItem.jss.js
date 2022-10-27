import colors from "../../shared/colors";
import { truncate } from "../../shared/utilities";

const styles = {
  truncate,
  nowrap: {
    whiteSpace: "nowrap"
  },
  actions: {
    visibility: "hidden"
  },
  header: {
    height: "24px",
    marginBottom: "4px"
  },
  title: {
    maxWidth: "412px",
    marginTop: "1px",
    marginLeft: "20px",
    marginBlockStart: 0,
    marginBlockEnd: 0
  },
  metadata: {},
  icon: {
    "& svg": {
      width: "16px",
      height: "16px",
      top: "10px",
      position: "absolute",
      fill: colors.blue500
    }
  },
  isRead: {
    fontWeight: "400 !important" // @KLUDGE Overrides typography styles
  },
  isUnread: {
    fontWeight: "600 !important" // @KLUDGE Overrides typography styles
  },
  bodyText: {
    margin: "8px 0 0 20px"
  },
  container: {
    width: "520px",
    height: "92px",
    padding: "5px 8px 8px",
    position: "relative",
    "&:hover": {
      background: colors.grey100,
      "& $actions": {
        visibility: "visible"
      },
      "& $metadata": {
        maxWidth: "120px"
      }
    }
  }
};

export default styles;
