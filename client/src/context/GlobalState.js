import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import Reducer from './Reducer';

//JSON.parse(localStorage.getItem('transactions')) ||
//Initial state
const initialState = {
  transactions: [],
  isLogged: false,
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //All actions
  async function login() {
    try {
      dispatch({ type: 'LOGGED_IN' });
    } catch (err) {
      console.error(err.message);
    }
  }

  async function logout() {
    try {
      dispatch({ type: 'LOGGED_OUT' });
    } catch (err) {
      console.error(err.message);
    }
  }

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
      console.log(res.data);
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
        isLogged: state.isLogged,
        login,
        logout,
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
