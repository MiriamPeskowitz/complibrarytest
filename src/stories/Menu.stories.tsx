import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconFilter from "../shared/icons/icon-filter.svg";
import IconUser from "../shared/icons/icon-user.svg";

import Grid from "../components/Grid";
import Option from "../components/Option";

import { getUseStyles } from "../shared/helpers";
import styles from "../components/Menu/Menu.stories.jss.js";

import Menu from "../components/Menu";

const options = [
  { name: "Home", value: "home" },
  { name: "About", value: "about" },
  { name: "App", value: "app", disabled: true },
  { name: "Contact", value: "contact" }
];
const useStyles = getUseStyles(styles);

export default {
  title: "ComponentLibrary/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// const Template: ComponentStory<typeof Menu> = (args) => <Menu  {...args} />;

export const Solid = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu id="test" name="Menu Left">
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu id="test1" name="Menu Right" align="right">
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

export const Outlined = () => {
  const [selected, setSelected] = React.useState("home");
    const onClick =
      (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
        setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu
        id="test"
        name="Menu Left"
        leadingIcon={<IconUser />}
        variant="outlined"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        id="test1"
        name="Menu Right"
        leadingIcon={<IconUser />}
        variant="outlined"
        align="right"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

export const Text = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu
        id="test"
        name="Menu Left"
        leadingIcon={<IconFilter is="svg" />}
        variant="text"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        id="test1"
        name="Menu Right"
        leadingIcon={<IconFilter is="svg" />}
        variant="text"
        align="right"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

const CompactSolid = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu id="test" name="Menu Left" size="compact">
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu id="test1" name="Menu Right" size="compact" align="right">
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

export const CompactOutlined = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu
        id="test"
        name="Menu Left"
        variant="outlined"
        leadingIcon={<IconUser is="svg" />}
        size="compact"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        id="test1"
        name="Menu Right"
        variant="outlined"
        leadingIcon={<IconUser is="svg" />}
        size="compact"
        align="right"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};
export const CompactText = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);

  return (
    <Grid spacing={4}>
      <Menu
        id="test1"
        name="Menu Left"
        leadingIcon={<IconFilter is="svg" />}
        variant="text"
        size="compact"
        align="left"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        id="test1"
        name="Menu Right"
        leadingIcon={<IconFilter is="svg" />}
        variant="text"
        size="compact"
        align="right"
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

const Inverted = () => {
  const [selected, setSelected] = React.useState("home");
  const onClick =
    (val: React.SetStateAction<string>) => (e: React.SetStateAction<string>) =>
      setSelected(val);
  const classes = useStyles();

  return (
    <Grid direction="column" className={classes.greyBackground}>
      <Menu
        variant="inverted"
        id="test"
        name="Pink"
        classOverrides={{ status: classes.pinkInverted }}
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        variant="inverted"
        id="test"
        name="Orange"
        classOverrides={{ status: classes.orangeInverted }}
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        variant="inverted"
        id="test1"
        name="Yellow"
        classOverrides={{ status: classes.yellowInverted }}
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        variant="inverted"
        id="test"
        name="Green"
        classOverrides={{ status: classes.greenInverted }}
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
      <Menu
        variant="inverted"
        id="test"
        name="Blue"
        classOverrides={{ status: classes.blueInverted }}
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Menu>
    </Grid>
  );
};

// const menuStories = {
//   Solid,
//   Outlined,
//   Text,
//   CompactSolid,
//   CompactOutlined,
//   CompactText,
//   Inverted
// };
