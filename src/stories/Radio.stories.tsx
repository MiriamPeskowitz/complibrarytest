import * as React from "react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import InputTile from "../components/InputTile";
import ListItem from "../components/ListItem";
import UnorderedList from "../components/UnorderedList";

import Radio from "../components/Radio";

const Primary = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(true);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Radio
        name="group"
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

const Error = () => {
  const [option, setOption] = React.useState(false);
  const onClick = () => setOption(true);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please select a valid option", "Second error"];

  return (
    <Grid spacing={1} direction="column">
      <Grid direction="row" alignItems="items-center" spacing={2}>
        <Radio
          name="group"
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

const Disabled = () => {
  const [option, setOption] = React.useState(false);

  return (
    <Grid spacing={2} alignItems="items-center">
      <Radio
        name="group"
        value="one"
        id="option_one"
        checked={option}
        disabled
      />
      <InputLabel
        label="Option One"
        htmlFor="option_one"
        noBottomMargin
        disabled
      />
    </Grid>
  );
};

const PrimaryGroup = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin>
        <ListItem>
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
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Radio
              name="group"
              value="two"
              id="option_two"
              checked={selection === "two"}
              hasError
              onClick={onClick("two")}
            />
            <InputLabel
              label="Option Two"
              htmlFor="option_two"
              onClick={onClick("two")}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Radio
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
        </ListItem>
      </UnorderedList>
    </>
  );
};

const PrimaryInlineGroup = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

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
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Radio
              name="group"
              value="two"
              id="option_two"
              checked={selection === "two"}
              hasError
              onClick={onClick("two")}
            />
            <InputLabel
              label="Option Two"
              htmlFor="option_two"
              onClick={onClick("two")}
              clickable
              noBottomMargin
            />
          </Grid>
        </ListItem>
        <ListItem>
          <Grid spacing={2} alignItems="items-center">
            <Radio
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
        </ListItem>
      </UnorderedList>
    </>
  );
};

const TileGroup = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

  return (
    <>
      <InputLabel label="Please choose one option" required />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin spacing={2}>
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
            onClick={onClick}
            disabled
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
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

const TileInlineGroup = () => {
  const [selection, setSelection] = React.useState("one");
  const onClick = (value: string) => () => setSelection(value);

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
            onClick={onClick}
            disabled
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
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

const DisabledWithErrorsGroup = () => {
  const [hasError, setHasError] = React.useState(true);
  const errors = ["You just can't edit this", "And there's another problem"];

  return (
    <>
      <InputLabel label="A set of disabled options" />
      <UnorderedList variant="unstyled" noTopMargin noLeftMargin spacing={2}>
        <Grid spacing={2} alignItems="items-center">
          <Radio
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
          <Radio
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
          <Radio
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

const radioStories = {
  Primary,
  Error,
  Disabled,
  PrimaryGroup,
  PrimaryInlineGroup,
  TileGroup,
  TileInlineGroup,
  DisabledWithErrorsGroup
};

export default radioStories;
