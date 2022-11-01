import { dropShadow } from "../../shared/utilities";

const styles = {
  container: {
    ...dropShadow,
    width: "720px",
    height: "auto",
    borderRadius: "4px",
    padding: "24px 16px"
  },
  grid: {
    height: "100%"
  },
  icon: {
    // override default height and width
    "& svg": {
      height: "80px",
      width: "80px"
    }
  },
  secondaryWithButton: {
    maxWidth: "465px"
  }
};

export default styles;
