import colors from "../../shared/colors";
import { dropShadow, focusEffect } from "../../shared/utilities";

const styles = {
  checked: {
    "&$tile": {
      borderColor: colors.blue500
    },
    "&$tile:hover": {
      borderColor: colors.blue500
    }
  },
  disabled: {
    "&$tile:hover": {
      borderColor: colors.transparent
    },
    "&$tile": {
      cursor: "not-allowed"
    }
  },
  error: {
    "&$tile": {
      borderColor: colors.error
    },
    "&$tile:hover": {
      borderColor: colors.error
    }
  },
  unclickable: {
    "&$tile:hover": {
      borderColor: colors.transparent
    },
    "&$tile": {
      cursor: "default"
    }
  },
  tile: {
    ...dropShadow,
    cursor: "pointer",
    border: `1px solid ${colors.transparent}`,
    borderRadius: "0.125rem",
    padding: "0 16px",
    width: "262px",
    height: "62px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    "&:focus": {
      ...focusEffect
    },
    "&:hover": {
      borderColor: colors.grey900,
      "@global": {
        ".bdt-global-radio": {
          borderColor: colors.grey900
        },
        ".bdt-global-check": {
          borderColor: colors.grey900
        }
      }
    }
  },
  autoWidth: {
    "&$tile": {
      width: "max-content"
    }
  }
};

export default styles;
