import colors from "../../shared/colors";
import { backdrop, dropShadow, hidden } from "../../shared/utilities";

const padding = 16;
const buttonHeight = 48;
const compactButtonHeight = 32;
const textButtonHeight = 24;

const styles = {
  menu: {},
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  defaultWidth: {
    width: "250px"
  },
  normal: {
    display: "flex",
    "& $menu": {
      "&:focus": {
        outline: "none",
        boxShadow: "none"
      }
    }
  },
  options: {
    ...dropShadow,
    border: `1px solid ${colors.transparent}`,
    background: colors.white,
    borderRadius: "4px",
    listStyle: "none",
    padding: "4px 4px 4px",
    paddingInlineStart: 0,
    zIndex: 1,
    position: "absolute"
  },
  optionsCompact: {
    marginTop: `${compactButtonHeight + padding / 2}px`
  },
  optionsDefault: {
    marginTop: `${buttonHeight + padding / 2}px`
  },
  optionsText: {
    marginTop: `${textButtonHeight + padding / 2}px`
  },
  enabled: {},
  helper: {
    display: "block",
    marginTop: "0.25rem"
  },
  noBottomMargin: {
    marginBottom: 0
  },
  open: {
    display: "block"
  },
  closed: {
    ...hidden
  },
  backdrop: {
    ...backdrop,
    background: colors.transparent
  },
  textVariantDefaultSize: {
    height: `${textButtonHeight}px`,
    padding: 0,
    fontSize: "16px"
  },
  textVariantCompactSize: {
    height: `${textButtonHeight}px`,
    padding: 0,
    fontSize: "12px"
  }
};

export default styles;
