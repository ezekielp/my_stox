import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION } from '../actions/transaction_actions';

const transactionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TRANSACTIONS:
      return {};
    case RECEIVE_TRANSACTION:
      return {};
    default:
      return state;
  }
}

export default transactionsReducer;