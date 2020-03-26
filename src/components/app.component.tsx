import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import Header from './commons/header/header.component';
import RouteGuard from './auth/route-guard/route-guard.component';
import ContextProvider from './commons/context-provider/context-provider.component';

import routes from '../config/app-routing';

const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path}>
            <RouteGuard Component={route.component} canActivate={route.canActivate} />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  </ContextProvider>
);

export default App;