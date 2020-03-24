import React, { useState } from 'react';
import AuthService from '../services/auth.service';

const { login, logout } = AuthService();

const useLoginForm = history => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState([]);
  const validate = () => username.trim().length && password.trim().length;

  React.useEffect(() => {});

  const sendForm = (event, dispatch) => {
    event.preventDefault();

    setLoginErrors([]);
    if (validate()) {
      login(username, password)
        .then(a => {
          dispatch('updateUserStatus');
          history.push('/bets');
        }).catch(error => {
          setLoginErrors(previousErrors => [...previousErrors, [error.message]]);
        });
    } else {
      setLoginErrors(previousErrors => [...previousErrors, ['errors.provide_credentials']]);
    }
  };

  const logoutAndRedirect = (dispatch) => {
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
