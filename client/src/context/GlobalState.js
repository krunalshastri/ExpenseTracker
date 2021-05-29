import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

//JSON.parse(localStorage.getItem('transactions')) ||
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
  async function getAll() {
    try {
      const res = await axios.get('http://localhost:5000/api/');
      dispatch({ type: 'GET_ALL', payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function deleteTransaction(id) {
    try {
      const res = await axios.delete(`http://localhost:5000/api/${id}`);
      dispatch({ type: 'DELETE_TRANS', payload: res.data._id });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function addTransaction(trans) {
    try {
      const res = await axios.post('http://localhost:5000/api/', trans);
      dispatch({ type: 'ADD_TRANS', payload: res.data });
    } catch (err) {
      console.error(err.message);
    }
  }
  async function clearAll() {
    try {
      await axios.delete('http://localhost:5000/api/transactions/deleteAll');
      dispatch({ type: 'CLEAR_ALL' });
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearAll,
        getAll,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
