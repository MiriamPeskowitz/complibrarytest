import * as React from "react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import InputLabel from "../components/InputLabel";
import ListItem from "../components/ListItem";
import Option from "../components/Option";
import UnorderedList from "../components/UnorderedList";

import Select from "../components/Select";

const Primary = () => {
  const options = [
    { name: "Allegheny", value: "allegheny" },
    { name: "Berks", value: "berks", disabled: true },
    { name: "Philadelphia", value: "philadelphia" },
    { name: "Pittsburgh", value: "pittsburgh" }
  ];
  const [selected, setSelected] = React.useState("");
  const getSelectedName = val => {
    if (!val) return "";
    return options.find(option => option.value === val).name;
  };
  const onClick = (val: string) => e => setSelected(val);
  const [hasError] = React.useState(true);
  const errors = ["Please select a valid option", "Second error"];

  return (
    <Grid direction="column" spacing={4}>
      <div>
        <InputLabel label="Primary select" htmlFor="county" />
        <Select
          id="county1"
          placeholder="Select..."
          selected={getSelectedName(selected)}
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
              disabled={option.disabled}
              onClick={onClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <InputLabel
          label="Primary required select with error"
          htmlFor="county2"
          required
        />
        <Select
          placeholder="Select..."
          id="county2"
          required
          selected={getSelectedName(selected)}
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
              disabled={option.disabled}
              onClick={onClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
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
        <InputLabel label="Primary disabled select" htmlFor="county3" />
        <Select
          placeholder="Select..."
          id="county3"
          disabled
          selected={getSelectedName(selected)}
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
              disabled={option.disabled}
              onClick={onClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <InputLabel label="Compact select" htmlFor="county4" />
        <Select
          placeholder="Select..."
          id="county4"
          compact
          selected={getSelectedName(selected)}
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
              disabled={option.disabled}
              onClick={onClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </div>
      <div>
        <InputLabel label="Read only select" htmlFor="county5" />
        <Select
          id="county5"
          placeholder="Select..."
          selected="Philadelphia"
          readOnly
        >
          {options.map(option => (
            <Option
              key={option.value}
              value={option.value}
              selected={selected === option.value}
              disabled={option.disabled}
              onClick={onClick(option.value)}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </div>
    </Grid>
  );
};

const ErrorState = () => {
  const options = [
    { name: "Allegheny", value: "allegheny" },
    { name: "Berks", value: "berks", disabled: true },
    { name: "Philadelphia", value: "philadelphia" },
    { name: "Pittsburgh", value: "pittsburgh" }
  ];
  const [selected, setSelected] = React.useState("");
  const getSelectedName = val => {
    if (!val) return "";
    return options.find(option => option.value === val).name;
  };

  const onClick = (val: string) => e => setSelected(val);

  return (
    <>
      <InputLabel label="Primary select" htmlFor="county" />
      <Select
        id="county1"
        placeholder="Select..."
        selected={getSelectedName(selected)}
        hasError
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

const SuccessState = () => {
  const options = [
    { name: "Allegheny", value: "allegheny" },
    { name: "Berks", value: "berks", disabled: true },
    { name: "Philadelphia", value: "philadelphia" },
    { name: "Pittsburgh", value: "pittsburgh" }
  ];
  const [selected, setSelected] = React.useState("");
  const getSelectedName = val => {
    if (!val) return "";
    return options.find(option => option.value === val).name;
  };
  const onClick = (val: string) => e => setSelected(val);

  return (
    <>
      <InputLabel label="Primary select" htmlFor="county" />
      <Select
        id="county1"
        placeholder="Select..."
        selected={getSelectedName(selected)}
        hasSuccess
      >
        {options.map(option => (
          <Option
            key={option.value}
            value={option.value}
            selected={selected === option.value}
            disabled={option.disabled}
            onClick={onClick(option.value)}
          >
            {option.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

const selectStories = {
  Primary,
  ErrorState,
  SuccessState
};

export default selectStories;
