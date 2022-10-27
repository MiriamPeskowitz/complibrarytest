import * as React from "react";
import Option from "../components/Option";

const SingleOption = () => <Option value="option">Test Option</Option>;

const OptionList = () => {
  const options = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "App", value: "app", disabled: true },
    { name: "Contact", value: "contact" }
  ];
  const [selected, setSelected] = React.useState("about");

  const onClick = (e: React.ChangeEvent<HTMLInputElement>, val: string) =>
    setSelected(val);

  return options.map(option => (
    <Option
      key={option.value}
      value={option.value}
      selected={selected === option.value}
      disabled={option.disabled}
      onClick={onClick}
    >
      {option.name}
    </Option>
  ));
};

const SingleOptionDisabledSelected = () => (
  <Option selected disabled value="option">
    Test Option
  </Option>
);

const OptionStories = {
  SingleOption,
  OptionList,
  SingleOptionDisabledSelected
};

export default OptionStories;
