import {
  field,
  defaultFieldState,
  errorFieldState,
  successFieldState
} from "../../shared/common";

import { readOnlyFieldState } from "../../shared/common";

const fieldWidth = 81;

const styles = {
  container: {
    "width": `${fieldWidth}px`,
    "& input::-webkit-inner-spin-button": {
      display: "none"
    },
    "display": "flex",
    "justifyContent": "space-between",
    "marginBottom": "4px"
  },
  field: {
    ...field,
    "width": `${fieldWidth + 1}px`,
    "paddingRight": "38px",
    "&:hover + $spinButtonContainer": {
      visibility: "visible"
    },
    "&:focus + $spinButtonContainer": {
      visibility: "visible"
    },
    "&:active + $spinButtonContainer": {
      visibility: "visible"
    }
  },
  default: {
    ...defaultFieldState
  },
  error: {
    ...errorFieldState
  },
  success: {
    ...successFieldState
  },
  disabled: {
    "opacity": ".5",
    "cursor": "not-allowed",
    "& + $spinButtonContainer": {
      visibility: "visible"
    }
  },
  spinButtonContainer: {
    "marginTop": "1px",
    "marginLeft": "-33px",
    "visibility": "hidden",
    "&:hover": {
      visibility: "visible"
    },
    "&:focus": {
      visibility: "visible"
    },
    "&:active": {
      visibility: "visible"
    }
  },
  spinButton: {
    "&:focus": {
      boxShadow: "none !important" // KLUDGE: Overrides main button styles
    }
  },
  spinButtonSize: {
    "width": "32px",
    "height": "23px",
    "& svg": {
      width: "16px",
      height: "16px"
    }
  },
  noBottomMargin: {
    marginBottom: 0
  },
  readOnly: {
    ...readOnlyFieldState
  }
};

export default styles;
