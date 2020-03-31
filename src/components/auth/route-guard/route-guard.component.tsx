import React, {useContext} from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import NotAuthorized from '../not-authorized/not-authorized.component';
import RouteGuardProps from "../../../types/routeGuardProps.interface";
import context from "../../../context/context";

const RouteGuard = (props: RouteGuardProps)  => {
  const { Component, canActivate } = props;
  const history = useHistory();
  const match = useRouteMatch();
  const {state} = useContext(context);
  const {currentLanguage} = state;


  if (canActivate()) {
    return (
      <Component history={history} language={currentLanguage()} match={match} />
    );
  }
  return (<NotAuthorized />);
};

export default RouteGuard;
