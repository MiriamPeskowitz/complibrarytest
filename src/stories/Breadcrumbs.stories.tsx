import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconChevronRight from "../../shared//icon-chevron-right.svg";

import Breadcrumb from "../components/Breadcrumb";
import Grid from "../components/Grid";
import Breadcrumbs from "../components/Breadcrumbs";


export default {
  title: "ComponentLibrary/Breadcrumbs",
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

// const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

export const Primary = () => (
  <Grid direction="column">
    <Breadcrumbs separator={<IconChevronRight is="svg" />}>
      <Breadcrumb url="https://www.google.com">Home</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs separator="\">
      <Breadcrumb url="https://www.google.com">Home</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Settings</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs separator="-">
      <Breadcrumb url="https://www.google.com">Home</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Settings</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs>
      <Breadcrumb url="https://www.google.com">Home</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Settings</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Reset Password</Breadcrumb>
    </Breadcrumbs>
    <Breadcrumbs>
      <Breadcrumb url="https://www.google.com">
        Community based organization
      </Breadcrumb>
      <Breadcrumb isTruncated url="https://www.google.com">
        Case manager client portfolios extra text for truncation
      </Breadcrumb>
      <Breadcrumb url="https://www.google.com">Settings</Breadcrumb>
      <Breadcrumb url="https://www.google.com">Account</Breadcrumb>
    </Breadcrumbs>
  </Grid>
);
