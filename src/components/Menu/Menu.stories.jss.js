import colors from "../../shared/colors";

const styles = {
  greyBackground: {
    background: colors.grey700,
    padding: "15px"
  },
  // status override classes
  // !important is added to overwrite the Button's default inverted classes.
  // This is done because inverted styles have nested status styles that we can't easily target.
  pinkInverted: {
    background: "#8A288A !important",
    "&:hover": {
      background: `${colors.white} !important`,
      color: "#8A288A",
      "& path": {
        fill: "#8A288A"
      }
    },
    "&:active": {
      background: `${colors.white} !important`,
      color: "#8A288A",
      "& path": {
        fill: "#8A288A"
      }
    },
    "& path": {
      fill: colors.white
    }
  },
  orangeInverted: {
    background: "#933506 !important",
    "&:hover": {
      background: `${colors.white} !important`,
      color: "#933506",
      "& path": {
        fill: "#933506"
      }
    },
    "&:active": {
      background: `${colors.white} !important`,
      color: "#933506",
      "& path": {
        fill: "#933506"
      }
    },
    "& path": {
      fill: colors.white
    }
  },
  yellowInverted: {
    background: "#605506 !important",
    "&:hover": {
      background: `${colors.white} !important`,
      color: "#605506",
      "& path": {
        fill: "#605506"
      }
    },
    "&:active": {
      background: `${colors.white} !important`,
      color: "#605506",
      "& path": {
        fill: "#605506"
      }
    },
    "& path": {
      fill: colors.white
    }
  },
  greenInverted: {
    background: "#026438 !important",
    "&:hover": {
      background: `${colors.white} !important`,
      color: "#026438",
      "& path": {
        fill: "#026438"
      }
    },
    "&:active": {
      background: `${colors.white} !important`,
      color: "#026438",
      "& path": {
        fill: "#026438"
      }
    },
    "& path": {
      fill: colors.white
    }
  },
  blueInverted: {
    background: "#020a75 !important",
    "&:hover": {
      background: `${colors.white} !important`,
      color: "#020a75",
      "& path": {
        fill: "#020a75"
      }
    },
    "&:active": {
      background: `${colors.white} !important`,
      color: "#020a75",
      "& path": {
        fill: "#020a75"
      }
    },
    "& path": {
      fill: colors.white
    }
  }
};

export default styles;
