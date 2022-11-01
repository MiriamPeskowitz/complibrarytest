import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { fullWidth, focusEffect } from "../../shared/utilities";

const styles = {
  danger: {},
  warning: {},
  success: {},
  informational: {},
  leadingIcon: {},
  trailingIcon: {},
  shape: {
    borderRadius: ".25rem"
  },
  default: {
    height: "48px",
    minWidth: "100px",
    width: "max-content",
    fontSize: "16px",
    padding: "2px 16px"
  },
  defaultIcons: {
    "& $leadingIcon": {
      marginRight: ".5rem",
      height: "16px",
      "& svg": {
        height: "16px",
        width: "16px"
      }
    },
    "& $trailingIcon": {
      marginLeft: ".5rem",
      height: "16px",
      "& svg": {
        height: "16px",
        width: "16px"
      }
    }
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    fontFamily: fonts.body,
    fontWeight: "600",
    lineHeight: "1",
    cursor: "pointer",
    transitionProperty: "background-color, color, fill",
    transitionDuration: ".2s",
    "&:focus": {
      ...focusEffect,
      outline: `2px solid ${colors.transparent}`
    },
    "&:disabled": {
      opacity: ".5",
      cursor: "not-allowed"
    },
    "> span": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  icon: {
    display: "flex",
    alignItems: "center"
  },
  compact: {
    padding: "2px 8px",
    minWidth: "45px",
    width: "max-content",
    height: "32px",
    fontSize: "12px",
    "& span": {
      fontSize: "12px"
    }
  },
  compactIcons: {
    "& $leadingIcon": {
      marginRight: ".25rem",
      height: "12px",
      "& svg": {
        height: "12px",
        width: "12px"
      }
    },
    "& $trailingIcon": {
      marginLeft: ".25rem",
      height: "12px",
      "& svg": {
        height: "12px",
        width: "12px"
      }
    }
  },
  fullWidth,
  solid: {
    borderStyle: "none",
    background: colors.blue500,
    color: colors.white,
    "& svg": {
      fill: colors.white
    },
    "&:hover": {
      background: colors.blue700
    },
    "&:active": {
      background: colors.blue900
    },
    "&$danger": {
      background: colors.error,
      color: colors.white,
      "&:hover": {
        background: colors.errorHover
      },
      "&:active": {
        background: colors.errorActive
      }
    },
    "&$success": {
      background: colors.success,
      color: colors.white,
      "&:hover": {
        background: colors.successHover
      },
      "&:active": {
        background: colors.successActive
      }
    }
  },
  outlined: {
    border: `1px solid ${colors.blue500}`,
    background: colors.white,
    color: colors.blue500,
    "& svg": {
      fill: colors.blue500
    },
    "&:hover": {
      background: colors.blue100
    },
    "&:active": {
      background: colors.blue200
    },
    "&$danger": {
      border: `1px solid ${colors.error}`,
      color: colors.error,
      "&:hover": {
        background: colors.errorLight
      }
    },
    "&$success": {
      border: `1px solid ${colors.success}`,
      color: colors.success,
      "&:hover": {
        background: colors.successLight
      }
    }
  },
  inverted: {
    border: `1px solid ${colors.white}`,
    background: colors.transparent,
    color: colors.white,
    "&$danger": {
      background: colors.error,
      color: colors.white,
      "& $leadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $trailingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "&:hover": {
        background: colors.white,
        color: colors.error
      },
      "&:active": {
        background: colors.white,
        color: colors.error
      }
    },
    "&$success": {
      background: colors.green700,
      color: colors.white,
      "& $leadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $trailingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $loadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "&:hover": {
        background: colors.white,
        color: colors.green700
      },
      "&:active": {
        background: colors.white,
        color: colors.green700
      }
    },
    "&$warning": {
      background: colors.yellow700,
      color: colors.white,
      "& $leadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $trailingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $loadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "&:hover": {
        background: colors.white,
        color: colors.yellow700
      },
      "&:active": {
        background: colors.white,
        color: colors.yellow700
      }
    },
    "&$informational": {
      background: colors.blue700,
      color: colors.white,
      "& $leadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $trailingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "& $loadingIcon": {
        "& svg": {
          fill: colors.white
        }
      },
      "&:hover": {
        background: colors.white,
        color: colors.blue700
      },
      "&:active": {
        background: colors.white,
        color: colors.blue700
      }
    }
  },
  text: {
    borderStyle: "none",
    background: colors.transparent,
    color: colors.blue500,
    "&:hover": {
      color: colors.grey900,
      "& $leadingIcon": {
        "& svg": {
          fill: colors.grey900
        }
      },
      "& $trailingIcon": {
        "& svg": {
          fill: colors.grey900
        }
      }
    },
    "&:active": {
      background: colors.blue200
    },
    "& $leadingIcon": {
      "& svg": {
        fill: colors.blue500
      }
    },
    "& $trailingIcon": {
      "& svg": {
        fill: colors.blue500
      }
    },
    "&$danger": {
      color: colors.error,
      "&:hover": {
        color: colors.errorActive
      }
    },
    "&$success": {
      color: colors.success,
      "&:hover": {
        color: colors.successActive
      }
    }
  },
  loading: {
    height: 0,
    visibility: "hidden",
    display: "block"
  },
  loadingIcon: {
    height: "20px",
    width: "22px"
  }
};

export default styles;
