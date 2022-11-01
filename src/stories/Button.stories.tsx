import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";

import IconArrowRight from "../shared/icons/icon-arrow-right.svg";
import IconPlus from "../shared/icons/icon-plus.svg";

import { getUseStyles } from "../shared/helpers";

import styles from "../components/Button/Button.stories.jss.js";
import Button from "../components/Button/Button";

const useStyles = getUseStyles(styles);

export default {
  title: "ComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const onClick = () => alert("Button was clicked!");

export const Solid = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button onClick={onClick} variant="solid">
      Test Button
    </Button>
    <Button variant="solid" loading>
      Test Button
    </Button>
    <Button onClick={onClick} variant="solid" disabled>
      Disabled
    </Button>
    <Button onClick={onClick} variant="solid" size="compact">
      Compact
    </Button>
    <Button onClick={onClick} variant="solid" fullWidth>
      Full Width
    </Button>
  </Grid>
);

export const Outlined = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button onClick={onClick} variant="outlined">
      Test Button
    </Button>
    <Button variant="outlined" loading>
      Test Button
    </Button>
    <Button variant="outlined" disabled>
      Test Button
    </Button>
    <Button variant="outlined" size="compact">
      Compact
    </Button>
    <Button variant="outlined" fullWidth>
      Full Width
    </Button>
  </Grid>
);

export const Inverted = () => {
  const classes = useStyles();
  return (
    <Grid
      spacing={3}
      direction="column"
      alignItems="items-start"
      className={classes.greyBackground}
    >
      <Button onClick={onClick} variant="inverted" status="informational">
        Informational
      </Button>
      <Button variant="inverted" status="informational" loading>
        Informational
      </Button>
      <Button variant="inverted" status="informational" disabled>
        Informational
      </Button>
      <Button variant="inverted" status="informational" size="compact">
        Compact
      </Button>
      <Button variant="inverted" status="informational" fullWidth>
        Full Width
      </Button>
      <Button onClick={onClick} variant="inverted" status="danger">
        Danger
      </Button>
      <Button onClick={onClick} variant="inverted" status="warning">
        Warning
      </Button>
      <Button onClick={onClick} variant="inverted" status="success">
        Success
      </Button>
    </Grid>
  );
};

export const Danger = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button onClick={onClick} variant="solid" status="danger">
      Test Button
    </Button>
    <Button variant="solid" status="danger" loading>
      Test Button
    </Button>
    <Button variant="solid" status="danger" disabled>
      Test Button
    </Button>
    <Button variant="solid" status="danger" size="compact">
      Compact
    </Button>
    <Button variant="solid" status="danger" fullWidth>
      Full Width
    </Button>
    <Button variant="outlined" status="danger">
      Test Button
    </Button>
    <Button variant="outlined" status="danger" size="compact">
      Test Button
    </Button>
    <Button variant="text" status="danger">
      Test Button
    </Button>
    <Button variant="text" status="danger" size="compact">
      Test Button
    </Button>
  </Grid>
);

export const Success = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button onClick={onClick} variant="solid" status="success">
      Test Button
    </Button>
    <Button variant="solid" status="success" loading>
      Test Button
    </Button>
    <Button variant="solid" status="success" disabled>
      Test Button
    </Button>
    <Button variant="solid" status="success" size="compact">
      Compact
    </Button>
    <Button variant="solid" status="success" fullWidth>
      Full Width
    </Button>
    <Button variant="outlined" status="success">
      Test Button
    </Button>
    <Button variant="outlined" status="success" size="compact">
      Test Button
    </Button>
    <Button variant="text" status="success">
      Test Button
    </Button>
    <Button variant="text" status="success" size="compact">
      Test Button
    </Button>
  </Grid>
);

export const Text = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button onClick={onClick} variant="text">
      Test Button
    </Button>
    <Button variant="text" disabled>
      Test Button
    </Button>
    <Button variant="text" size="compact">
      Compact
    </Button>
    <Button variant="text" fullWidth>
      Full Width
    </Button>
  </Grid>
);

export const WithIcon = () => (
  <Grid spacing={3} direction="column" alignItems="items-start">
    <Button
      onClick={onClick}
      variant="solid"
      leadingIcon={<IconPlus is="svg" />}
    >
      Small
    </Button>
    <Button
      onClick={onClick}
      variant="solid"
      leadingIcon={<IconPlus is="svg" />}
      trailingIcon={<IconArrowRight is="svg" />}
    >
      Test Button
    </Button>
    <Button
      onClick={onClick}
      variant="solid"
      size="compact"
      leadingIcon={<IconArrowRight is="svg" />}
    >
      Compact
    </Button>
  </Grid>
);

export const WithStatusClassOverride = () => {
  const classes = useStyles();
  return (
    <Grid spacing={3} direction="row" alignItems="items-start">
      <Grid
        spacing={3}
        direction="column"
        alignItems="items-start"
        className={classes.statusPadding}
      >
        <Button classOverrides={{ status: classes.pinkSolid }}>
          Solid Button
        </Button>
        <Button classOverrides={{ status: classes.orangeSolid }}>
          Solid Button
        </Button>
        <Button classOverrides={{ status: classes.yellowSolid }}>
          Solid Button
        </Button>
        <Button classOverrides={{ status: classes.greenSolid }}>
          Solid Button
        </Button>
        <Button classOverrides={{ status: classes.blueSolid }}>
          Solid Button
        </Button>
      </Grid>
      <Grid
        spacing={3}
        direction="column"
        alignItems="items-start"
        className={classes.statusPadding}
      >
        <Button
          variant="outlined"
          classOverrides={{ status: classes.pinkOutline }}
        >
          Outlined Button
        </Button>
        <Button
          variant="outlined"
          classOverrides={{ status: classes.orangeOutline }}
        >
          Outlined Button
        </Button>
        <Button
          variant="outlined"
          classOverrides={{ status: classes.yellowOutline }}
        >
          Outlined Button
        </Button>
        <Button
          variant="outlined"
          classOverrides={{ status: classes.greenOutline }}
        >
          Outlined Button
        </Button>
        <Button
          variant="outlined"
          classOverrides={{ status: classes.blueOutline }}
        >
          Outlined Button
        </Button>
      </Grid>
      <Grid
        spacing={3}
        direction="column"
        alignItems="items-start"
        className={classes.greyBackground}
      >
        <Button
          classOverrides={{ status: classes.pinkInverted }}
          variant="inverted"
        >
          Inverted Button
        </Button>
        <Button
          classOverrides={{ status: classes.orangeInverted }}
          variant="inverted"
        >
          Inverted Button
        </Button>
        <Button
          classOverrides={{ status: classes.yellowInverted }}
          variant="inverted"
        >
          Inverted Button
        </Button>
        <Button
          classOverrides={{ status: classes.greenInverted }}
          variant="inverted"
        >
          Inverted Button
        </Button>
        <Button
          classOverrides={{ status: classes.blueInverted }}
          variant="inverted"
        >
          Inverted Button
        </Button>
      </Grid>
    </Grid>
  );
};
