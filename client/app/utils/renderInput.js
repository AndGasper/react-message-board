import React from 'react';
import TextField from 'material-ui/TextField';
// Set the default text value to label if none were provided, else populate the fields with the old text
export default function renderInput({
  input,
  label,
  type,
  meta: { active, dirty, touched, error },
}) {
  return (
    <TextField
      errorText={touched && !active && dirty && error}
      errorStyle={errorText}
      floatingLabelStyle={{ color: 'black' }}
      floatingLabelText={label}
      hintText={label}
      hintStyle={{ color: 'black' }}
      type={type}
      {...input}
    />
  );
}
