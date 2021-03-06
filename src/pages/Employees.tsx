import React from 'react';
import PageHeader from '../components/PageHeader';
import PeopleIcon from '@material-ui/icons/People';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function EmployeeForm() {

    const classes = useStyles()
  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
      <EmployeeForm/>
      </Paper>
      
    </>
  );
}
