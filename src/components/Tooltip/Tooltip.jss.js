import fonts from "../../shared/fonts";
import colors from "../../shared/colors";

const tooltipInteraction = {
  background: colors.white,
  color: colors.grey700,
  textAlign: "left",
  zIndex: 10,
  height: "auto",
  width: "max-content",
  minWidth: "50px",
  maxWidth: "304px",
  position: "absolute",
  clipPath: "unset",
  overflow: "visible",
  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "0.125rem",
  fontSize: "1rem",
  padding: "8px",
  display: "block"
};

const styles = {
  tooltip: {
    fontFamily: fonts.body,
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    "&:hover + $text": {
      ...tooltipInteraction
    },
    "&:focus + $text": {
      ...tooltipInteraction
    },
    "&:focus": {
      outline: "none"
    }
  },
  text: {
    "&$topLeft": {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-100%)"
    },
    "&$topRight": {
      bottom: "100%",
      left: "50%"
    },
    "&$bottomLeft": {
      top: "100%",
      left: "50%",
      transform: "translateX(-100%)"
    },
    "&$bottomRight": {
      top: "100%",
      left: "50%"
    }
  },
  topLeft: {},
  topRight: {},
  bottomLeft: {},
  bottomRight: {},
  hidden: {
    position: "absolute",
    padding: 0,
    border: "none",
    margin: "-1px",
    overflow: "hidden",
    display: "none",
    clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
  }
};

export default styles;
