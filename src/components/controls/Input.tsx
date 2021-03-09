import React from 'react';
import { TextField } from '@material-ui/core';
import { ChangeEventHandler } from 'react';

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
export default Input;
