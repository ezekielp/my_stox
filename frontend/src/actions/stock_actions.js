import { fetchStockPrice } from '../util/stocks_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";

const receiveStock = stock => {
  return {
    type: RECEIVE_STOCK,
    stock
  }
}

export const fetchStock = tickerSymbol => dispatch => {
  return fetchStockPrice(tickerSymbol)
    .then(stockData => dispatch(receiveStock(stockData)))
    .catch(err => console.log(err))
}