import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import UseTranslations from '../hooks/translations.hook';

import Header from './commons/header/header.component';
import BetsList from './bets/bets-list/bets-list.component';
import BetsDetail from './bets/bets-detail/bets-detail.component';

import './commons/header/header.component.scss';


function App() {
  const { switchLanguage } = UseTranslations();
  return (
    <div>
      <BrowserRouter>
        <Header onChangeLanguage={switchLanguage} />
        <Switch>
          <Route path="/bets/:id" component={BetsDetail} />
          <Route exact path="/" component={BetsList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
