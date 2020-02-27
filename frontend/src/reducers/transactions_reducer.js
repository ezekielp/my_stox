import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION } from '../actions/transaction_actions';

const transactionsReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return action.transactions.data;
    case RECEIVE_TRANSACTION:
      return {
        ...newState,
        [action.transaction.data._id]: action.transaction.data
      };
    default:
      return state;
  }
}

export default transactionsReducer;