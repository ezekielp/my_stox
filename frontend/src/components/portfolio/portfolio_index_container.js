import { connect } from 'react-redux';

import { fetchTransactions } from '../../actions/transaction_actions';
import PortfolioIndex from './portfolio_index';


const mapStateToProps = state => {
  // debugger;
  const transactions = Object.values(state.entities.transactions);

  let portfolio = {};

  transactions.forEach(transaction => {
    const { companyName, tickerSymbol, numberOfShares } = transaction;

    if (!portfolio[tickerSymbol]) {
      portfolio[tickerSymbol] = { tickerSymbol, companyName, numberOfShares };
    } else {
      portfolio[tickerSymbol].numberOfShares += numberOfShares;
    }

  })

  return {
    currentUser: state.session.user,
    transactions,
    portfolio
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: userId => dispatch(fetchTransactions(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);