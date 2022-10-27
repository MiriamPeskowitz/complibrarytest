import colors from "../../shared/colors";
import { circle } from "../../shared/utilities";

const sliderWidth = 256;
const thumbWidth = 16;
const thumb = {
  ...circle,
  appearance: "none",
  cursor: "pointer",
  height: `${thumbWidth}px`,
  width: `${thumbWidth}px`,
  background: colors.blue500,
  "&:hover": {
    boxShadow: `0 0 0 4px ${colors.blue200}`,
    marginTop: "-7px",
    marginLeft: 0,
    boxSizing: "content-box"
  },
  "&:active": {
    boxShadow: `0 0 0 8px ${colors.blue200}`,
    boxSizing: "content-box"
  }
};

const styles = {
  slider: {
    appearance: "none",
    width: `${sliderWidth}px`,
    "&:focus": {
      outline: "none"
    },
    "&::-webkit-slider-runnable-track": {
      appearance: "none",
      height: "2px",
      background: colors.blue500
    },
    "&::-moz-range-track": {
      height: "2px",
      background: colors.blue500
    },
    "&::-ms-fill-upper": {
      background: colors.blue500
    },
    "&::-ms-fill-lower": {
      background: colors.blue500
    },
    "&::-webkit-slider-thumb": {
      ...thumb,
      marginTop: "-7px"
    },
    "&::-moz-range-thumb": {
      ...thumb
    }
  },
  sliderBackdrop: {
    appearance: "none",
    position: "absolute",
    marginTop: "12px",
    "&:focus": {
      outline: "none"
    },
    "&::-webkit-slider-runnable-track": {
      appearance: "none",
      height: "2px",
      background: colors.grey500
    },
    "&::-moz-range-track": {
      height: "2px",
      background: colors.grey500
    },
    "&::-ms-fill-upper": {
      background: colors.grey500
    },
    "&::-ms-fill-lower": {
      background: colors.grey500
    },
    "&::-webkit-slider-thumb": {
      appearance: "none"
    },
    "&::-moz-range-thumb": {
      appearance: "none"
    }
  }
};

export default styles;
export { sliderWidth, thumbWidth };
