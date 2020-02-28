import { connect } from 'react-redux';

import { createTransaction } from '../../actions/transaction_actions';
import { receiveCurrentStockQuote } from '../../actions/stock_actions';
import { updateUser } from '../../actions/session_actions';
import TransactionForm from './transaction_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    currentStock: state.entities.stocks.currentStock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    receiveCurrentStockQuote: stock => dispatch(receiveCurrentStockQuote(stock)),
    updateUser: updatedUserInfo => dispatch(updateUser(updatedUserInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);