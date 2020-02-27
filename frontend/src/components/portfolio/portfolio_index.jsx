import React from 'react';

import NavbarContainer from '../nav/navbar_container';
import PortfolioIndexItem from './portfolio_index_item';
import StockLookupFormContainer from '../transactions/stock_lookup_form_container'
import TransactionFormContainer from '../transactions/transaction_form_container';
import './portfolio.css';

class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props)

    const { currentUser } = this.props;
    let accountBalance = parseFloat(currentUser.accountBalance.$numberDecimal);

    this.state = {
      accountBalance,
      portfolio: {}
    }

  }

  componentDidMount() {
    const { transactions, currentUser, fetchTransactions } = this.props;

    if (!transactions[0]) {
      fetchTransactions(currentUser.id).then(transactionsAction => {
        const fetchedTransactions = Object.values(transactionsAction.transactions.data);
        let portfolio = this.state.portfolio;

        fetchedTransactions.forEach(transaction => {
          const { companyName, tickerSymbol, numberOfShares } = transaction;

          if (!this.state.portfolio[tickerSymbol]) {
            portfolio[tickerSymbol] = { tickerSymbol, companyName, numberOfShares };
          } else {
            portfolio[tickerSymbol].numberOfShares += numberOfShares;
          }

          this.setState({
            portfolio
          })

        })
        console.log(fetchedTransactions);
        console.log(this.state.portfolio);
      })
      // I think you need to turn the above into a promise, and after
      // the transactions have been fetched, you go retrieve the current
      // price for all the stocks in the user's portfolio, so that
      // you can display the current value of their holdings.
      // So you batch up the ticker symbols of each stock in their holdings,
      // then you send off that API request, and then you get the result,
      // you shove it into the stocks slice of state (within entities).
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props);
  }

  render() {

    const accountBalance = this.state.accountBalance.toFixed(2);

    const portfolioStocks = Object.values(this.props.portfolio);
    const portfolioLis = portfolioStocks.map((stock, idx) => {
      return <PortfolioIndexItem key={idx} stock={stock} />;
    });

    return (
      <div className="portfolio-page-container">
        <NavbarContainer />
        <div className="portfolio-page-below-nav-container">
          <div className="portfolio-index-container">
            <h1 className="portfolio-index-header">Portfolio</h1>
            {portfolioLis}
          </div>
          <div className="portfolio-page-right-side-container">
            <div className="account-balance-container">
              Current account balance: ${accountBalance}
            </div>
            <StockLookupFormContainer />
            <TransactionFormContainer />
          </div>
        </div>

      </div>
    )
  }

}

export default PortfolioIndex;