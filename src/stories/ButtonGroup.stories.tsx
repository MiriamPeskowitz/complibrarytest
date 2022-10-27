import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

import ButtonGroup from "../components/ButtonGroup";

export default {
  title: "ComponentLibrary/ButtonGroup",
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

// const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;


export const onClick = () => false;

export const Inline = () => (
  <ButtonGroup inline>
    <ButtonGroup inline>
      <Button onClick={onClick} size="compact">
        Ok
      </Button>
      <Button onClick={onClick} status="danger" size="compact">
        Cancel
      </Button>
    </ButtonGroup>
    <ButtonGroup inline spacing={2}>
      <Button onClick={onClick}>Ok</Button>
      <Button onClick={onClick} status="danger">
        Cancel
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);

export const Block = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button onClick={onClick} size="compact">
        Ok
      </Button>
      <Button onClick={onClick} status="danger" size="compact">
        Cancel
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button onClick={onClick}>Ok</Button>
      <Button onClick={onClick} status="danger">
        Cancel
      </Button>
    </ButtonGroup>
  </ButtonGroup>
);
