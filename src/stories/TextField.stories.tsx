import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import IconCheck from "../shared/icons/icon-check.svg";
import IconDollar from "../shared/icons/icon-dollar.svg";
import IconLoading from "../shared/icons/icon-loading.svg";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";

import TextField from "../components/TextField";


export default {
  title: "ComponentLibrary/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

// const Template: ComponentStory<typeof TextField> = (args) => <TextField  {...args} />;


export const Primary = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="A field" htmlFor="textfield1" />
      <TextField
        id="textfield1"
        helperText="This is helper text"
        placeholder="Unanswered text field"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const Numerical = () => {
  const [value, setValue] = React.useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="A field" htmlFor="textfield2" />
      <TextField
        id="textfield2"
        helperText="This is helper text"
        placeholder="0"
        value={value}
        type="number"
        min={0}
        max={10}
        step={0.1}
        onChange={onChange}
      />
    </div>
  );
};

export const InputStates = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please enter a valid answer", "Second error"];

  return (
    <Grid direction="column" spacing={4}>
      <div>
        <InputLabel label="A required field" htmlFor="textfield1" required />
        <TextField id="textfield1" value={value} onChange={onChange} />
      </div>
      <div>
        <InputLabel label="A field with error state" htmlFor="textfield2" />
        <TextField id="textfield2" onChange={onChange} hasError={hasError} />
        {hasError && (
          <UnorderedList
            noBottomMargin
            noTopMargin
            noLeftMargin
            variant="unstyled"
          >
            {errors.map((error, i) => (
              <ListItem key={i}>
                <InputError>{error}</InputError>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </div>
      <div>
        <InputLabel label="A field with success state" htmlFor="textfield3" />
        <TextField
          id="textfield3"
          value={value}
          onChange={onChange}
          hasSuccess
        />
      </div>
      <div>
        <InputLabel label="A disabled field" htmlFor="textfield4" />
        <TextField id="textfield4" placeholder="A disabled field" disabled />
      </div>
    </Grid>
  );
};

export const WithIcons = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const onSearchCancel = () => setValue("");
  return (
    <Grid direction="column" spacing={4}>
      <div>
        <InputLabel label="An input with a leading icon" htmlFor="textfield1" />
        <TextField
          id="textfield1"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          leadingIcon={<IconDollar is="svg" />}
        />
      </div>
      <div>
        <InputLabel label="A search field example" htmlFor="textfield2" />
        <TextField
          id="textfield2"
          placeholder="Placeholder"
          value={value}
          min={1}
          max={10}
          step={1}
          onChange={onChange}
          onSearchCancel={onSearchCancel}
          type="search"
        />
      </div>
      <div>
        <InputLabel
          label="An input with a non-status trailing icon"
          htmlFor="textfield3"
        />
        <TextField
          id="textfield3"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          type="text"
          trailingIcon={<IconLoading is="svg" />}
        />
      </div>
      <div>
        <InputLabel
          label="An input with both leading and trailing icon"
          htmlFor="textfield4"
        />
        <TextField
          id="textfield4"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          type="text"
          leadingIcon={<IconDollar is="svg" />}
          trailingIcon={<IconCheck is="svg" />}
        />
      </div>
      <div>
        <InputLabel
          label="An input with error status with custom trailing icon"
          htmlFor="error-state-custom-trailing-icon"
        />
        <TextField
          id="error-state-custom-trailing-icon"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          type="text"
          hasError
          trailingIcon={<IconCheck is="svg" />}
        />
      </div>
      <div>
        <InputLabel
          label="An input with success status with custom trailing icon"
          htmlFor="success-state-custom-trailing-icon"
        />
        <TextField
          id="success-state-custom-trailing-icon"
          placeholder="Placeholder"
          value={value}
          onChange={onChange}
          type="text"
          hasSuccess
          trailingIcon={<IconCheck is="svg" />}
        />
      </div>
    </Grid>
  );
};

export const NoBottomMargin = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="A field" htmlFor="textfield1" />
      <TextField
        id="textfield1"
        helperText="This is helper text"
        placeholder="Unanswered text field"
        value={value}
        onChange={onChange}
        noBottomMargin
      />
    </div>
  );
};

export const MaxLength = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel
        label="A field with maxLength of 10"
        htmlFor="textfieldMaxLength"
      />
      <TextField
        id="textfieldMaxLength"
        placeholder="Unanswered text field"
        value={value}
        onChange={onChange}
        maxLength={10}
        noBottomMargin
      />
    </div>
  );
};

export const OnBlur = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const onBlur = () => window.alert("onBlur event");

  return (
    <div>
      <InputLabel
        label="A field with an onBlur event handler"
        htmlFor="textfieldOnBlur"
      />
      <TextField
        id="textfieldOnBlur"
        placeholder="Unanswered text field"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        noBottomMargin
      />
    </div>
  );
};

export const ReadOnly = () => (
  <div>
    <InputLabel label="Read-only label" htmlFor="readOnlyTextField" />
    <TextField
      id="readOnlyTextField"
      placeholder="Read-only input text"
      readOnly
    />
  </div>
);

export const FullWidth = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="A full width field" htmlFor="full-width" />
      <TextField id="full-width" value={value} onChange={onChange} fullWidth />
    </div>
  );
};

// const textFieldStories = {
//   Primary,
//   Numerical,
//   InputStates,
//   WithIcons,
//   NoBottomMargin,
//   MaxLength,
//   OnBlur,
//   ReadOnly,
//   FullWidth
// };
