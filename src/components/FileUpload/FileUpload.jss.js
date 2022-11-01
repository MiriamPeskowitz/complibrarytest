import colors from "../../shared/colors";
import { centerX } from "../../shared/utilities";

const styles = {
  wrapper: {
    display: "inline-block"
  },
  loadingError: {
    ...centerX
  },
  loadingIcon: {
    width: "22px",
    height: "20px"
  },
  required: {
    "&:after": {
      marginLeft: "0.25rem",
      fontWeight: 700,
      color: colors.error,
      content: "'*'"
    }
  },
  button: {
    marginBottom: "4px"
  },
  noBottomMargin: {
    marginBottom: 0
  }
};

export default styles;
