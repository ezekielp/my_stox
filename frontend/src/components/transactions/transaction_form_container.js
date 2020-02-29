import { connect } from 'react-redux';

import { createTransaction, receiveTransactionErrors } from '../../actions/transaction_actions';
import { receiveCurrentStockQuote } from '../../actions/stock_actions';
import { updateUser } from '../../actions/session_actions';
import TransactionForm from './transaction_form';

const mapStateToProps = state => {
  const errors = state.errors.transaction ? Object.values(state.errors.transaction) : null;

  return {
    currentUser: state.session.user,
    currentStock: state.entities.stocks.currentStock,
    errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    receiveCurrentStockQuote: stock => dispatch(receiveCurrentStockQuote(stock)),
    updateUser: updatedUserInfo => dispatch(updateUser(updatedUserInfo)),
    receiveTransactionErrors: errors => dispatch(receiveTransactionErrors(errors))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);