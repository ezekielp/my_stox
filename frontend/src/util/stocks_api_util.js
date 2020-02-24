import axios from "axios";

export const fetchStockPrice = tickerSymbol => {
  return axios.get(`/api/stocks/${tickerSymbol}`);
};