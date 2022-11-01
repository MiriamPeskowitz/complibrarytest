import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import InputLabel from "../components/InputLabel";

import NumberField from "../components/NumberField";

export default {
  title: "ComponentLibrary/NumberField ",
  component: NumberField,
} as ComponentMeta<typeof NumberField >;

// const Template: ComponentStory<typeof NumberField > = (args) => <NumberField   {...args} />;

export const Primary = () => {
  const [num, setNum] = React.useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, val: number) =>
    setNum(val);

  return (
    <>
      <InputLabel label="Number field" />
      <NumberField id="test" value={num} onChange={onChange} />
    </>
  );
};

export const WithMinMaxValues = () => {
  const [num, setNum] = React.useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, val: number) =>
    setNum(val);

  return (
    <>
      <InputLabel label="Min = 0, Max = 10" />
      <NumberField id="test" value={num} onChange={onChange} min={0} max={10} />
    </>
  );
};

export const WithStep = () => {
  const [num0, setNum0] = React.useState(0);
  const [num1, setNum1] = React.useState(0);
  const onChange0 = (e: React.ChangeEvent<HTMLInputElement>, val: number) =>
    setNum0(val);
  const onChange1 = (e: React.ChangeEvent<HTMLInputElement>, val: number) =>
    setNum1(val);

  return (
    <Grid direction="column" spacing={3}>
      <div>
        <InputLabel label="Step = 2" />
        <NumberField id="step0" value={num0} onChange={onChange0} step={2} />
      </div>
      <div>
        <InputLabel label="Step = .5" />
        <NumberField id="step1" value={num1} onChange={onChange1} step={0.5} />
      </div>
    </Grid>
  );
};

export const OtherStates = () => (
  <Grid direction="column" spacing={3}>
    <div>
      <InputLabel label="Disabled" />
      <NumberField
        id="disabled"
        value={0}
        onChange={() => {
          /* empty */
        }}
        disabled
      />
    </div>
    <div>
      <InputLabel label="Error" />
      <NumberField
        id="error"
        value={0}
        onChange={() => {
          /* empty */
        }}
        hasError
      />
    </div>
    <div>
      <InputLabel label="Success" />
      <NumberField
        id="success"
        value={0}
        onChange={() => {
          /* empty */
        }}
        hasSuccess
      />
    </div>
    <div>
      <InputLabel label="Required" required />
      <NumberField
        id="success"
        value={0}
        onChange={() => {
          /* empty */
        }}
        required
      />
    </div>
  </Grid>
);

export const NoBottomMargin = () => (
  <>
    <NumberField
      id="test"
      value={0}
      onChange={() => {
        /* empty */
      }}
      noBottomMargin
    />
    <InputLabel label="No bottom margin" />
  </>
);

export const OnBlur = () => (
  <>
    <NumberField
      id="test"
      value={0}
      onChange={() => {
        /* empty */
      }}
      onBlur={() => window.alert("onBlur event")}
    />
    <InputLabel label="No bottom margin" />
  </>
);

export const ReadOnly = () => (
  <>
    <InputLabel label="Read-only number field" />
    <NumberField
      id="test"
      value={1}
      readOnly
      onChange={() => {
        /* empty */
      }}
    />
  </>
);

// const NumberFieldStories = {
//   Primary,
//   WithMinMaxValues,
//   WithStep,
//   OtherStates,
//   NoBottomMargin,
//   OnBlur,
//   ReadOnly
// };

