import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import NotAuthorized from '../not-authorized/not-authorized.component';

const RouteGuard = props => {
  const { Component, canActivate } = props;
  const history = useHistory();
  const match = useRouteMatch();


  if (canActivate()) {
    return (
      <Component history={history} match={match} />
    );
  }
  return (<NotAuthorized />);
};

export default RouteGuard;
