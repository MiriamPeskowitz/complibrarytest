import colors from "../../shared/colors";

const padding = 16;
const outerSpacing = 4;

const styles = {
  enabled: {},
  defaultWidth: {
    width: "236px"
  },
  option: {
    "height": "40px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderRadius": "4px",
    "paddingRight": `${padding - outerSpacing}px`,
    "cursor": "pointer",
    "marginLeft": `${outerSpacing}px`,
    "& svg": {
      width: "16px",
      height: "16px"
    },
    "& svg path": {
      fill: colors.blue500
    },
    "&$enabled&:hover": {
      "background": colors.blue500,
      "& $optionTextColor": {
        color: colors.white
      },
      "& svg path": {
        fill: colors.white
      }
    }
  },
  optionText: {
    display: "flex",
    alignItems: "center",
    paddingLeft: `${padding - outerSpacing}px`
  },
  optionTextColor: {
    "color": colors.grey900,
    "&:hover": {
      color: colors.white
    }
  },
  disabledOptionTextColor: {
    color: colors.grey500
  },
  disabled: {
    cursor: "not-allowed"
  },
  selected: {
    fontWeight: "600 !important" // @KLUDGE: Overrides base `p` typography
  }
};

export default styles;
