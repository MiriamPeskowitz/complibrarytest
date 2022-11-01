import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";

import Toggle from "../components/Toggle";

export default {
  title: "ComponentLibrary/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

// const Template: ComponentStory<typeof Toggle> = (args) => <Toggle  {...args} />;

export const ToggleDefault: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const onClick = () => setActive(!active);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Toggle
        id="toggle"
        value={active ? "on" : "off"}
        checked={active}
        onClick={onClick}
      />
      <InputLabel
        clickable
        onClick={onClick}
        label="Default toggle"
        htmlFor="toggle"
        noBottomMargin
      />
    </Grid>
  );
};

export const ToggleSuccess: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const onClick = () => setActive(!active);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Toggle
        id="toggle"
        value={active ? "on" : "off"}
        hasSuccess
        checked={active}
        onClick={onClick}
      />
      <InputLabel
        clickable
        onClick={onClick}
        label="Success toggle"
        htmlFor="toggle"
        noBottomMargin
      />
    </Grid>
  );
};

export const ToggleError: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const onClick = () => setActive(!active);

  const [hasError, setHasError] = React.useState(true);
  const error = ["There was a problem"];

  return (
    <Grid spacing={2} alignItems="items-center" direction="row">
      <Toggle
        id="toggle"
        value={active ? "on" : "off"}
        hasError={hasError}
        checked={active}
        onClick={onClick}
      />
      <Grid spacing={2} alignItems="items-baseline">
        <InputLabel
          clickable
          onClick={onClick}
          label="Error toggle"
          htmlFor="toggle"
          noBottomMargin
        />
        {active && hasError && <InputError>{error}</InputError>}
      </Grid>
    </Grid>
  );
};

export const ToggleDisabled: React.FC = () => {
  return (
    <Grid direction="column" spacing={3}>
      <Grid spacing={2} alignItems="items-center">
        <Toggle id="toggle1" value="off" disabled checked={false} />
        <InputLabel
          label="Disabled off toggle"
          htmlFor="toggle1"
          noBottomMargin
        />
      </Grid>
      <Grid spacing={2} alignItems="items-center">
        <Toggle id="toggle2" value="on" disabled checked={true} />
        <InputLabel
          label="Disabled on toggle"
          htmlFor="toggle2"
          noBottomMargin
        />
      </Grid>
      <Grid spacing={2} alignItems="items-center">
        <Toggle id="toggle3" value="off" disabled checked={false} hasSuccess />
        <InputLabel
          label="Disabled success toggle"
          htmlFor="toggle3"
          noBottomMargin
        />
      </Grid>
      <Grid spacing={2} alignItems="items-center">
        <Toggle id="toggle4" value="off" disabled checked={false} hasError />
        <InputLabel
          label="Disabled error toggle"
          htmlFor="toggle4"
          noBottomMargin
        />
      </Grid>
    </Grid>
  );
};

// const toggleStories = {
//   ToggleDefault,
//   ToggleSuccess,
//   ToggleError,
//   ToggleDisabled
// };

