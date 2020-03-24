import React, { useContext } from 'react';
import './login.component.scss';
import useLoginForm from '../../../hooks/login-form.hook';
import UseTranslations from '../../../hooks/translations.hook';

import context from '../../../store/context';


const LoginForm = props => {
  const { history } = props;
  const {
    username, password, sendForm, setUsername, setPassword, loginErrors,
  } = useLoginForm(history);
  const { t } = UseTranslations();
  const { dispatch } = useContext(context);

  return (
    <div className="container" id="login-form">
      <div className="row">

        <div className="col-md-5 offset-2 mt-3 mb-3">
          <h1>LOGIN</h1>
        </div>
        <div className="col-md-5 offset-2 mt-3">

          <form onSubmit={e => sendForm(e, dispatch)}>
            <div className="errors">
              {loginErrors.map(error => <p key={error}>{t(error)}</p>)}
            </div>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="text"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input type="submit" className="btn btn-primary" value="LOGIN" />

          </form>

        </div>
        <div className="col-md-3 mt-3">
          <div className="info-users">
            <h5>Test Users:</h5>
            <ul>
              <ul>
                <li><span>username:</span> user</li>
                <li><span>password:</span> user</li>
                <li><span>role:</span> user</li>
              </ul>
            </ul>
            <hr />
            <ul>
              <ul>
                <li><span>username:</span> admin</li>
                <li><span>password:</span> admin</li>
                <li><span>role:</span> admin</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
