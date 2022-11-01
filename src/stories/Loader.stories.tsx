import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "../components/Loader";


export default {
  title: "ComponentLibrary/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

// const Template: ComponentStory<typeof Loader> = (args) => <Loader  {...args} />;


export const DefaultLoader = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <Loader />
  </div>
);

export const SmallLoader = () => (
  <div className="w-screen h-screen flex items-center justify-center">
    <Loader size={24} />
  </div>
);
