import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
//Initial state
const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //All actions
  function deleteTransaction(id) {
    dispatch({ type: 'DELETE_TRANS', payload: id });
  }
  function addTransaction(trans) {
    dispatch({ type: 'ADD_TRANS', payload: trans });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
