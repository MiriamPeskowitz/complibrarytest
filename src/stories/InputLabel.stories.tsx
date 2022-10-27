import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputLabel from "../components/InputLabel";


export default {
  title: "ComponentLibrary/InputLabel",
  component: InputLabel,
} as ComponentMeta<typeof InputLabel>;

// const Template: ComponentStory<typeof InputLabel> = (args) => <InputLabel  {...args} />;

export const SimpleLabel = () => <InputLabel label="Standalone Label" />;

export const RequiredLabel = () => (
  <InputLabel label="Standalone Label (required)" required />
);

export const DisabledLabel = () => <InputLabel label="Standalone Label" disabled />;

export const HiddenLabel = () => <InputLabel label="Standalone Label" hideLabel />;

// const inputLabelStories = {
//   SimpleLabel,
//   RequiredLabel,
//   DisabledLabel,
//   HiddenLabel
// };

