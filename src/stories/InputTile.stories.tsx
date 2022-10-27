
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import ListItem from "../components/ListItem";
import Radio from "../components/Radio";
import UnorderedList from "../components/UnorderedList";

import InputTile from "../components/InputTile";


export default {
  title: "ComponentLibrary/InputTile",
  component: InputTile,
} as ComponentMeta<typeof InputTile>;

// const Template: ComponentStory<typeof InputTile> = (args) => <InputTile  {...args} />;


export const PrimaryCheckbox = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(!option);

  return (
    <InputTile checked={option} onClick={onClick} role="checkbox">
      <Grid spacing={2} alignItems="items-center">
        <Checkbox
          value="one"
          id="option_one"
          checked={option}
          onClick={onClick}
        />
        <InputLabel
          onClick={onClick}
          clickable
          label="Option One"
          htmlFor="option_one"
          noBottomMargin
        />
      </Grid>
    </InputTile>
  );
};

export const CheckboxError = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(!option);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please select a valid option", "Second error"];

  return (
    <Grid spacing={1} direction="column">
      <InputTile role="checkbox" checked={option} onClick={onClick} hasError>
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            value="one"
            id="option_one"
            checked={option}
            onClick={onClick}
            hasError={hasError}
          />
          <InputLabel
            onClick={onClick}
            clickable
            label="Option One"
            htmlFor="option_one"
            noBottomMargin
          />
        </Grid>
      </InputTile>
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
    </Grid>
  );
};

export const CheckboxDisabled = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(!option);

  return (
    <InputTile role="checkbox" checked={option} onClick={onClick} disabled>
      <Grid spacing={2} alignItems="items-center">
        <Checkbox value="one" id="option_one" checked={option} disabled />
        <InputLabel
          label="Option One"
          htmlFor="option_one"
          noBottomMargin
          disabled
        />
      </Grid>
    </InputTile>
  );
};

export const CheckboxFitContent = () => {
  const optionsDefault = {
    one: false,
    two: false,
    three: false
  };

  const [options, setOptions] = React.useState(optionsDefault);

  export const onClick = key => () => {
    const newState = { ...options, [key]: !options[key] };

    setOptions(newState);
  };

  return (
    <Grid>
      <InputTile
        checked={options.one}
        onClick={onClick("one")}
        role="checkbox"
        autoWidth
      >
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            value="one"
            id="option_one"
            checked={options.one}
            onClick={onClick("one")}
          />
          <InputLabel
            onClick={onClick("one")}
            clickable
            label="Extra Long Option One"
            htmlFor="option_one"
            noBottomMargin
          />
        </Grid>
      </InputTile>
      <InputTile
        checked={options.two}
        onClick={onClick("two")}
        role="checkbox"
        autoWidth
      >
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            value="two"
            id="option_two"
            checked={options.two}
            onClick={onClick("two")}
          />
          <InputLabel
            onClick={onClick("two")}
            clickable
            label="Medium Option Two"
            htmlFor="option_two"
            noBottomMargin
          />
        </Grid>
      </InputTile>
      <InputTile
        checked={options.three}
        onClick={onClick("three")}
        role="checkbox"
        autoWidth
      >
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            value="three"
            id="option_three"
            checked={options.three}
            onClick={onClick("three")}
          />
          <InputLabel
            onClick={onClick("three")}
            clickable
            label="Option Three"
            htmlFor="option_three"
            noBottomMargin
          />
        </Grid>
      </InputTile>
    </Grid>
  );
};

export const RadioTiles = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList noTopMargin noLeftMargin variant="unstyled" spacing={2}>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "one"}
            onClick={onClick("one")}
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="one"
                id="option_one"
                checked={selection === "one"}
                onClick={onClick("one")}
              />
              <InputLabel
                label="Option One"
                htmlFor="option_one"
                onClick={onClick("one")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "two"}
            onClick={onClick("two")}
            hasError
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="two"
                id="option_two"
                checked={selection === "two"}
                onClick={onClick("two")}
                hasError
              />
              <InputLabel
                label="Option Two"
                htmlFor="option_two"
                onClick={onClick("two")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            checked={selection === "three"}
            onClick={onClick("three")}
            role="radio"
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="three"
                id="option_three"
                checked={selection === "three"}
                onClick={onClick("three")}
              />
              <InputLabel
                label="Option Three"
                htmlFor="option_three"
                onClick={onClick("three")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "four"}
            onClick={onClick}
            disabled
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="four"
                id="option_four"
                checked={selection === "four"}
                disabled
              />
              <InputLabel
                label="Option Four"
                htmlFor="option_four"
                disabled
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const RadioInline = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList
        noTopMargin
        noLeftMargin
        variant="unstyled"
        inline
        spacing={2}
      >
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "one"}
            onClick={onClick("one")}
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="one"
                id="option_one"
                checked={selection === "one"}
                onClick={onClick("one")}
              />
              <InputLabel
                label="Option One"
                htmlFor="option_one"
                onClick={onClick("one")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "two"}
            onClick={onClick("two")}
            hasError
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="two"
                id="option_two"
                checked={selection === "two"}
                onClick={onClick("two")}
                hasError
              />
              <InputLabel
                label="Option Two"
                htmlFor="option_two"
                onClick={onClick("two")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "three"}
            onClick={onClick("three")}
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="three"
                id="option_three"
                checked={selection === "three"}
                onClick={onClick("three")}
              />
              <InputLabel
                label="Option Three"
                htmlFor="option_three"
                onClick={onClick("three")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "four"}
            onClick={onClick}
            disabled
            autoWidth
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="four"
                id="option_four"
                checked={selection === "four"}
                disabled
              />
              <InputLabel
                label="Inline Auto Width"
                htmlFor="option_four"
                disabled
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const RadioFitContent = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList
        noTopMargin
        noLeftMargin
        variant="unstyled"
        inline
        spacing={2}
      >
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "one"}
            onClick={onClick("one")}
            autoWidth
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="one"
                id="option_one"
                checked={selection === "one"}
                onClick={onClick("one")}
              />
              <InputLabel
                label="Option One"
                htmlFor="option_one"
                onClick={onClick("one")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "two"}
            onClick={onClick("two")}
            hasError
            autoWidth
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="two"
                id="option_two"
                checked={selection === "two"}
                onClick={onClick("two")}
                hasError
              />
              <InputLabel
                label="Option Two"
                htmlFor="option_two"
                onClick={onClick("two")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "three"}
            onClick={onClick("three")}
            autoWidth
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="three"
                id="option_three"
                checked={selection === "three"}
                onClick={onClick("three")}
              />
              <InputLabel
                label="Option Three"
                htmlFor="option_three"
                onClick={onClick("three")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "four"}
            onClick={onClick}
            disabled
            autoWidth
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="four"
                id="option_four"
                checked={selection === "four"}
                disabled
              />
              <InputLabel
                label="Inline Auto Width"
                htmlFor="option_four"
                disabled
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
      </UnorderedList>
    </>
  );
};

// const inputTileStories = {
//   PrimaryCheckbox,
//   CheckboxError,
//   CheckboxDisabled,
//   CheckboxFitContent,
//   RadioTiles,
//   RadioInline,
//   RadioFitContent
// };

