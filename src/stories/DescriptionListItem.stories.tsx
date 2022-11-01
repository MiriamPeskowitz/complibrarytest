import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DescriptionListItem from "../components/DescriptionListItem/DescriptionListItem";

export default {
  title: "ComponentLibrary/DescriptionListItem",
  component: DescriptionListItem,
} as ComponentMeta<typeof DescriptionListItem>;

export const Default = () => (
  <DescriptionListItem heading="Phone number">
    (215) 712-2060
  </DescriptionListItem>
);

export const Inline = () => (
  <DescriptionListItem heading="Phone number" inline>
    (215) 712-2060
  </DescriptionListItem>
);

// const Template: ComponentStory<typeof DescriptionListItem> = (args) => <DescriptionListItem {...args} />;
// //children?

// export const Primary = Template.bind({});
// Primary.args = {
//   heading: "Phone number",
//   inline: false,
// };


// export const Inline = Template.bind({});
// Inline.args = {
//     heading: "Phone number",
//     inline: true,
// };
