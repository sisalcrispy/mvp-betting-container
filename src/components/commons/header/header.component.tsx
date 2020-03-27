import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserStatus from '../user-status/user-status.component';
import context from "../../../context/context";

import logo from '../../../static/images/logo.svg';
import './header.component.scss';

const Header = () => {
  const {state, dispatch} = useContext(context);
  const { t, otherLanguage } = state;

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
            <UserStatus/>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className="btn btn-primary switch-language"
              onClick={() => dispatch('switchLanguage')}
            >
              {t('cta.switch_to')} ({otherLanguage()})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
