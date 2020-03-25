import React, { useContext, useState } from 'react';
import context from '../../../store/context';

const { Provider } = context;


const ContextProvider = ({ children }) => {
  const { initialState, actions } = useContext(context);
  const [state, setState] = useState(initialState);

  const dispatch = actionName => {
    const action = actions[actionName];
    if (typeof action === 'function') {
      const newState = actions[actionName]();
      setState(currentState => ({ ...currentState, ...newState }));
    }
  };

  return (<Provider value={{ state, dispatch }}>{children}</Provider>);
};

export default ContextProvider;
