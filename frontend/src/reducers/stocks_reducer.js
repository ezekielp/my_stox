import { RECEIVE_STOCK, RECEIVE_BATCH_STOCKS } from '../actions/stock_actions';

const stocksReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BATCH_STOCKS:
      let quotes = {};
      Object.values(action.stocks.data).forEach(quote => {
        const { symbol, latestPrice } = quote.quote;
        quotes[symbol] = latestPrice;
      })  

      return {
        ...state,
        quotes
      }
    case RECEIVE_STOCK:
      return {
        ...state,
        currentStock: action.stock.data
      }
    default:
      return state;
  }
}

export default stocksReducer;