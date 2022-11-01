import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { circle } from "../../shared/utilities";

const styles = {
  orderedList: {
    listStyleType: "decimal",
    listStyle: "inside",
    margin: "1rem 0 1rem 1rem",
    "& > *::marker": {
      fontFamily: fonts.body
    },
    padding: 0
  },
  numIcons: {
    "& li": {
      display: "flex",
      alignItems: "flex-start"
    },
    listStyleType: "none",
    counterReset: "custom-counter",
    "& > *": {
      marginTop: "0.5rem",
      counterIncrement: "custom-counter"
    },
    "& > *:nth-child(1)": {
      marginTop: 0
    },
    "& > *:before": {
      ...circle,
      color: colors.white,
      background: colors.blue500,
      fontWeight: 600,
      fontFamily: fonts.body,
      marginRight: "0.5rem",
      padding: "1px 9px 2px 9px",
      content: "counter(custom-counter) ' '"
    },
    "&$inlineList > *": {
      marginTop: 0
    }
  },
  inlineList: {
    display: "inline-flex",
    "& > *": {
      marginRight: "2rem"
    },
    "& > *:last-child": {
      marginRight: 0
    }
  },
  noTopMargin: {
    marginTop: "0"
  },
  noBottomMargin: {
    marginBottom: "0"
  }
};

export default styles;
