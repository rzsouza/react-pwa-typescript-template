import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import AuthPage from './AuthPage';

const EMAIL = 'username@example.com';
const PASSWORD = 'password';
const WRONG_PASSWORD = 'wrong_password';

test('can log in with correct password', async () => {
  render(<AuthPage />);
  fireEvent.input(screen.getByLabelText('email', { exact: false }), {
    target: { value: EMAIL },
  });
  fireEvent.input(screen.getByLabelText('password', { exact: false }), {
    target: { value: PASSWORD },
  });
  fireEvent.submit(screen.getByText('Login'));
  await waitFor(() => screen.findByText('You logged in successfully'));
});

test('fail to log in with wrong password', async () => {
  render(<AuthPage />);
  fireEvent.input(screen.getByLabelText('email', { exact: false }), {
    target: { value: EMAIL },
  });
  fireEvent.input(screen.getByLabelText('password', { exact: false }), {
    target: { value: WRONG_PASSWORD },
  });
  fireEvent.submit(screen.getByText('Login'));
  await waitFor(() => screen.findByText('You failed to login'));
});
