import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls';
import * as employeeService from '../../services/EmployeeService';

const genderitems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
];
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

const EmployeeForm: React.FC = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  return (
    <div>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />
            <Controls.Input
              label="Email"
              value={values.email}
              name="email"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderitems}
            />
            <Controls.Select
              name="departmentId"
              label="Departement"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartementCollection()}
            />
          </Grid>
        </Grid>
      </Form>
    </div>
  );
};

export default EmployeeForm;
