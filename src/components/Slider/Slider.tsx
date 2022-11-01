import * as React from "react";

import { getUseStyles } from "../../shared/helpers";

import styles, { sliderWidth, thumbWidth } from "./Slider.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Slider");

export interface Props {
  testId?: string;
  id?: string;
  className?: string;
  name?: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
}

const Slider: React.FC<Props> = props => {
  const {
    testId = "",
    id,
    className,
    name,
    handleChange = () => {
      /* Intentionally empty */
    },
    defaultValue = 50,
    minValue,
    maxValue
  } = props;
  const classes = useStyles();

  const getSliderWidth = (percent, slider, thumb) =>
    slider * (percent / 100) - thumb * (percent / 100);
  const [value, setValue] = React.useState(defaultValue);
  const [sliderLeft, setSliderLeft] = React.useState(
    getSliderWidth(defaultValue, sliderWidth, thumbWidth)
  );

  const onChange = e => {
    const newValue = e.target.value;

    setValue(newValue as React.SetStateAction<number>);
    setSliderLeft(getSliderWidth(newValue, sliderWidth, thumbWidth));
    handleChange(e as React.ChangeEvent<HTMLInputElement>, value);
  };

  return (
    <>
      <input
        type="range"
        className={classes.sliderBackdrop}
        style={{ width: `${sliderLeft}px` }}
        aria-hidden="true"
      />
      <input
        data-testid={testId}
        id={id}
        className={classNames({
          [classes.slider]: true,
          [className]: className
        })}
        type="range"
        name={name}
        step="1"
        value={value}
        aria-valuenow={defaultValue}
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-labelledby={name}
        onChange={onChange}
      />
    </>
  );
};

export default Slider;
