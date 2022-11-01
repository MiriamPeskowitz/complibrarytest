import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getUseStyles } from "../shared/helpers";

import styles from "../components/Grid/Grid.stories.jss.js";
import Grid from "../components/Grid";

const useStyles = getUseStyles(styles);


export default {
  title: "ComponentLibrary/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

// const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const GridItem = (props: any) => {
  const classes = useStyles();

  return <div className={classes.gridExamples}>{props.children}</div>;
};

export const BasicGrid = () => (
  <Grid justifyContent="justify-start" direction="column" spacing={2}>
    <Grid justifyContent="justify-start" spacing={0}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" spacing={1}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" spacing={2}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" spacing={3}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" spacing={4}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
  </Grid>
);

export const GridStacked = () => (
  <Grid justifyContent="justify-start" direction="column" spacing={4}>
    <Grid justifyContent="justify-start" direction="column" spacing={0}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" direction="column" spacing={1}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" direction="column" spacing={2}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" direction="column" spacing={3}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
    <Grid justifyContent="justify-start" direction="column" spacing={4}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
  </Grid>
);

export const ItemAllCentered = () => (
  <Grid
    className="h-full"
    alignItems="items-center"
    justifyContent="justify-center"
  >
    <GridItem>Item 1</GridItem>
  </Grid>
);

export const ItemsJustifiedCenter = () => (
  <Grid justifyContent="justify-center">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem>Item 3</GridItem>
    <GridItem>Item 4</GridItem>
  </Grid>
);

// const gridStories = {
//   BasicGrid,
//   GridStacked,
//   ItemAllCentered,
//   ItemsJustifiedCenter
// };


