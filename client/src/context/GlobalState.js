import React, { createContext, useReducer } from 'react';
import auth from '../reducers/auth';

//intial state

const intialState = {};

//create context

export const GlobalContext = createContext(intialState);

//provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(auth, intialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
