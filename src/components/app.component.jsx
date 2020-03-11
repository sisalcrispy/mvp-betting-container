import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';

import Header from './commons/header/header.component';

import './commons/header/header.component.scss';
import BetsList from './bets/bets-list/bets-list.component';
import BetsDetail from './bets/bets-detail/bets-detail.component';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/bets/:id" component={BetsDetail} />
          <Route exact path="/" component={BetsList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
