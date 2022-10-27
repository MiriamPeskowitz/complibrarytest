import colors from "../../shared/colors";
import { square, fullWidth } from "../../shared/utilities";

const styles = {
  active: {},
  danger: {},
  shape: {
    ...square
  },
  tab: {
    color: `${colors.grey700} !important`, // @KLUDGE: Overrides button text
    boxShadow: `0 2px 0 ${colors.grey300}`,
    margin: "0 auto", // Fixes automatic full width when in flex grid
    "& path": {
      fill: `${colors.grey700}`
    },
    "&$active": {
      color: `${colors.blue500} !important`, // @KLUDGE: Overrides button text
      background: colors.transparent,
      boxShadow: `0 2px 0 ${colors.blue500}`,
      "& path": {
        fill: `${colors.blue500}`
      }
    },
    "&:hover": {
      color: `${colors.blue500} !important`, // @KLUDGE: Overrides button text
      background: colors.blue100,
      boxShadow: `0 2px 0 ${colors.blue500}`,
      "& path": {
        fill: `${colors.blue500}`
      }
    }
  },
  fullWidth,
  compact: {
    height: "48px"
  }
};

export default styles;
