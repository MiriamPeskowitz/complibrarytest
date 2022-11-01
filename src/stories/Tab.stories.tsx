import * as React from "react";

import IconInformationCircle from "../shared/icons/icon-information-circle.svg";

import Tab from "../components/Tab";

const onClick = () => alert("Tab was clicked!");

const Primary = () => <Tab onClick={onClick}>Default Tab</Tab>;

const Small = () => (
  <Tab onClick={onClick} size="compact">
    Small Tab
  </Tab>
);

const FullWidth = () => (
  <Tab onClick={onClick} fullWidth>
    Full Width Tab
  </Tab>
);

const WithIcon = () => (
  <Tab leadingIcon={<IconInformationCircle is="svg" />}>Tab One</Tab>
);

const ActiveTab = () => (
  <Tab isActive onClick={onClick}>
    Active Tab
  </Tab>
);

const tabStories = {
  Primary,
  Small,
  FullWidth,
  WithIcon,
  ActiveTab
};

export default tabStories;
