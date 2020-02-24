import { RECEIVE_STOCK } from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      return {
        stock: action.data
      }
    default:
      return state;
  }
}

export default stocksReducer;