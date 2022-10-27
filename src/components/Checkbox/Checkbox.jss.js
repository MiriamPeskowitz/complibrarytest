import colors from "../../shared/colors";
import { focusEffect } from "../../shared/utilities";

const styles = {
  fieldContainer: {
    display: "flex",
    alignItems: "center"
  },
  checked: {
    "& $checkbox:hover": {
      borderColor: colors.blue500
    },
    "& svg": {
      fill: colors.blue500
    }
  },
  disabled: {
    "& $checkbox": {
      cursor: "not-allowed",
      opacity: 0.5,
      background: colors.grey300
    },
    "& $checkbox:hover": {
      borderColor: colors.grey500
    }
  },
  error: {
    "& $checkbox": {
      borderColor: colors.error
    },
    "& $checkbox:hover": {
      borderColor: colors.error
    },
    "&$checked $checkmarkIcon svg path": {
      fill: colors.error
    }
  },
  checkbox: {
    cursor: "pointer",
    background: colors.white,
    border: `1px solid ${colors.grey500}`,
    height: "14px",
    width: "14px",
    borderRadius: "0.125rem",
    transitionDuration: 75,
    transitionProperty:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    "&:focus": {
      ...focusEffect
    },
    "&:hover": {
      borderColor: colors.grey900
    }
  },
  checkmarkIcon: {
    cursor: "pointer",
    height: "16px",
    marginLeft: "-16px",
    "& svg": {
      height: "16px",
      width: "16px"
    }
  },
  helper: {
    marginTop: "-0.5rem",
    display: "block"
  }
};

const check = {
  borderColor: colors.grey500
};

export { styles, check };
