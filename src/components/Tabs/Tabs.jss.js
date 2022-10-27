import colors from "../../shared/colors";
import { fullWidth } from "../../shared/utilities";

const styles = {
  horizontal: {
    display: "inline-flex",
    borderBottom: `2px solid ${colors.grey300}`,
    pointerEvents: "visible"
  },
  fullWidth,
  tabWrapper: {
    "&::-webkit-scrollbar": {
      width: 0,
      display: "none"
    }
  }
};

export default styles;
