import * as TransactionsAPIUtil from '../util/transactions_api_util';

export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

const receiveAllTransactions = transactions => {
  return {
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions
  }
}

const receiveTransaction = transaction => {
  return {
    type: RECEIVE_TRANSACTION,
    transaction
  }
}

export const fetchTransactions = userId => dispatch => {
  return TransactionsAPIUtil.fetchTransactions(userId)
    .then(transactions => dispatch(receiveAllTransactions(transactions)))
    .catch(err => console.log(err))
}

export const createTransaction = transaction => dispatch => {
  return TransactionsAPIUtil.createTransaction(transaction)
    .then(transaction => dispatch(receiveTransaction(transaction)))
    .catch(err => console.log(err))
}