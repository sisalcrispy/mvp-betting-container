import React from 'react';
import { Link } from 'react-router-dom';
import UseTranslations from '../../../hooks/translations.hook';

import logo from '../../../static/images/logo.svg';
import './header.component.scss';
import UserStatus from '../user-status/user-status.component';

const Header = props => {
  const { t, getOtherLanguage } = UseTranslations();
  return (

    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="logo">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>
                POC
              </h1>
            </Link>
          </div>
          <div className="col-md-6">
            <UserStatus />
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-primary switch-language"
              onClick={() => props.onChangeLanguage()}
            >
              {t('cta.switch_to')} ({getOtherLanguage()})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
