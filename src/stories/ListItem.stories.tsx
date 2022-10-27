
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconCheckCircle from "../shared/icons/icon-check-circle.svg";
import Typography from "../components/Typography";
import { getUseStyles } from "../shared/helpers";

import styles from "../components/ListItem/ListItem.stories.jss.js";
import ListItem from "../components/ListItem";

const useStyles = getUseStyles(styles);


export default {
  title: "ComponentLibrary/ListItem",
  component: ListItem ,
} as ComponentMeta<typeof ListItem  >;

// const Template: ComponentStory<typeof ListItem > = (args) => <ListItem   {...args} />;




export const Primary = () => {
  const classes = useStyles();

  return (
    <ListItem>
      <Typography noTopMargin noBottomMargin className={classes.span}>
        Single List Item
      </Typography>
    </ListItem>
  );
};

export const HasBulletIcon = () => (
  <ListItem hasBulletIcon>
    <IconCheckCircle is="svg" />
    <Typography noTopMargin noBottomMargin>
      Single List Item
    </Typography>
  </ListItem>
);
