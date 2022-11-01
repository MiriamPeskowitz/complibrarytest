/**
 * common.js
 *
 * Creates large, reusable patterns to duplicate appearance between related
 * components in cases where they don't directly compose/inherit.
 */

import colors from "./colors";
import fonts from "./fonts";
import { focusEffect } from "./utilities";

const padding = 16;

const field = {
  fontFamily: fonts.body,
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  color: colors.grey700,
  outline: "none",
  background: colors.white,
  borderRadius: "0.25rem",
  transitionProperty: "border-color",
  transitionDuration: "0.2s",
  boxSizing: "border-box",
  padding: `12px ${padding}px`,
  height: "48px",
  "&::placeholder": {
    color: colors.grey500
  },
  "&::-webkit-search-cancel-button": {
    appearance: "none"
  },
  "&:-webkit-autofill": {
    fontSize: "16px",
    "-webkit-box-shadow": "0 0 0 30px white inset !important"
  },
  "&:-webkit-autofill:hover": {
    background: colors.white
  },
  "&:-webkit-autofill:focus": {
    background: colors.white
  }
};

const defaultFieldState = {
  "border": `1px solid ${colors.grey500}`,
  "&:focus": {
    ...focusEffect,
    borderColor: colors.grey500,
    outline: "none"
  },
  "&:hover": {
    borderColor: colors.grey700
  },
  "&:active:focus": {
    borderColor: colors.blue500
  },
  "&:active:hover": {
    borderColor: colors.blue500
  },
  "&:active": {
    borderColor: colors.blue500
  }
};

const errorFieldState = {
  border: `1px solid ${colors.error}`,
  "&:focus": {
    ...focusEffect,
    borderColor: colors.error,
    outline: "none"
  },
  "&:hover": {
    borderColor: colors.error
  },
  "&:active": {
    borderColor: colors.error
  }
};

const successFieldState = {
  border: `1px solid ${colors.success}`,
  "&:focus": {
    ...focusEffect,
    borderColor: colors.success,
    outline: "none"
  },
  "&:hover": {
    borderColor: colors.success
  },
  "&:active": {
    borderColor: colors.success
  }
};

const readOnlyFieldState = {
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
  borderRadius: 0,
  "&::placeholder": {
    color: colors.black
  },
  "&:hover": {
    borderColor: colors.grey500
  },
  "&:active": {
    borderColor: colors.grey500
  },
  "&:focus": {
    borderColor: colors.grey500
  }
};

export { field, defaultFieldState, errorFieldState, successFieldState, readOnlyFieldState };
