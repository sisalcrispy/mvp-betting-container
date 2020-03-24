import React from 'react';
import { useHistory } from 'react-router-dom';

const RouteGuard = props => {
  const { Component, canActivate } = props;
  const history = useHistory();

  if (canActivate()) {
    return (
      <Component history={history} />
    );
  }
  return (<p>not allowed</p>);
};

export default RouteGuard;
