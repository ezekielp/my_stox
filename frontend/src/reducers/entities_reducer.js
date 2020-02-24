import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer';
import transactionsReducer from './transactions_reducer';

const entitiesReducer = combineReducers({
  stocks: stocksReducer,
  transactions: transactionsReducer
})

export default entitiesReducer;