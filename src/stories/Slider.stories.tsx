import * as React from "react";

import Slider from "../components/Slider";

const Primary = () => (
  <form className="slider-container">
    <Slider defaultValue={50} name="slider" minValue={0} maxValue={100} />
  </form>
);

const sliderStories = {
  Primary
};

export default sliderStories;
