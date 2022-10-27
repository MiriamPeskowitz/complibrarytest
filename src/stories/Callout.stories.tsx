import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";
import Chip from "../components/Chip";
import IconExternalLink from "../shared/icons/icon-external-link.svg";

import { getUseStyles } from "../shared/helpers";
import styles from "../components/Callout/Callout.stories.jss.js";
import Callout from "../components/Callout";
const useStyles = getUseStyles( styles );


export default {
  title: "ComponentLibrary/Callout",
  component: Callout,
} as ComponentMeta<typeof Callout>;

// const Template: ComponentStory<typeof Callout> = (args) => <Callout  {...args} />;



export const Default1 = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="Default"
      iconName="data-tech"
      secondary="Secondary text"
      chipElement={<Chip variant="default">Default</Chip>}
      buttonElement={
        <Button
          className={classes.button}
          onClick={() => alert("You clicked the button")}
        >
          Button text
        </Button>
      }
    />
  );
};

export const NoSecondaryText = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="Headline Only"
      iconName="cbo"
      chipElement={<Chip variant="default">Default</Chip>}
      buttonElement={<Button className={classes.button}>Button text</Button>}
    />
  );
};

export const NoIcon = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="No Icon"
      secondary="Secondary text"
      chipElement={<Chip variant="default">Default</Chip>}
      buttonElement={<Button className={classes.button}>Button text</Button>}
    />
  );
};

export const NoAction = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="No Action"
      iconName="college"
      secondary="Secondary text"
      chipElement={<Chip variant="default">Default</Chip>}
    />
  );
};

export const NoChip = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="No chip"
      iconName="evaluate-outcomes"
      secondary="Secondary text"
      buttonElement={<Button className={classes.button}>Button text</Button>}
    />
  );
};

export const ChipVariant = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="LIHEAP"
      iconName="heating"
      secondary="The Low-Income Home Energy Assistance Program (LIHEAP) helps to lower energy costs."
      chipElement={<Chip variant="success">Enrolled</Chip>}
    />
  );
};

export const ButtonVariant = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="SNAP"
      iconName="food"
      secondary="SNAP benefits can help you feed your family with fresh and healthy groceries."
      chipElement={<Chip variant="success">Estimated Eligible</Chip>}
      buttonElement={
        <Button
          trailingIcon={<IconExternalLink is="svg" />}
          variant="outlined"
          className={classes.button}
        >
          Learn more
        </Button>
      }
    />
  );
};

export const ButtonVariantLongCopy = () => {
  const classes = useStyles();
  return (
    <Callout
      className={classes.topMargin}
      headline="SNAP"
      iconName="food"
      secondary="Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Praesent ut ligula non mi varius sagittis. In consectetuer turpis ut velit. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.

      Vestibulum dapibus nunc ac augue. Phasellus accumsan cursus velit. Suspendisse feugiat. Sed libero. Fusce vel dui."
      chipElement={<Chip variant="success">Estimated Eligible</Chip>}
      buttonElement={
        <Button
          trailingIcon={<IconExternalLink is="svg" />}
          variant="outlined"
          className={classes.button}
        >
          Learn more
        </Button>
      }
    />
  );
};

// const CalloutStories = {
//   Default,
//   NoSecondaryText,
//   NoIcon,
//   NoAction,
//   NoChip,
//   ChipVariant,
//   ButtonVariant,
//   ButtonVariantLongCopy
// };


