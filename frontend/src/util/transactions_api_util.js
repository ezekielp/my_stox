import axios from 'axios';

export const fetchStockPrice = tickerSymbol => {
  const apiKey = process.env.IEX_API_KEY_FRONTEND;
  return axios.get(
    `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/quote?token=${apiKey}`
  );
}

export const fetchTransactions = userId => {
  return axios.get(`/api/transactions/${userId}`);
}

export const createTransaction = transactionData => {
  return axios.post(`/api/transactions`, transactionData);
}