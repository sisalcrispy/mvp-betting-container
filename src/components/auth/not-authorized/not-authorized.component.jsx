import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../../store/context';

const NotAuthorized = () => {
  const { state } = useContext(context);
  const { t } = state;

  return (
    <div className="container" id="login-form">
      <div className="row">

        <div className="col-md-5 offset-2 mt-3 mb-3">
          <h1>{t('not_authorized')}</h1>
        </div>
        <div className="col-md-5 offset-2 mt-3">
          <Link to="/" className="logo"> &lt; {t('back')}</Link>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
