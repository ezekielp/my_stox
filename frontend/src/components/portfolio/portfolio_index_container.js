import { connect } from 'react-redux';

import { fetchTransactions } from '../../actions/transaction_actions';
import { fetchBatchPrices } from '../../actions/stock_actions';
import { fetchUser } from '../../actions/session_actions';
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

  const quotes = state.entities.stocks.quotes ? state.entities.stocks.quotes : {};

  return {
    currentUser: state.session.user,
    transactions,
    portfolio,
    quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchTransactions: userId => dispatch(fetchTransactions(userId)),
    fetchBatchPrices: tickerSymbols => dispatch(fetchBatchPrices(tickerSymbols))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);