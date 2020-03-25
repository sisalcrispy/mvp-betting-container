import React from 'react';
import initialState from './initial-state';
import mutations from './mutations';
import actions from './actions';

import GlobalState from '../types/globalState.interface';

type Context = {
    store: {initialState: GlobalState, mutations: any, actions: any};
    state: GlobalState;
    dispatch: any
}

const context = React.createContext<Context>(
    {
        state: initialState,
        dispatch: () => {},
        store:{ initialState, mutations, actions}
    }
);

export default context;
