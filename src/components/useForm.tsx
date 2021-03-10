import React, { SyntheticEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

interface props {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: string;
  hireDate: any;
  isPermanent: boolean;
}

export const useForm = (initialFValues: props) => {
  const [values, setValues] = useState<props>(initialFValues);

  const handleInputChange = (
    e: React.ChangeEvent<{ name?: any | undefined; value: unknown }>,
  ) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(value);
    console.log(name);

    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  return {
    values,
    setValues,
    handleInputChange,
  };
};

const usestyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form: React.FC = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
};
