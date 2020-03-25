import React, { useContext, useState } from 'react';
import context from '../../../context/context';

const { Provider } = context;

const ContextProvider = ({ children } : {children: any}) => {
  const { store } = useContext(context);
  const [state, setState] = useState(store.initialState);

  const dispatch = (actionName: string): void=> {
    store.actions(actionName).then(
        (newState:object) => setState(currentState => ({ ...currentState, ...newState })),
    );
  };

  return (<Provider value={{ store, state, dispatch }}>{children}</Provider>);
};

export default ContextProvider;
