import colors from "../../shared/colors";
import { circle, focusEffect } from "../../shared/utilities";

const styles = {
  switch: {
    ...circle,
    height: "16px",
    width: "32px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:focus": {
      ...focusEffect,
      borderColor: colors.blue500,
      outline: "none"
    }
  },
  thumbTrackContainer: {
    height: "16px"
  },
  thumb: {
    ...circle,
    background: colors.white,
    height: "12px",
    width: "12px",
    transition: "left 0.2s ease"
  },
  on: {
    "& $thumb": {
      marginLeft: "12px"
    }
  },
  off: {
    background: colors.grey500,
    "& $thumb": {
      marginLeft: "-4px"
    },
    "&$enabled:hover": {
      background: colors.grey700
    }
  },
  default: {
    "&$on": {
      background: colors.blue500,
      "&$enabled:hover": {
        background: colors.blue900
      }
    }
  },
  success: {
    background: colors.success,
    "&$enabled:hover": {
      background: colors.green900
    }
  },
  error: {
    background: colors.error,
    "&$enabled:hover": {
      background: colors.errorDark
    }
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5
  },
  enabled: {},
  helper: {
    display: "block",
    marginTop: "0.25rem"
  }
};

export default styles;
