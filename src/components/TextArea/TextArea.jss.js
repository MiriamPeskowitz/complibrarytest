import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { focusEffect } from "../../shared/utilities";
import { readOnlyFieldState } from "../../shared/common";

const styles = {
  field: {
    fontFamily: fonts.body,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    color: colors.grey700,
    outline: "none",
    background: colors.white,
    borderRadius: "0.25rem",
    transitionProperty: "border-color",
    transitionDuration: "0.2s",
    boxSizing: "border-box",
    padding: "0.5rem",
    width: "256px",
    height: "82px",
    flexShrink: 0,
    marginBottom: "4px",
    verticalAlign: "top",
    "&::placeholder": {
      color: colors.grey500
    }
  },
  helper: {
    display: "block",
    marginTop: "0.25rem"
  },
  helperError: {
    color: `${colors.error} !important`
  },
  characterCount: {
    textAlign: "right"
  },
  default: {
    border: `1px solid ${colors.grey500}`,
    "&:focus": {
      ...focusEffect,
      borderColor: colors.grey500,
      outline: "none"
    },
    "&:hover": {
      borderColor: colors.grey700
    },
    "&:active:focus": {
      borderColor: colors.blue500
    },
    "&:active:hover": {
      borderColor: colors.blue500
    },
    "&:active": {
      borderColor: colors.blue500
    }
  },
  success: {
    border: `1px solid ${colors.success}`,
    "&:focus": {
      ...focusEffect,
      borderColor: colors.success,
      outline: "none"
    },
    "&:hover": {
      borderColor: colors.success
    },
    "&:active": {
      borderColor: colors.success
    }
  },
  error: {
    border: `1px solid ${colors.error}`,
    "&:focus": {
      ...focusEffect,
      borderColor: colors.error,
      outline: "none"
    },
    "&:hover": {
      borderColor: colors.error
    },
    "&:active": {
      borderColor: colors.error
    }
  },
  disabled: {
    border: `1px solid ${colors.grey500}`,
    cursor: "not-allowed",
    background: colors.grey300
  },
  noBottomMargin: {
    marginBottom: 0
  },
  readOnly: {
    ...readOnlyFieldState
  },
  container: {
    width: "fit-content"
  }
};

export default styles;
