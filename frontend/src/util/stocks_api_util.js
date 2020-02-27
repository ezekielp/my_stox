import axios from "axios";

export const fetchStockPrice = tickerSymbol => {
  return axios.get(`/api/stocks/${tickerSymbol}`);
};

export const fetchBatchPrices = tickerSymbols => {
  return axios.get(`/api/stocks/batch/${tickerSymbols}`);
};