import * as StocksAPIUtil from '../util/stocks_api_util';

export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_BATCH_STOCKS = "RECEIVE_BATCH_STOCKS";
export const RECEIVE_CURRENT_STOCK_QUOTE = "RECEIVE_CURRENT_STOCK_QUOTE";

const receiveStock = stock => {
  return {
    type: RECEIVE_STOCK,
    stock
  }
}

const receiveBatchStocks = stocks => {
  return {
    type: RECEIVE_BATCH_STOCKS,
    stocks
  }
}

export const receiveCurrentStockQuote = stock => {
  return {
    type: RECEIVE_CURRENT_STOCK_QUOTE,
    stock
  }
}

export const fetchStock = tickerSymbol => dispatch => {
  return StocksAPIUtil.fetchStockPrice(tickerSymbol)
    .then(stockData => {
      return dispatch(receiveStock(stockData))
    })
    .catch(err => console.log(err))
}

export const fetchBatchPrices = tickerSymbols => dispatch => {
  return StocksAPIUtil.fetchBatchPrices(tickerSymbols)
    .then(stockData => {
      return dispatch(receiveBatchStocks(stockData))
    })
    .catch(err => console.log(err))
}