import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { circle } from "../../shared/utilities";

const styles = {
  chip: {
    ...circle,
    padding: "0 12px",
    fontSize: "16px",
    fontWeight: 400,
    fontFamily: fonts.body,
    color: colors.grey700,
    height: "24px",
    display: "flex",
    alignItems: "center"
  },
  small: {
    padding: "0 8px",
    fontSize: "12px",
    height: "16px",
    alignItems: "baseline"
  },
  default: {
    background: colors.grey300
  },
  success: {
    background: colors.green700,
    color: colors.white
  },
  error: {
    background: colors.error,
    color: colors.white
  },
  warning: {
    background: colors.yellow700,
    color: colors.grey900
  },
  dark: {
    background: colors.grey700,
    color: colors.white
  },
  light: {
    background: colors.grey100
  }
};

export default styles;
