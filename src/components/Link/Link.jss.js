import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { truncate, srOnly } from "../../shared/utilities";

const inactive = {
  opacity: 0.5,
  cursor: "not-allowed"
};

const styles = {
  active: {},
  inactive: {
    ...inactive,
    "&:hover": {
      ...inactive
    },
    "&:focus": {
      ...inactive
    },
    "&$default&$link": {
      "&:hover": {
        ...inactive,
        color: colors.blue500
      },
      "& span:first-child": {
        borderColor: colors.blue400
      }
    },
    "&$light&$link&:hover": {
      ...inactive,
      color: colors.blue400,
      "& span:first-child": {
        borderColor: colors.blue400
      }
    },
    "&$white&$link&:hover": {
      opacity: 0.5
    }
  },
  typography: {
    fontFamily: fonts.link
  },
  underlined: {
    textDecoration: "underline"
  },
  "external-icon": {
    marginLeft: "0.25rem",
    height: "1rem",
    width: "1rem"
  },
  link: {
    textDecoration: "none",
    lineHeight: "1.5rem",
    transitionProperty: "all",
    transitionDuration: "0.2s",
    display: "inline-flex",
    alignItems: "center"
  },
  default: {
    "&$link": {
      color: colors.blue500,
      "&:hover": {
        color: colors.blue400,
        "& svg": {
          fill: colors.blue400
        },
        "&span:first-child": {
          borderColor: colors.blue400
        }
      },
      "&$active": {
        color: colors.blue400,
        "& svg": {
          fill: colors.blue400
        }
      },
      "&span:first-child": {
        borderColor: colors.blue500
      }
    },
    "& svg": {
      fill: colors.blue500,
      transitionProperty: "all",
      transitionDuration: "0.2s"
    }
  },
  light: {
    "&$link": {
      color: colors.blue400,
      "&:hover": {
        color: colors.blue200,
        "& svg": {
          fill: colors.blue200
        }
      },
      "&$active": {
        color: colors.blue200,
        "& svg": {
          fill: colors.blue200
        }
      },
      "&span:first-child": {
        borderColor: colors.blue400
      }
    },
    "& svg": {
      fill: colors.blue400,
      transitionProperty: "all",
      transitionDuration: "0.2s"
    }
  },
  white: {
    "&$link": {
      color: colors.white,
      fontWeight: 700,
      "&:hover": {
        opacity: 0.8
      },
      "&span:first-child": {
        borderColor: colors.white
      }
    },
    "& svg": {
      fill: colors.white
    }
  },
  hoverContent: {
    padding: "0.5rem"
  },
  truncate: {
    ...truncate,
    width: "250px",
    verticalAlign: "top"
  },
  srOnly
};

export default styles;
