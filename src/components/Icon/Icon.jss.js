import colors from "../../shared/colors";

const styles = {
  tiny: {
    "height": "12px",
    "width": "9px",
    "& svg": {
      height: "12px",
      width: "9px"
    }
  },
  small: {
    "height": "16px",
    "width": "16px",
    "& svg": {
      height: "16px",
      width: "16px"
    }
  },
  medium: {
    "height": "20px",
    "width": "20px",
    "& svg": {
      height: "20px",
      width: "20px"
    }
  },
  large: {
    "height": "32px",
    "width": "32px",
    "& svg": {
      height: "32px",
      width: "32px"
    }
  },
  error: {
    "& svg": {
      fill: colors.error
    }
  },
  warning: {
    "& svg": {
      fill: colors.yellow700
    }
  },
  success: {
    "& svg": {
      fill: colors.success
    }
  },
  info: {
    "& svg": {
      fill: colors.blue700
    }
  },
  default: {
    "& svg": {
      fill: colors.black
    }
  }
};

export default styles;
