import colors from "../../shared/colors";
import { fullWidth, hidden } from "../../shared/utilities";
import {
  field,
  defaultFieldState,
  errorFieldState,
  successFieldState,
  readOnlyFieldState
} from "../../shared/common";

const padding = 16;

const styles = {
  fullWidth,
  regularWidth: {
    width: "256px"
  },
  field: {
    ...field,
    "&$leadingIcon": {
      paddingLeft: "40px"
    },
    "&$trailingIcon": {
      paddingRight: "40px"
    }
  },
  fieldContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "4px"
  },
  leadingIcon: {
    "& svg, & button": {
      width: "16px",
      height: "16px",
      position: "absolute",
      marginTop: "-8px", // @KLUDGE: align-items: "center" needs help here
      marginLeft: `${padding}px`
    },
    "& svg path": {
      // NOTE: Purposefully made darker than in design specs for accessibility
      fill: colors.grey700
    }
  },
  searchCancelActive: {
    display: "inline",
    cursor: "pointer"
  },
  searchCancelInactive: {
    ...hidden,
    cursor: "pointer"
  },
  nonStatusIcon: {},
  trailingIcon: {
    "& svg, & button": {
      width: "16px",
      height: "16px",
      marginLeft: `-${padding * 2}px`,
      marginTop: "3px" // @KLUDGE: align-items: "center" needs help here
    },
    "&$nonStatusIcon svg path": {
      // NOTE: Purposefully made darker than in design specs for accessibility
      fill: colors.grey700
    }
  },
  errorIcon: {
    "& svg": {
      fill: colors.error
    }
  },
  successIcon: {
    "& svg": {
      fill: colors.success
    }
  },
  helper: {
    display: "block",
    marginTop: "0.25rem"
  },
  default: {
    ...defaultFieldState
  },
  success: {
    ...successFieldState
  },
  error: {
    ...errorFieldState
  },
  disabled: {
    border: `1px solid ${colors.grey500}`,
    cursor: "not-allowed",
    background: colors.grey300
  },
  noBottomMargin: {
    marginBottom: 0
  },
  readOnly: {
    ...readOnlyFieldState
  }
};

export default styles;
