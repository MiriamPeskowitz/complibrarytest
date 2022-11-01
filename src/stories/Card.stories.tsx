import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../components/Card";

const FEATURE_IMAGE = "https://picsum.photos/300";


export default {
  title: "ComponentLibrary/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// const Template: ComponentStory<typeof Card> = (args) => <Card  {...args} />;



export const Primary = () => (
  <Card
    title="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
    button
    buttonText="Submit"
    featuredImage={FEATURE_IMAGE}
  />
);

export const ContainImageVariant = () => (
  <Card
    title="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
    imageVariant="contain"
    button
    buttonText="Submit"
    featuredImage={FEATURE_IMAGE}
  />
);

export const NoButton = () => (
  <Card
    title="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
    featuredImage={FEATURE_IMAGE}
  />
);

export const NoTitleNoButton = () => (
  <Card
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
    featuredImage={FEATURE_IMAGE}
  />
);

export const ImageAndTitle = () => (
  <Card title="Card Title" featuredImage={FEATURE_IMAGE} />
);

export const NoImage = () => (
  <Card
    title="Card Title"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua."
    button
    buttonText="Submit"
  />
);

export const HorizontalNoButton = () => (
  <Card
    title="Card Title"
    variant="horizontal"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    featuredImage={FEATURE_IMAGE}
  />
);

// const cardStories = {
//   Primary,
//   ContainImageVariant,
//   NoButton,
//   NoTitleNoButton,
//   NoImage,
//   HorizontalNoButton
// };

