export default (state, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        isLogged: true,
      };
    case 'GET_ALL':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'ADD_TRANS':
      const addedTransactions = [...state.transactions, action.payload];
      // localStorage.setItem('transactions', JSON.stringify(addedTransactions));
      return {
        ...state,
        transactions: addedTransactions,
      };
    case 'DELETE_TRANS':
      const remTransactions = state.transactions.filter(
        (trans) => trans._id !== action.payload
      );
      // localStorage.setItem('transactions', JSON.stringify(deletedTransactions));
      return {
        ...state,
        transactions: remTransactions,
      };
    case 'CLEAR_ALL':
      // localStorage.removeItem('transactions');
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
};
