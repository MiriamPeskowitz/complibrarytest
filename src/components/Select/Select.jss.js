import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import {
  backdrop,
  dropShadow,
  focusEffect,
  hidden
} from "../../shared/utilities";
import {
  errorFieldState,
  successFieldState,
  readOnlyFieldState
} from "../../shared/common";

const padding = 16;
const selectHeight = 48;
const compactHeight = 32;
const bordersHeight = 2;

const selectArrow = {
  borderLeft: `4px solid ${colors.transparent}`,
  borderRight: `4px solid ${colors.transparent}`,
  borderTop: `5px solid ${colors.grey700}`,
  content: "''",
  marginRight: `${padding}px`
};

const styles = {
  defaultWidth: {
    width: "256px"
  },
  container: {
    "& $select &:focus": {
      ...focusEffect,
      borderColor: colors.blue500,
      outline: "none"
    }
  },
  normal: {
    height: `${selectHeight - bordersHeight}px`
  },
  compact: {
    height: `${compactHeight - bordersHeight}px`
  },
  select: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "0.25rem",
    border: `1px solid ${colors.grey500}`,
    background: colors.white,
    appearance: "none",
    fontSize: "16px",
    fontFamily: fonts.body,
    marginBottom: "4px",
    "&:after": {
      ...selectArrow
    },
    "&:hover": {
      borderColor: colors.blue500
    }
  },
  selectTextColor: {
    color: colors.grey900
  },
  disabledTextColor: {
    color: colors.grey500
  },
  selectedValue: {
    paddingLeft: `${padding}px`
  },
  placeholder: {
    paddingLeft: `${padding}px`,
    color: colors.grey500
  },
  options: {
    ...dropShadow,
    border: `1px solid ${colors.transparent}`,
    background: colors.white,
    borderRadius: "4px",
    listStyle: "none",
    marginTop: "8px",
    padding: "4px 0",
    paddingInlineStart: 0,
    zIndex: 1,
    position: "absolute"
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
  disabled: {
    border: `1px solid ${colors.grey500}`,
    cursor: "not-allowed",
    background: colors.grey300,
    "&:hover": {
      border: `1px solid ${colors.grey500}`
    }
  },
  backdrop: {
    ...backdrop,
    background: colors.transparent
  },
  readOnly: {
    ...readOnlyFieldState
  },
  error: {
    ...errorFieldState
  },
  success: {
    ...successFieldState
  }
};

export default styles;
