import colors from "../../shared/colors";
import fonts from "../../shared/fonts";
import { spacing } from "../../shared/sizes";

const styles = {
  unorderedList: {
    listStyle: "disc",
    listStylePosition: "inside",
    margin: "1rem 0 1rem 1rem",
    padding: 0,
    color: colors.grey700,
    "& li::marker": {
      fontFamily: fonts.body
    }
  },
  unstyled: {
    listStyle: "none"
  },
  icon: {
    listStyle: "none",
    listStylePosition: "outside",
    "& > *": {
      display: "flex",
      alignItems: "center",
      marginTop: spacing.two
    },
    "& > *:first-child": {
      marginTop: 0
    },
    "&$inline > *": {
      marginTop: 0
    },
    "& svg": {
      marginRight: spacing.two,
      height: "16px",
      width: "16px"
    }
  },
  inline: {
    display: "inline-flex"
  },
  inlineWithSeparators: {
    display: "inline-flex",
    "&$unstyled > *": {
      borderRight: `1px solid ${colors.grey500}`
    },
    "&$unstyled&$zero-inline > *": {
      padding: 0
    },
    "&$unstyled&$one-inline > *": {
      paddingRight: spacing.one
    },
    "&$unstyled&$two-inline > *": {
      paddingRight: spacing.two
    },
    "&$unstyled&$three-inline > *": {
      paddingRight: spacing.three
    },
    "&$unstyled&$four-inline > *": {
      paddingRight: spacing.four
    },
    "&$unstyled > *:last-child": {
      border: "none",
      paddingRight: "0 !important" // Override spacing classes
    },
    "& > *": {
      marginTop: "0 !important" // @KLUDGE: Overrides list item styles
    }
  },
  noTopMargin: {
    marginTop: 0
  },
  noBottomMargin: {
    marginBottom: 0
  },
  noLeftMargin: {
    marginLeft: 0
  },
  "zero-inline": {
    marginRight: 0
  },
  "one-inline": {
    "& > *:not(:last-child)": {
      marginRight: spacing.one
    }
  },
  "two-inline": {
    "& > *:not(:last-child)": {
      marginRight: spacing.two
    }
  },
  "three-inline": {
    "& > *:not(:last-child)": {
      marginRight: spacing.three
    }
  },
  "four-inline": {
    "& > *:not(:last-child)": {
      marginRight: spacing.four
    }
  },
  "one-default": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.one
    }
  },
  "two-default": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.two
    }
  },
  "three-default": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.three
    }
  },
  "four-default": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.four
    }
  }
};

export default styles;
