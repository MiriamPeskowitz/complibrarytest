import * as React from "react";

import Grid from "../components/Grid";
import InputLabel from "../components/InputLabel";
import PasswordField from "../components/PasswordField";

const Primary = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="Enter Password" htmlFor="primary-password" />
      <PasswordField id="primary-password" value={value} onChange={onChange} />
    </div>
  );
};

const InputStates = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Grid direction="column" spacing={4}>
      <div>
        <InputLabel
          label="A required PasswordField"
          htmlFor="password-required"
          required
        />
        <PasswordField
          id="password-required"
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <InputLabel
          label="A disabled PasswordField"
          htmlFor="password-disabled"
        />
        <PasswordField id="password-disabled" placeholder="disabled" disabled />
      </div>
    </Grid>
  );
};

const NoBottomMargin = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="Enter Password" htmlFor="password-no-bottom-margin" />
      <PasswordField
        id="password-no-bottom-margin"
        value={value}
        onChange={onChange}
        noBottomMargin
      />
      <div>Div here to show no bottom margin.</div>
    </div>
  );
};

const HasSuccess = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="Enter Password" htmlFor="password-has-success" />
      <PasswordField
        id="password-has-success"
        value={value}
        onChange={onChange}
        hasSuccess
      />
    </div>
  );
};

const HasError = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <InputLabel label="Enter Password" htmlFor="password-has-error" />
      <PasswordField
        id="password-has-error"
        value={value}
        onChange={onChange}
        hasError
      />
    </div>
  );
};

const PasswordFieldStories = {
  Primary,
  InputStates,
  NoBottomMargin,
  HasSuccess,
  HasError
};

export default PasswordFieldStories;
