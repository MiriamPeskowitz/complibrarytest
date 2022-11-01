import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";

import TextArea from "../components/TextArea";

export default {
  title: "ComponentLibrary/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

// const Template: ComponentStory<typeof TextArea> = (args) => <TextArea  {...args} />;

export const Default = () => (
  <>
    <InputLabel label="Label" htmlFor="text-area" />
    <TextArea
      id="text-area"
      placeholder="Placeholder"
      helperText="This is helper text (cannot enter > 15 characters)"
      maxLength={15}
    />
  </>
);

export const ErrorState = () => {
  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please enter a valid answer", "Second error"];
  return (
    <>
      <InputLabel label="Label" htmlFor="text-area" required />
      <TextArea
        id="text-area"
        placeholder="Placeholder"
        required
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
    </>
  );
};

export const SuccessState = () => (
  <>
    <InputLabel label="Label" htmlFor="text-area" />
    <TextArea id="text-area" placeholder="Placeholder" hasSuccess />
  </>
);

export const DisabledState = () => (
  <div>
    <InputLabel label="Label" htmlFor="text-area" />
    <TextArea id="text-area" placeholder="Placeholder" disabled />
  </div>
);

export const NoBottomMargin = () => (
  <div>
    <InputLabel label="Label" htmlFor="text-area" />
    <TextArea
      id="text-area"
      placeholder="Placeholder"
      maxLength={15}
      noBottomMargin
    />
    <InputError>This is helper text</InputError>
  </div>
);

export const ReadOnly = () => (
  <div>
    <InputLabel label="Read-only label" htmlFor="readOnlyTextArea" />
    <TextArea
      id="readOnlyTextArea"
      placeholder="Read-only input text"
      readOnly
    />
  </div>
);

export const CharacterCount = () => {
  const [textAreaData, setTextAreaData] = React.useState("");
  const textAreaOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTextAreaData(e.currentTarget.value);
  };
  const maxLength = 255;

  return (
    <>
      <InputLabel label="Character Count" htmlFor="text-area" required />
      <TextArea
        id="text-area"
        placeholder="Placeholder"
        showCharacterCount
        maxLength={maxLength}
        onChange={textAreaOnChange}
        value={textAreaData}
        hasError={textAreaData.length > maxLength}
      />
    </>
  );
};

// const textAreaStories = {
//   Default,
//   ErrorState,
//   SuccessState,
//   DisabledState,
//   NoBottomMargin,
//   ReadOnly,
//   CharacterCount
// };

