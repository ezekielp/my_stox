import { connect } from 'react-redux';

import { createTransaction } from '../../actions/transaction_actions';
import TransactionForm from './transaction_form';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    currentStock: state.entities.stocks.currentStock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTransaction: transaction => dispatch(createTransaction(transaction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);