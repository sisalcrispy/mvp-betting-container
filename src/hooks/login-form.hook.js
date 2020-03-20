import React from 'react';
import AuthService from '../services/auth.service';

const { login } = AuthService();

const UseLoginForm = history => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState([]);
  const validate = () => username.trim().length && password.trim().length;

  React.useEffect(() => {});

  const sendForm = event => {
    event.preventDefault();
    setErrors([]);
    if (validate()) {
      login(username, password)
        .then(a => history.push('/bets'))
        .catch(error => {
          setErrors(previousErrors => [...previousErrors, [error.message]]);
        });
    } else {
      setErrors(previousErrors => [...previousErrors, ['errors.provide_credentials']]);
    }
  };


  return {
    username, password, sendForm, setUsername, setPassword, errors,
  };
};


export default UseLoginForm;
