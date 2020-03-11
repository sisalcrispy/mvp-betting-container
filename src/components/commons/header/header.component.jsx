import React from 'react';
import logo from '../../../static/images/logo.svg';
import './header.component.scss';
import UseTranslations from '../../../hooks/translations.hook';
import { Link } from 'react-router-dom';

const Header = props => {
  const { t, getOtherLanguage } = UseTranslations();
  return (

    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="col-md-8">
            <Link to="/">
              <h1>
                POC BETTING
              </h1>
            </Link>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary"
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
