import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";
import InputError from "../components/InputError";

export default {
  title: "ComponentLibrary/InputError",
  component: InputError,
} as ComponentMeta<typeof InputError>;

// const Template: ComponentStory<typeof InputError> = (args) => <InputError  {...args} />;


export const Primary = () => {
  return <InputError>This is a default error message</InputError>;
};

export const Multiple = () => {
  return (
    <UnorderedList noBottomMargin noTopMargin noLeftMargin variant="unstyled">
      <ListItem>
        <InputError>This is the first error</InputError>
      </ListItem>
      <ListItem>
        <InputError>This is the second error</InputError>
      </ListItem>
      <ListItem>
        <InputError>This is the third error</InputError>
      </ListItem>
    </UnorderedList>
  );
};

export const MediumSize = () => {
  return (
    <Grid direction="column" spacing={1}>
      <InputError size="medium">This is a medium size error</InputError>
    </Grid>
  );
};
