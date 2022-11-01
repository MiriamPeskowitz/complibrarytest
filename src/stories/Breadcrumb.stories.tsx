import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Breadcrumb from "../components/Breadcrumb";


export default {
  title: "ComponentLibrary/Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

// const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Primary = () => (
  <>
    <Breadcrumb url="#">Default Breadcrumb</Breadcrumb>
    <Breadcrumb url="#" separator="/">
      Custom Separator
    </Breadcrumb>
    <Breadcrumb url="#" isTruncated>
      Truncated Breadcrumb with very long text
    </Breadcrumb>
  </>
);
