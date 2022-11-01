import colors from "../../shared/colors";
import { dropShadow, truncate } from "../../shared/utilities";

const styles = {
  truncate,
  container: {
    ...dropShadow,
    background: colors.white,
    borderRadius: "0.125rem",
    width: "384px",
    padding: "12px 16px 8px 16px"
  },
  notification: {
    background: colors.white,
    color: colors.grey700,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    "& svg": {
      height: "16px",
      width: "16px",
      marginRight: "1rem",
      flexShrink: 0
    },
    "& p": {
      fontWeight: 600
    }
  },
  informational: {
    "& path": {
      fill: colors.blue500
    }
  },
  success: {
    "& p": {
      color: colors.success
    },
    "& svg": {
      fill: colors.success
    }
  },
  error: {
    "& p": {
      color: colors.error
    },
    "& svg": {
      fill: colors.error
    }
  },
  buttonGroup: {
    marginTop: "8px",
    justifyContent: "flex-end"
  }
};

export default styles;
