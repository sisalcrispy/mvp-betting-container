import React, { useContext, useReducer } from 'react';
import context from '../../../store/context';

const { Provider } = context;


const ContextProvider = ({ children }) => {
  const { initialState, actions } = useContext(context);
  const [state, dispatch] = useReducer(
    (currentState, action) => (
      { ...currentState, ...actions[action]() }
    ),
    initialState,
  );

  return (<Provider value={{ state, dispatch }}>{children}</Provider>);
};

export default ContextProvider;
