import { RECEIVE_STOCK, RECEIVE_BATCH_STOCKS, RECEIVE_CURRENT_STOCK_QUOTE } from '../actions/stock_actions';

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
    case RECEIVE_CURRENT_STOCK_QUOTE:
      let newQuotes = {};
      if (state.quotes) {
        newQuotes = Object.assign({}, state.quotes);
      }
      newQuotes[action.stock.symbol] = action.stock.latestPrice;
      return {
        ...state,
        quotes: newQuotes
      }
    default:
      return state;
  }
}

export default stocksReducer;