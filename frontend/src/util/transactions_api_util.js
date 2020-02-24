import axios from 'axios';

export const fetchTransactions = userId => {
  return axios.get(`/api/transactions/${userId}`);
}

export const createTransaction = transactionData => {
  return axios.post(`/api/transactions`, transactionData);
}