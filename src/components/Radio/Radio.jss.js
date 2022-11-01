import colors from "../../shared/colors";
import { circle, focusEffect } from "../../shared/utilities";

const styles = {
  hover: {
    "&:hover $dot": {
      border: `1px solid ${colors.black}`
    }
  },
  dot: {
    ...circle,
    cursor: "pointer",
    background: colors.white,
    border: `1px solid ${colors.grey500}`,
    width: "14px",
    height: "14px",
    zIndex: 0,
    transitionDuration: "0.2s",
    transitionProperty: "border-color,background-color",
    "&:after": {
      ...circle,
      display: "block",
      position: "absolute",
      transitionDuration: "75ms",
      transitionProperty:
        "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform",
      background: colors.white,
      opacity: 0,
      content: "''",
      width: "6px",
      height: "6px",
      marginLeft: "4px",
      marginTop: "4px"
    },
    "&:focus": {
      ...focusEffect
    },
    "&:hover": {
      borderColor: colors.grey900
    }
  },
  checked: {
    "& $dot": {
      borderColor: colors.blue500,
      background: colors.blue500,
      "&:after": {
        opacity: 1
      }
    }
  },
  disabled: {
    "& $dot": {
      cursor: "not-allowed",
      opacity: 0.5,
      background: colors.grey300
    },
    "& $dot:hover": {
      borderColor: colors.grey500
    }
  },
  error: {
    "& $dot": {
      borderColor: colors.error
    },
    "&$checked $dot": {
      background: colors.error
    }
  }
};

const radio = {
  borderColor: colors.grey500
};

export { styles, radio };
