import { circle, square } from "../../shared/utilities";
import colors from "../../shared/colors";

const styles = {
  buttonIcon: {
    fontSize: 0,
    minWidth: 0,
    "& span": {
      top: 0
    },
    "& svg": {
      margin: 0,
      padding: 0,
      maxHeight: "none"
    }
  },
  tiny: {
    height: "20px",
    width: "20px",
    padding: 0,
    "& svg": {
      height: "12px",
      width: "9px"
    }
  },
  small: {
    height: "32px",
    width: "32px",
    "& svg": {
      height: "16px",
      width: "16px"
    }
  },
  medium: {
    height: "48px",
    width: "48px",
    "& svg": {
      height: "20px",
      width: "20px"
    }
  },
  large: {
    height: "72px",
    width: "72px",
    "& svg": {
      height: "32px",
      width: "32px"
    }
  },
  ghost: {
    border: "none",
    background: "none",
    color: colors.blue500,
    "&:hover": {
      background: colors.blue100
    },
    "&:active": {
      background: colors.blue200
    },
    "& svg": {
      fill: colors.blue500
    }
  },
  square,
  circle
};

export default styles;
