import { RECEIVE_STOCK_QUOTE_REQUEST_ERRORS } from '../actions/stock_actions';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK_QUOTE_REQUEST_ERRORS:
      return {
        stocks: action.errors
      };
    default:
      return state;
  }
}

export default errorsReducer;