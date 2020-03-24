import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';

import UseTranslations from '../hooks/translations.hook';
import Header from './commons/header/header.component';
import RouteGuard from './auth/route-guard/route-guard.component';
import ContextProvider from './commons/context-provider/context-provider.component';

import routes from '../config/app-routing';

const App = () => {
  const { switchLanguage } = UseTranslations();
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header onChangeLanguage={switchLanguage} />
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
};

export default App;
