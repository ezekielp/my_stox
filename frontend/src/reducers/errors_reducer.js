import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_STOCK_QUOTE_REQUEST_ERRORS } from '../actions/stock_actions';
import { RECEIVE_TRANSACTION_ERRORS } from '../actions/transaction_actions';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      return {
        transaction: action.errors
      }
    case RECEIVE_SESSION_ERRORS:
      return {
        session: action.errors
      }
    case RECEIVE_STOCK_QUOTE_REQUEST_ERRORS:
      return {
        stocks: action.errors
      };
    default:
      return {};
  }
}

export default errorsReducer;