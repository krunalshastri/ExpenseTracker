export default (state, action) => {
  switch (action.type) {
    case 'ADD_TRANS':
      const addedTransactions = [...state.transactions, action.payload];
      localStorage.setItem('transactions', JSON.stringify(addedTransactions));
      return {
        ...state,
        transactions: addedTransactions,
      };
    case 'DELETE_TRANS':
      const deletedTransactions = state.transactions.filter(
        (trans) => trans.id !== action.payload
      );
      localStorage.setItem('transactions', JSON.stringify(deletedTransactions));
      return {
        ...state,
        transactions: deletedTransactions,
      };
    case 'CLEAR_ALL':
      localStorage.removeItem('transactions');
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
};
