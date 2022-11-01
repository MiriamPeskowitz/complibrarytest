import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DescriptionList from "../components/DescriptionList/DescriptionList";
import DescriptionListItem from "../components/DescriptionListItem";

export default {
  title: "ComponentLibrary/DescriptionList",
  component: DescriptionList,
} as ComponentMeta<typeof DescriptionList>;

// const Template: ComponentStory<typeof DescriptionList> = (args) => <DescriptionList {...args} />;

// export const Primary = Template.bind({})
// Primary.args = {
//   inline: false,
// };
// // children: 3,
// export const Inline = Template.bind({})
// Inline.args = {
//   children: 3,
//   inline: true,
// }

export const Default = () => (
  <DescriptionList>
    <DescriptionListItem heading="Phone number">
      (215) 712-2060
    </DescriptionListItem>
    <DescriptionListItem heading="Call type">Inbound</DescriptionListItem>
    <DescriptionListItem heading="Started">
      2019-01-22 3:53:13 PM
    </DescriptionListItem>
  </DescriptionList>
);
export const Inline = () => (
  <DescriptionList inline={false}>
    <DescriptionListItem inline heading="Phone number">
      (215) 712-2060
    </DescriptionListItem>
    <DescriptionListItem inline heading="Call type">
      Inbound
    </DescriptionListItem>
    <DescriptionListItem inline heading="Started">
      2019-01-22 3:53:13 PM
    </DescriptionListItem>
  </DescriptionList>
);

// const Inline = Template.bind({});
// Inline.args = {
//   <DescriptionList inline={false}>
//     <DescriptionListItem inline heading="Phone number">
//       (215) 712-2060
//     </DescriptionListItem>
//     <DescriptionListItem inline heading="Call type">
//       Inbound
//     </DescriptionListItem>
//     <DescriptionListItem inline heading="Started">
//       2019-01-22 3:53:13 PM
//     </DescriptionListItem>
//   </DescriptionList>
// };

// export const DescriptionListStories = {
//   List,
//   Inline
// };

// export default DescriptionListStories;

