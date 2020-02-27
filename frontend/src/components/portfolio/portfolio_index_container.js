import { connect } from 'react-redux';

import { fetchTransactions } from '../../actions/transaction_actions';
import PortfolioIndex from './portfolio_index';


const mapStateToProps = state => {
  // debugger;
  return {
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: userId => dispatch(fetchTransactions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);