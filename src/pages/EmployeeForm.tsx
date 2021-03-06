import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { make } from 'core-js/fn/object';
import { useForm, Form } from '../components/useForm';

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: '',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <div>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              name="fullName"
            />
            <TextField
              variant="outlined"
              label="Email"
              value={values.email}
              name="email"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Form>
    </div>
  );
}
