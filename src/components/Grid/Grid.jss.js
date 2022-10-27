import { textCenter } from "../../shared/utilities";
import { spacing } from "../../shared/sizes";

const styles = {
  textCenter,
  flex: {
    display: "flex"
  },
  wrap: {
    flexWrap: "wrap"
  },
  "no-wrap": {
    flexWrap: "nowrap"
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  "items-start": {
    alignItems: "flex-start"
  },
  "items-end": {
    alignItems: "flex-end"
  },
  "items-center": {
    alignItems: "center"
  },
  "items-baseline": {
    alignItems: "baseline"
  },
  "items-stretch": {
    alignItems: "stretch"
  },
  "justify-start": {
    justifyContent: "flex-start"
  },
  "justify-end": {
    justifyContent: "flex-end"
  },
  "justify-center": {
    justifyContent: "center"
  },
  "justify-between": {
    justifyContent: "space-between"
  },
  "justify-around": {
    justifyContent: "space-around"
  },
  "justify-evenly": {
    justifyContent: "space-evenly"
  },
  "one-row": {
    "& > *:not(:last-child)": {
      marginRight: spacing.one
    }
  },
  "two-row": {
    "& > *:not(:last-child)": {
      marginRight: spacing.two
    }
  },
  "three-row": {
    "& > *:not(:last-child)": {
      marginRight: spacing.three
    }
  },
  "four-row": {
    "& > *:not(:last-child)": {
      marginRight: spacing.four
    }
  },
  "one-column": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.one
    }
  },
  "two-column": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.two
    }
  },
  "three-column": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.three
    }
  },
  "four-column": {
    "& > *:not(:last-child)": {
      marginBottom: spacing.four
    }
  }
};

export default styles;
