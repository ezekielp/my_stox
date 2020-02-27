import { connect } from 'react-redux';

import { fetchTransactions } from '../../actions/transaction_actions';
import TransactionsIndex from './transactions_index';


const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    transactions: Object.values(state.entities.transactions)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: userId => dispatch(fetchTransactions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsIndex);