import React from 'react';
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Typography,
  FormHelperText
} from '@material-ui/core';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useStyles } from './register-user.styles';
import { config } from '../../../configs';
import { SaveButton } from '../../../components/buttons';

const { loginErrorMessages, userRoles: roles } = config;

const RegisterUser = () => {
  const styles = useStyles();

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required(loginErrorMessages.ENTER_EMAIL_MESSAGE)
      .email(loginErrorMessages.INVALID_EMAIL_MESSAGE),
    role: Yup.string().required(loginErrorMessages.SELECT_ROLE_MESSAGE)
  });

  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      role: '',
      email: ''
    },
    validationSchema: formSchema,
    validateOnBlur: true,
    onSubmit: ({ email, role }) => {
      console.log(email, role);
    }
  });

  const rolesList = roles.map((item, idx) => (
    <MenuItem key={idx} id={item.role} data-cy={item.role} value={item.role}>
      {item.label}
    </MenuItem>
  ));

  return (
    <Grid className={styles.detailsContainer}>
      <Grid className={styles.userDetails}>
        <Typography variant='h2' className={styles.registrationTitle}>
          Створити спецкористувача
        </Typography>
        <form onSubmit={handleSubmit}>
          <Paper className={styles.userInputPanel}>
            <FormControl
              className={styles.formControl}
              error={touched.email && !!errors.email}
            >
              <TextField
                onChange={handleChange}
                value={values.email}
                id='email'
                variant='outlined'
                label='Пошта'
                name='email'
                type='text'
                onBlur={handleChange}
                error={touched.email && !!errors.email}
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>
            <FormControl
              className={styles.formControl}
              error={touched.role && !!errors.role}
            >
              <InputLabel id='role-label'>Роль</InputLabel>
              <Select
                labelId='role-label'
                id='role'
                name='role'
                type='text'
                onBlur={handleChange}
                value={values.role}
                onChange={handleChange}
                className={styles.formSelect}
                error={touched.role && !!errors.role}
              >
                {rolesList}
              </Select>
              <FormHelperText>{touched.role && errors.role}</FormHelperText>
            </FormControl>
            <FormControl className={styles.formControl}>
              <SaveButton
                type='submit'
                title='Створити'
                className={styles.saveButton}
              />
            </FormControl>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterUser;
