import React from 'react';
import initialState from './initial-state';
import actions from './actions';

const context = React.createContext({ initialState, actions });

export default context;
