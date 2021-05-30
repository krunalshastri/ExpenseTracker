export default (state, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        isLogged: true,
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        isLogged: false,
      };
    case 'GET_ALL':
      const googleId = JSON.parse(localStorage.getItem('profile')).profile
        .googleId;
      const allTransactions = action.payload.filter(
        (trans) => trans.googleId === googleId && trans
      );
      return {
        ...state,
        transactions: allTransactions,
        isLogged: true,
      };
    case 'ADD_TRANS':
      const addedTransactions = [...state.transactions, action.payload];
      return {
        ...state,
        transactions: addedTransactions,
        isLogged: true,
      };
    case 'DELETE_TRANS':
      const remTransactions = state.transactions.filter(
        (trans) => trans._id !== action.payload
      );
      return {
        ...state,
        transactions: remTransactions,
        isLogged: true,
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        transactions: [],
        isLogged: true,
      };
    default:
      return state;
  }
};
