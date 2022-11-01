import colors from "../../shared/colors";

const styles = {
  greyBackground: {
    background: colors.grey700,
    padding: "15px"
  },
  statusPadding: {
    padding: "15px"
  },
  // status override classes
  pinkSolid: {
    borderStyle: "none",
    background: "#8A288A",
    color: colors.white,
    "&:hover": {
      background: "#7d247d"
    },
    "&:active": {
      background: "#7d247d"
    }
  },
  orangeSolid: {
    borderStyle: "none",
    background: "#933506",
    color: colors.white,
    "&:hover": {
      background: "#b0592e"
    },
    "&:active": {
      background: "#b0592e"
    }
  },
  yellowSolid: {
    borderStyle: "none",
    background: "#605506",
    color: colors.white,
    "&:hover": {
      background: "#665c02"
    },
    "&:active": {
      background: "#665c02"
    }
  },
  greenSolid: {
    borderStyle: "none",
    background: "#026438",
    color: colors.white,
    "&:hover": {
      background: "#004023"
    },
    "&:active": {
      background: "#004023"
    }
  },
  blueSolid: {
    borderStyle: "none",
    background: "#020a75",
    color: colors.white,
    "&:hover": {
      background: "#000440"
    },
    "&:active": {
      background: "#000440"
    }
  },
  pinkOutline: {
    border: "1px solid #8A288A",
    background: colors.white,
    color: "#8A288A",
    "&:hover": {
      background: "#FFFAFF"
    },
    "&:active": {
      background: "#FFFAFF"
    }
  },
  orangeOutline: {
    border: "1px solid #933506",
    background: colors.white,
    color: "#933506",
    "&:hover": {
      background: "#FEF5F1"
    },
    "&:active": {
      background: "#FEF5F1"
    }
  },
  yellowOutline: {
    border: "1px solid #605506",
    background: colors.white,
    color: "#605506",
    "&:hover": {
      background: "#FFFDF0"
    },
    "&:active": {
      background: "#FFFDF0"
    }
  },
  greenOutline: {
    border: "1px solid #026438",
    background: colors.white,
    color: "#026438",
    "&:hover": {
      background: "#FAFFFD"
    },
    "&:active": {
      background: "#FAFFFD"
    }
  },
  blueOutline: {
    border: "1px solid #020a75",
    background: colors.white,
    color: "#020a75",
    "&:hover": {
      background: "#ebecff"
    },
    "&:active": {
      background: "#ebecff"
    }
  },
  pinkInverted: {
    background: "#8A288A",
    "&:hover": {
      background: colors.white,
      color: "#8A288A"
    },
    "&:active": {
      background: colors.white,
      color: "#8A288A"
    }
  },
  orangeInverted: {
    background: "#933506",
    "&:hover": {
      background: colors.white,
      color: "#933506"
    },
    "&:active": {
      background: colors.white,
      color: "#933506"
    }
  },
  yellowInverted: {
    background: "#605506",
    "&:hover": {
      background: colors.white,
      color: "#605506"
    },
    "&:active": {
      background: colors.white,
      color: "#605506"
    }
  },
  greenInverted: {
    background: "#026438",
    "&:hover": {
      background: colors.white,
      color: "#026438"
    },
    "&:active": {
      background: colors.white,
      color: "#026438"
    }
  },
  blueInverted: {
    background: "#020a75",
    "&:hover": {
      background: colors.white,
      color: "#020a75"
    },
    "&:active": {
      background: colors.white,
      color: "#020a75"
    }
  }
};

export default styles;
