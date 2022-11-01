import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";

import MaskedTextField from "../components/MaskedTextField";

export default {
  title: "ComponentLibrary/MaskedTextField",
  component: MaskedTextField,
} as ComponentMeta<typeof MaskedTextField>;

// const Template: ComponentStory<typeof MaskedTextField> = (args) => <MaskedTextField  {...args} />;



export const Primary = () => {
  const [value, setValue] = React.useState(343444433);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please enter a valid number", "Second error"];

  return (
    <Grid direction="column" spacing={4}>
      <div>
        <InputLabel label="Telephone" htmlFor="telephone" />
        <MaskedTextField id="telephone" value={value} onChange={onChange} />
      </div>
      <div>
        <InputLabel label="SSN" htmlFor="ssn" />
        <MaskedTextField
          id="ssn"
          variant="ssn"
          value={value}
          hasError={hasError}
        />
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
        <InputLabel label="Money" htmlFor="money" required />
        <MaskedTextField
          id="money"
          variant="money"
          value={value}
          onChange={onChange}
          required
          helperText="This one is required"
        />
      </div>
      <div>
        <InputLabel label="No Bottom Margin (telephone)" htmlFor="telephone1" />
        <MaskedTextField
          id="telephone1"
          value={value}
          onChange={onChange}
          helperText="This one is required"
          noBottomMargin
        />
      </div>
    </Grid>
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
        label="A MaskedTextField with an onBlur event handler"
        htmlFor="masked-text-field-onblur"
      />
      <MaskedTextField
        id="masked-text-field-onblur"
        placeholder="Unanswered field"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export const ReadOnly = () => (
  <div>
    <InputLabel label="Read-only label" htmlFor="readOnlyTextField" />
    <MaskedTextField
      id="readOnlyTextField"
      placeholder="Read-only input text"
      readOnly
    />
  </div>
);

export const ReadOnlyPhonePrivate = () => (
  <div>
    <InputLabel label="Read-only label" htmlFor="readOnlyTextField" />
    <MaskedTextField
      id="readOnlyTextField"
      placeholder="Read-only input text"
      readOnly
      variant="phonePrivate"
      value="2151231234"
    />
  </div>
);
