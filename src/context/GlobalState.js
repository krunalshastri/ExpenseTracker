import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
//Initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
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
  function clearAll() {
    dispatch({ type: 'CLEAR_ALL' });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
