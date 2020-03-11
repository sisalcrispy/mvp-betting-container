import React from 'react';
import logo from '../../../static/images/logo.svg';
import './header.component.scss';

function AppHeader() {
  return (

    <header className="app-header">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-8">
            <h1>
                POC BETTING
            </h1>
          </div>
            <div className={'col-md-2'}>
                <button className={'btn btn-primary'}>
                    CTA
                </button>
            </div>
        </div>
      </div>
    </header>

  );
}

export default AppHeader;
