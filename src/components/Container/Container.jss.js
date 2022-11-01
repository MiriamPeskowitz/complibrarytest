import { centerX } from "../../shared/utilities";

const styles = {
  center: {},
  "fixed-top": {
    position: "fixed !important" /* KLUDGE: Overwrite centering position */,
    top: "8px",
    "&$center": {
      ...centerX
    }
  },
  "fixed-bottom": {
    position: "fixed !important" /* KLUDGE: Overwrite centering position */,
    bottom: "8px",
    "&$center": {
      ...centerX
    }
  },
  relative: {
    position: "relative",
    "&$center > *": {
      margin: "auto"
    }
  }
};

export default styles;
