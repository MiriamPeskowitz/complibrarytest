import colors from "../../shared/colors";
import fonts from "../../shared/fonts";

const styles = {
  label: {
    fontFamily: fonts.body,
    fontSize: "16px",
    lineHeight: "24px",
    display: "block",
    marginBottom: "0.25rem",
    color: colors.grey900
  },
  noBottomMargin: {
    marginBottom: 0
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5
  },
  required: {
    "&:after": {
      marginLeft: "0.25rem",
      fontWeight: 700,
      color: colors.error,
      content: "'*'"
    }
  },
  clickable: {
    cursor: "pointer"
  }
};

export default styles;
