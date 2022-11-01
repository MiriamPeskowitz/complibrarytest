import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconInformationCircle from "../shared/icons/icon-information-circle.svg";
import { getUseStyles } from "../shared/helpers";

import Tab from "../components/Tab";

import styles from "../components/Tabs/Tabs.stories.jss.js";
import Tabs from "../components/Tabs";

export default {
  title: "ComponentLibrary/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// const Template: ComponentStory<typeof Tabs> = (args) => <TabsTabs  {...args} />;


const useStyles = getUseStyles(styles);

const onClick = () => alert("Tab was clicked!");

export const Primary = () => (
  <Tabs>
    <Tab onClick={onClick}>Tab One</Tab>
    <Tab onClick={onClick}>Tab Two</Tab>
    <Tab onClick={onClick}>Tab Three</Tab>
  </Tabs>
);

export const Compact = () => (
  <Tabs>
    <Tab size="compact" onClick={onClick}>
      Tab One
    </Tab>
    <Tab size="compact" onClick={onClick}>
      Tab Two
    </Tab>
    <Tab size="compact" onClick={onClick}>
      Tab Three
    </Tab>
  </Tabs>
);

export const FullWidth = () => (
  <Tabs fullWidth>
    <Tab onClick={onClick}>Tab One</Tab>
    <Tab onClick={onClick}>Tab Two</Tab>
    <Tab onClick={onClick}>Tab Three</Tab>
  </Tabs>
);

export const Icons = () => (
  <Tabs>
    <Tab leadingIcon={<IconInformationCircle is="svg" />}>Tab One</Tab>
    <Tab leadingIcon={<IconInformationCircle is="svg" />}>Tab Two</Tab>
    <Tab leadingIcon={<IconInformationCircle is="svg" />}>Tab Three</Tab>
  </Tabs>
);

export const Scroll = () => {
  const classes = useStyles();

  return (
    <Tabs wrapperClass={classes.scrollExample}>
      <Tab onClick={onClick}>Tab One</Tab>
      <Tab onClick={onClick}>Tab Two</Tab>
      <Tab onClick={onClick}>Tab Three</Tab>
      <Tab onClick={onClick}>Tab Four</Tab>
      <Tab onClick={onClick}>Tab Five</Tab>
    </Tabs>
  );
};

// const tabsStories = {
//   Primary,
//   Compact,
//   FullWidth,
//   Icons,
//   Scroll
// };

