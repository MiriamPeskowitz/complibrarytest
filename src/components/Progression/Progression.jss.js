import colors from "../../shared/colors";
import { circle } from "../../shared/utilities";

const dividerLineHeight = 2;
const circleSize = 32;

const styles = {
  active: {
    color: colors.blue500
  },
  inactive: {
    color: colors.grey900
  },
  completed: {
    color: colors.grey900
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    maxWidth: "100%"
  },
  stepWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "183px"
  },
  stepNumber: {
    ...circle,
    width: `${circleSize - 2 * dividerLineHeight}px`,
    height: `${circleSize - 2 * dividerLineHeight}px`,
    textAlign: "center",
    "&$active": {
      border: `${dividerLineHeight}px solid ${colors.blue500}`,
      background: colors.white
    },
    "&$inactive": {
      border: `${dividerLineHeight}px solid ${colors.grey300}`,
      background: colors.white
    },
    "&$completed": {
      border: `${dividerLineHeight}px solid ${colors.blue500}`,
      background: colors.white,
      display: "flex",
      "& svg": {
        width: `${circleSize}px`,
        top: 0,
        marginLeft: `-${dividerLineHeight}px`,
        position: "absolute"
      },
      "& svg path": {
        fill: colors.blue500
      }
    }
  },
  stepDescription: {
    marginTop: "0.25rem",
    textAlign: "center",
    height: "46px",
    overflow: "auto",
    "& p": {
      lineHeight: "normal"
    }
  },
  dividerLine: {
    position: "absolute",
    height: dividerLineHeight,
    top: "calc(25% - 5px)",
    left: `calc(50% + ${circleSize / 2}px)`,
    width: "82%",
    "&$active": {
      background: colors.blue500
    },
    "&$inactive": {
      background: colors.grey300
    },
    "&$completed": {
      background: colors.blue500
    }
  }
};

export default styles;
