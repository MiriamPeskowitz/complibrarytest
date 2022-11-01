import colors from "../../shared/colors";

const styles = {
  overview: {
    marginRight: "16px"
  },
  dropDown: {
    width: "56px !important",
    "& span": {
      paddingLeft: "8px"
    },
    "& div::after": {
      marginRight: "8px"
    }
  },
  dropDownLabel: {
    marginRight: "8px"
  },
  jumpToLabel: {
    marginRight: "8px"
  },
  jumpToInput: {
    "& input": {
      fontSize: "1rem",
      width: "40px",
      height: "32px",
      paddingTop: "3px",
      paddingBottom: "3px"
    }
  },
  paginationButton: {
    background: colors.grey100,
    border: `1px solid ${colors.grey300}`,
    "&:hover": {
      background: colors.blue100
    },
    "& svg": {
      fill: colors.blue500
    }
  }
};

export default styles;
