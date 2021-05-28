export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANS':
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
