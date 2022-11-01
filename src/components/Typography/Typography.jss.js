import colors from "../../shared/colors";
import fonts from "../../shared/fonts";

const headings = {
  fontFamily: fonts.headers,
  marginTop: "1.5rem",
  marginBottom: "1.5rem"
};

const small = {
  fontSize: "0.75rem",
  lineHeight: "1rem",
  marginTop: "1rem"
};

const styles = {
  textSelection: {
    "&::selection": {
      background: colors.textSelect,
      color: colors.white
    }
  },
  h1: {
    ...headings,
    fontWeight: 400,
    fontSize: "2.25rem",
    lineHeight: "2.5rem"
  },
  h2: {
    ...headings,
    fontWeight: 400,
    fontSize: "2rem",
    lineHeight: "2.5rem"
  },
  h3: {
    ...headings,
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "2rem"
  },
  h4: {
    ...headings,
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: "1.5rem"
  },
  h5: {
    ...headings,
    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: "1.5rem"
  },
  p: {
    fontFamily: fonts.body,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    marginTop: "1rem",
    marginBottom: 0,
    "&$normal": {
      color: colors.grey700
    },
    "&$light": {
      color: colors.grey500
    }
  },
  small: {
    ...small,
    fontWeight: 400
  },
  smallCaps: {
    ...small,
    textTransform: "uppercase",
    fontWeight: 600
  },
  normal: {
    color: colors.grey900
  },
  white: {
    color: colors.white
  },
  light: {
    color: colors.grey100
  },
  noTopMargin: {
    marginTop: 0
  },
  noBottomMargin: {
    marginBottom: 0
  },
  error: {
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: colors.error
  },
  success: {
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    color: colors.success
  }
};

export default styles;
