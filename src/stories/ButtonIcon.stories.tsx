import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import IconPlus from "../shared/icons/icon-plus.svg";
import IconPinVertical from "../shared/icons/icon-pin-vertical.svg";
import { getUseStyles } from "../shared/helpers.js";

import styles from "../components/ButtonIcon/ButtonIcon.stories.jss.js";
import ButtonIcon from "../components/ButtonIcon";

const useStyles = getUseStyles(styles);


export default {
  title: "ComponentLibrary/ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

// const Template: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const onClick = () => alert("Button was clicked!");

export const ButtonIconList = ({ variant, shape, icon }) => {
  const classes = useStyles();

  return (
    <>
      <ButtonIcon
        onClick={onClick}
        variant={variant}
        label="add"
        shape={shape}
        size="tiny"
        className="mr-8"
        icon={icon}
      />
      <ButtonIcon
        onClick={onClick}
        variant={variant}
        label="add"
        shape={shape}
        size="small"
        className="mr-8"
        icon={icon}
      />
      <ButtonIcon
        onClick={onClick}
        variant={variant}
        label="add"
        shape={shape}
        size="medium"
        className="mr-8"
        icon={icon}
      />
      <ButtonIcon
        onClick={onClick}
        variant={variant}
        label="add"
        shape={shape}
        size="large"
        className="mr-8"
        icon={icon}
      />
      <ButtonIcon
        onClick={onClick}
        variant={variant}
        label="add"
        shape={shape}
        classOverrides={{ size: classes.custom }}
        className="mr-8"
        icon={icon}
      />
    </>
  );
};

export const Solid = () => (
  <Grid justifyContent="justify-start" direction="column" spacing={4}>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="solid"
        shape="default"
        icon={<IconPinVertical is="svg" />}
      />
    </Grid>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="solid"
        shape="circle"
        icon={<IconPlus is="svg" />}
      />
    </Grid>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="solid"
        shape="square"
        icon={<IconPinVertical is="svg" />}
      />
    </Grid>
  </Grid>
);

export const Outlined = () => (
  <Grid justifyContent="justify-start" direction="column" spacing={4}>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="outlined"
        shape="default"
        icon={<IconPinVertical is="svg" />}
      />
    </Grid>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="outlined"
        shape="circle"
        icon={<IconPlus is="svg" />}
      />
    </Grid>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="outlined"
        shape="square"
        icon={<IconPinVertical is="svg" />}
      />
    </Grid>
  </Grid>
);

export const Ghost = () => (
  <Grid justifyContent="justify-start" direction="column" spacing={4}>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="ghost"
        shape="default"
        icon={<IconPinVertical is="svg" />}
      />
    </Grid>
    <Grid justifyContent="justify-start" spacing={2} alignItems="items-center">
      <ButtonIconList
        variant="ghost"
        shape="default"
        icon={<IconPlus is="svg" />}
      />
    </Grid>
  </Grid>
);
