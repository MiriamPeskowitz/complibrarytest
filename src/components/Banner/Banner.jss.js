import colors from "../../shared/colors";
import { centerX } from "../../shared/utilities";

const styles = {
  centerFixed: {
    ...centerX,
    position: "fixed"
  },
  top: {
    top: "8px"
  },
  bottom: {
    bottom: "8px"
  },
  banner: {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1), 0 12px 24px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    width: "max-content",
    "& svg": {
      height: "16px",
      width: "16px",
      "& path": {
        fill: colors.white
      }
    }
  },
  error: {
    background: colors.red700
  },
  informational: {
    background: colors.blue700
  },
  success: {
    background: colors.green700
  },
  warning: {
    background: colors.yellow700
  },
  bannerWithAction: {
    padding: "8px 16px"
  },
  bannerWithoutAction: {
    padding: "12px 16px"
  },
  message: {
    fontWeight: 600,
    maxWidth: "660px",
    marginLeft: "17px"
  },
  actionButton: {
    "& button": {
      color: colors.white,
      border: `1px solid ${colors.white}`,
      marginLeft: "16px"
    }
  },
  dismissButton: {
    marginLeft: "19px",
    padding: "4px"
  }
};

export default styles;
