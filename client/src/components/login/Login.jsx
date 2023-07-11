import React from 'react';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

export const Login = () => {
  const [ loginUser ] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResult = await loginUser({
      variables: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      },
    });
    const token = mutationResult.data.login.token;
    console.log("token", token);
    Auth.login(token);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">E-mail</label>
        <input name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input name="password" id="password" />

        <button
          className="btn btn-info btn-block py-3"
          type="submit"
          onClick={handleFormSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};


