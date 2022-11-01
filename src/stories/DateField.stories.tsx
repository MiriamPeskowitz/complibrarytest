import React from "react";
import InputLabel from "../components/InputLabel";
import DateField from "../components/DateField";

const Default = () => {
  const [dateValue, setDateValue] = React.useState("09222021");
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);

  return (
    <div>
      <InputLabel label="Date" htmlFor="date" />
      <DateField id="date" value={dateValue} onChange={onDateChange} />
    </div>
  );
};

const Disabled = () => {
  const [dateValue, setDateValue] = React.useState("09222021");
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);

  return (
    <div>
      <InputLabel label="Date" htmlFor="date" />
      <DateField id="date" value={dateValue} onChange={onDateChange} disabled />
    </div>
  );
};

const Required = () => {
  const [dateValue, setDateValue] = React.useState("09222021");
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);

  return (
    <div>
      <InputLabel label="Date" htmlFor="date" required />
      <DateField id="date" value={dateValue} onChange={onDateChange} required />
    </div>
  );
};

const OnBlur = () => {
  const [dateValue, setDateValue] = React.useState("09222021");
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);
  const onBlur = () => window.alert("onBlur event");

  return (
    <div>
      <InputLabel label="Date" htmlFor="date-field-onblur" required />
      <DateField
        id="date-field-onblur"
        value={dateValue}
        onChange={onDateChange}
        onBlur={onBlur}
        required
      />
    </div>
  );
};

const HasError = () => {
  const [dateValue, setDateValue] = React.useState("09222021");
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDateValue(e.target.value);

  return (
    <div>
      <InputLabel label="Date" htmlFor="date-field-has-error" />
      <DateField
        id="date-field-has-error"
        value={dateValue}
        onChange={onDateChange}
        hasError={true}
      />
    </div>
  );
};

const ReadOnly = () => (
  <div>
    <InputLabel label="Date" htmlFor="date" />
    <DateField id="date" value="09222021" readOnly />
  </div>
);

const DateFieldStories = {
  Default,
  Disabled,
  Required,
  OnBlur,
  HasError,
  ReadOnly
};

export default DateFieldStories;
