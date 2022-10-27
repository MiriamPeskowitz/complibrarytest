import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import InputTile from "../components/InputTile";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";

import Checkbox from "../components/Checkbox";


export default {
  title: "ComponentLibrary/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// const Template: ComponentStory<typeof Checkbox> = (args) => < Checkbox {...args} />;


export const Primary = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(!option);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Checkbox
        name="option_one"
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
  );
};

export const Error = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(!option);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please select a valid option", "Second error"];

  return (
    <Grid spacing={1} direction="column">
      <Grid direction="row" alignItems="items-center" spacing={2}>
        <Checkbox
          name="option_one"
          value="one"
          id="option_one"
          hasError={hasError}
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

export const Disabled = () => {
  const [option, setOption] = React.useState(false);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Checkbox
        name="option_one"
        value="one"
        id="option_one"
        checked={option}
        disabled
      />
      <InputLabel
        disabled
        label="Option One"
        htmlFor="option_one"
        noBottomMargin
      />
    </Grid>
  );
};

export const PrimaryGroup = () => {
  const [selection, setSelection] = React.useState([]);
  const onClick = index => () => {
    const newSelections = [...selection];
    newSelections[index] = !newSelections[index];
    setSelection(newSelections);
  };

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="one"
              id="option_one"
              checked={!!selection[0]}
              onClick={onClick(0)}
            />
            <InputLabel
              label="Option One"
              htmlFor="option_one"
              onClick={onClick(0)}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="two"
              id="option_two"
              checked={!!selection[1]}
              hasError
              onClick={onClick(1)}
            />
            <InputLabel
              label="Option Two"
              htmlFor="option_two"
              onClick={onClick(1)}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="three"
              id="option_three"
              checked={!!selection[2]}
              disabled
            />
            <InputLabel
              label="Option Three"
              htmlFor="option_three"
              disabled
              noBottomMargin
            />
          </Grid>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const PrimaryInlineGroup = () => {
  const [selection, setSelection] = React.useState([]);
  const onClick = index => () => {
    const newSelections = [...selection];
    newSelections[index] = !newSelections[index];
    setSelection(newSelections);
  };

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList
        variant="unstyled"
        inline
        noTopMargin
        noLeftMargin
        spacing={3}
      >
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="one"
              id="option_one"
              checked={!!selection[0]}
              onClick={onClick(0)}
            />
            <InputLabel
              label="Option One"
              htmlFor="option_one"
              onClick={onClick(0)}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="two"
              id="option_two"
              checked={!!selection[1]}
              hasError
              onClick={onClick(1)}
            />
            <InputLabel
              label="Option Two"
              htmlFor="option_two"
              onClick={onClick(1)}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Checkbox
              name="group"
              value="three"
              id="option_three"
              checked={!!selection[2]}
              disabled
            />
            <InputLabel
              label="Option Three"
              htmlFor="option_three"
              disabled
              noBottomMargin
            />
          </Grid>
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const TileGroup = () => {
  const [selection, setSelection] = React.useState([]);
  const onClick = index => () => {
    const newSelections = [...selection];
    newSelections[index] = !newSelections[index];
    setSelection(newSelections);
  };

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin spacing={2}>
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[0]}
            onClick={onClick(0)}
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="one"
                id="option_one"
                checked={!!selection[0]}
                onClick={onClick(0)}
              />
              <InputLabel
                label="Option One"
                htmlFor="option_one"
                onClick={onClick(0)}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[1]}
            onClick={onClick(1)}
            hasError
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="two"
                id="option_two"
                checked={!!selection[1]}
                onClick={onClick(1)}
                hasError
              />
              <InputLabel
                label="Option Two"
                htmlFor="option_two"
                onClick={onClick(1)}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[2]}
            onClick={onClick(2)}
            disabled
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="three"
                id="option_three"
                checked={!!selection[2]}
                disabled
              />
              <InputLabel
                label="Option Three"
                htmlFor="option_three"
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

export const TileInlineGroup = () => {
  const [selection, setSelection] = React.useState([]);
  const onClick = index => () => {
    const newSelections = [...selection];
    newSelections[index] = !newSelections[index];
    setSelection(newSelections);
  };

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList
        inline
        variant="unstyled"
        noLeftMargin
        noTopMargin
        spacing={2}
      >
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[0]}
            onClick={onClick(0)}
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="one"
                id="option_one"
                checked={!!selection[0]}
                onClick={onClick(0)}
              />
              <InputLabel
                label="Option One"
                htmlFor="option_one"
                onClick={onClick(0)}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[1]}
            onClick={onClick(1)}
            hasError
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="two"
                id="option_two"
                checked={!!selection[1]}
                onClick={onClick(1)}
                hasError
              />
              <InputLabel
                label="Option Two"
                htmlFor="option_two"
                onClick={onClick(1)}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="checkbox"
            checked={!!selection[2]}
            onClick={onClick(2)}
            disabled
          >
            <Grid spacing={2} alignItems="items-center">
              <Checkbox
                name="group"
                value="three"
                id="option_three"
                checked={selection === "three"}
                disabled
              />
              <InputLabel
                label="Option Three"
                htmlFor="option_three"
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

export const DisabledWithErrorsGroup = () => {
  const [hasError, setHasError] = React.useState(true);
  const errors = ["You just can't edit this", "And there's another problem"];

  return (
    <>
      <InputLabel label="A set of disabled options" />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin spacing={2}>
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            name="group"
            value="one"
            id="option_one"
            checked={false}
            disabled
          />
          <InputLabel
            label="Option One"
            htmlFor="option_one"
            disabled
            noBottomMargin
          />
        </Grid>
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            name="group"
            value="two"
            id="option_two"
            checked={false}
            disabled
          />
          <InputLabel
            label="Option Two"
            htmlFor="option_two"
            disabled
            noBottomMargin
          />
        </Grid>
        <Grid spacing={2} alignItems="items-center">
          <Checkbox
            name="group"
            value="three"
            id="option_three"
            checked={false}
            disabled
          />
          <InputLabel
            label="Option Three"
            htmlFor="option_three"
            disabled
            noBottomMargin
          />
        </Grid>
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
      </UnorderedList>
    </>
  );
};

// const checkboxStories = {
//   Primary,
//   Error,
//   Disabled,
//   PrimaryGroup,
//   PrimaryInlineGroup,
//   TileGroup,
//   TileInlineGroup,
//   DisabledWithErrorsGroup
// };


