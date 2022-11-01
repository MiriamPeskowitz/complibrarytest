import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { getUseStyles } from "../shared/helpers";
import Grid from "../components/Grid";

import styles from "../components/Chip/Chip.stories.jss.js";
import Chip from "../components/Chip";

const useStyles = getUseStyles(styles);


export default {
  title: "ComponentLibrary/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

// const Template: ComponentStory<typeof Chip> = (args) => <Chip  {...args} />;


export const Primary = () => {
  const classes = useStyles();

  return (
    <Grid spacing={1} alignItems="items-center">
      <Chip>Default Chip</Chip>
      <Chip variant="success">Success Chip</Chip>
      <Chip variant="error">Error Chip</Chip>
      <Chip variant="warning">Warning Chip</Chip>
      <Chip variant="dark">Dark Chip</Chip>
      <div className={classes.lightBackground}>
        <Chip variant="light">Light Chip</Chip>
      </div>
    </Grid>
  );
};

export const Small = () => {
  const classes = useStyles();

  return (
    <Grid spacing={1} alignItems="items-center">
      <Chip small>Default Chip</Chip>
      <Chip small variant="success">
        Success Chip
      </Chip>
      <Chip small variant="error">
        Error Chip
      </Chip>
      <Chip small variant="warning">
        Warning Chip
      </Chip>
      <Chip small variant="dark">
        Dark Chip
      </Chip>
      <div className={classes.lightBackground}>
        <Chip small variant="light">
          Light Chip
        </Chip>
      </div>
    </Grid>
  );
};

// const chipStories = {
//   Primary,
//   Small
// };

