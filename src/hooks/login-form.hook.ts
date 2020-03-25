import React, { useState, useReducer } from 'react';
import AuthService from '../services/auth.service';

const { login, logout } = AuthService();

const useLoginForm = (history: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginErrors, updateLoginErrors] = useReducer(
      (previousLoginErrors: Array<string>, newError: Array<string>) : Array<string> => {
    return [...previousLoginErrors, ...newError];
  },[]);

  const validate = () => username.length && password.length;

  React.useEffect(() => {});

  const sendForm = (event: any, dispatch: (action: string) => void ) => {
    event.preventDefault();

    updateLoginErrors([]);
    if (validate()) {
      login(username, password)
        .then(a => {
          dispatch('updateUserStatus');
          history.push('/bets');
        }).catch(error => {
          updateLoginErrors([error.message]);
        });
    } else {
      updateLoginErrors(['errors.provide_credentials']);
    }
  };

  const logoutAndRedirect = (dispatch: (actionName: string) => void) => {
    logout()
      .then(() => {
        dispatch('updateUserStatus');
        history.push('/');
      });
  };


  return {
    username, password, sendForm, logoutAndRedirect, setUsername, setPassword, loginErrors,
  };
};


export default useLoginForm;
