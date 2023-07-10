import React from 'react';
import { SIGNUP_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

export const SignUp = () => {
    const [ addUser ] = useMutation(SIGNUP_USER);

    // handleFormSubmit function returns a 404 error, possibly needs to route back to home??
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResult = await addUser({
            variables: {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value
            }
        });
        const token = mutationResult.data.addUser.token;
        Auth.login(token);
    }

    return (
    <div>
        <h2> Sign Up!</h2>
        <form>
            <label htmlFor='username'>Username</label>
            <input name='username' id='username'></input>

            <label htmlFor='email'>E-mail</label>
            <input name='email' id='email'></input>

            <label htmlFor="password">Password</label>
            <input name='password' id='password'></input>
            <button className="btn btn-info btn-block py-3" type="submit" onClick={handleFormSubmit}>
            Sign Up!
          </button>
        </form>
    </div>
);
};