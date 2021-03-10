import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { MenuItem, Select } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import fields, {defaultValues} from './register.field';

const classes = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const { register, handleSubmit, errors, reset, control } = useForm({
    mode: 'onSubmit',
    defaultValues
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: login.js ~ line 45 ~ onSubmit ~ data", data)

  }

  const renderFields = fields.map((field) => (
    <div key={field.id}>
      {field.type === 'select' ? 
        <Controller
          as={
            <Select 
              type={field.type}
              variant="outlined"
              fullWidth
              id={field.type}
              label={field.placeholder}
              autoFocus
              value={'Gender'}
              // helperText={errors[field.name] && errors[field.name].message}
              error={errors[field.name] && errors[field.name].message}
            >
              <MenuItem value=''>None</MenuItem>
              {field.options.map((op, index) => (
                <MenuItem key={index} value={op}>{op}</MenuItem>
              ))}
            </Select>
          }
          name={field.name}
          control={control}
          rules={field.validation}
        >
        </Controller>
        :
        <Controller
          as={
            <TextField 
            type={field.type}
            variant="outlined"
            margin="normal"
            fullWidth
            id={field.type}
            label={field.placeholder}
            autoComplete={field.name}
            autoFocus
            helperText={errors[field.name] && errors[field.name].message}
            error={errors[field.name] && errors[field.name].message}
            />
          }
          name={field.name}
          control={control}
          rules={field.validation}
        />
      }
    </div>
    )
  )

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          {renderFields}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Log In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  )
}

export default Register