/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@material-ui/core';

type AuthDetails = {
  email: string;
  password: string;
  confirmPassword: string;
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loginStateMsg, setLoginStateMsg] = useState<string>(
    'You are logged out'
  );

  const { register, handleSubmit, watch } = useForm<AuthDetails>();

  const validatePassword = (value: string) =>
    isLogin || value === watch('confirmPassword');

  const onSubmit = handleSubmit(({ email, password }) => {
    if (password === 'password') {
      setLoginStateMsg('You logged in successfully');
    } else {
      setLoginStateMsg('You failed to login');
    }
  });

  const handleSwitchLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <form onSubmit={onSubmit} style={{ padding: 5 }}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item style={{ paddingTop: 30 }}>
            <TextField
              id="email"
              label="email"
              type="email"
              autoComplete="on"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Grid>
          <Grid item style={{ paddingBottom: 20 }}>
            <TextField
              id="password"
              label="password"
              type="password"
              autoComplete="on"
              {...register('password', {
                required: true,
                minLength: 6,
                validate: validatePassword,
              })}
            />
          </Grid>
          {isLogin ? (
            ''
          ) : (
            <Grid item style={{ paddingBottom: 20 }}>
              <TextField
                id="confirm-password"
                type="password"
                label="password confirmation"
                {...register('confirmPassword', {
                  required: true,
                  minLength: 6,
                })}
              />
            </Grid>
          )}

          <Grid item>
            <Button
              id="button-submit"
              variant="contained"
              color="primary"
              type="submit"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              id="button-switch"
              variant="outlined"
              color="primary"
              onClick={handleSwitchLogin}
            >
              Switch to {isLogin ? 'Sign Up' : 'Login'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <p>{loginStateMsg}</p>
    </>
  );
};
export default AuthPage;
