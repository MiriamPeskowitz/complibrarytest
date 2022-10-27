import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconDollar from "../helpers//icons/icon-dollar.svg";

import Grid from "../components/Grid";
import InputLabel from "../components/InputLabel";
import InputTile from "../components/InputTile";
import ListItem from "../components/ListItem";
import Radio from "../components/Radio";
import TextField from "../components/TextField";
import Typography from "../components/Typography";
import UnorderedList from "../components/UnorderedList";

import IndentSection from "../components/IndentSection";

export default {
  title: "ComponentLibrary/IndentSection",
  component: IndentSection,
} as ComponentMeta<typeof IndentSection>;

// const Template: ComponentStory<typeof IndentSection> = (args) => <IndentSection  {...args} />;


export const Text = () => (
  <>
    <Typography variant="h3" noBottomMargin>
      Section headline
    </Typography>
    <Typography variant="p" noBottomMargin>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
    <IndentSection>
      <Typography variant="h5" noBottomMargin noTopMargin>
        Indented section headline
      </Typography>
      <Typography body="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </IndentSection>
  </>
);
export const Forms = () => {
  const [selection, setSelection] = React.useState("rent");
  const onClick = (val: string) => () => setSelection(val);

  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <>
      <InputLabel label="Do you rent or own your home?" required />
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
            checked={selection === "rent"}
            onClick={onClick("rent")}
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="rent"
                id="rent"
                checked={selection === "rent"}
                onClick={onClick("rent")}
              />
              <InputLabel
                label="Rent"
                htmlFor="rent"
                onClick={onClick("rent")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
        <ListItem>
          <InputTile
            role="radio"
            checked={selection === "own"}
            onClick={onClick("own")}
          >
            <Grid spacing={2} alignItems="items-center">
              <Radio
                name="group"
                value="own"
                id="option_two"
                checked={selection === "own"}
                onClick={onClick("own")}
              />
              <InputLabel
                label="Own"
                htmlFor="own"
                onClick={onClick("own")}
                clickable
                noBottomMargin
              />
            </Grid>
          </InputTile>
        </ListItem>
      </UnorderedList>
      {selection === "rent" && (
        <IndentSection>
          <InputLabel
            required
            label="What does your rent cost?"
            htmlFor="textfield1"
          />
          <TextField
            id="textfield1"
            placeholder="0.00"
            value={value}
            onChange={onChange}
            leadingIcon={<IconDollar is="svg" />}
          />
        </IndentSection>
      )}
    </>
  );
};

