/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@material-ui/core';

type AuthDetails = {
  email: string;
  password: string;
};

const App = () => {
  const { register, handleSubmit, formState } = useForm<AuthDetails>();

  const onSubmit = handleSubmit(({ email, password }) =>
    // eslint-disable-next-line no-console
    console.log(email, password)
  );

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Grid container dir="column" justify="center" alignItems="center">
          <Grid item>
            <TextField
              id="email"
              label="email"
              type="email"
              autoComplete="on"
              {...register('email', { required: true })}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password"
              label="password"
              type="password"
              {...register('password', { required: true })}
            />
          </Grid>
          <Grid item>
            <Button
              id="button-submit"
              variant="contained"
              color="primary"
              type="submit"
              disabled={!formState.isValid}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default App;
