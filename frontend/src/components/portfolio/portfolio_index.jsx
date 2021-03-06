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
    const { currentUser, fetchUser, fetchTransactions, fetchBatchPrices } = this.props;

    fetchTransactions(currentUser.id)
    .then(transactionsAction => {
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
    })
    .then(res => {
      const tickerSymbols = Object.keys(this.state.portfolio).join(",").toLowerCase();
      if (tickerSymbols[0]) {
        fetchBatchPrices(tickerSymbols);
      }
    })
    .then(res => {
      fetchUser(currentUser.id);
    })
  }

  componentDidUpdate(prevProps) {
    const { fetchUser, transactions, currentUser } = this.props;
    if (prevProps.transactions.length !== transactions.length) {
      fetchUser(currentUser.id);
    }
  }

  render() {

    const accountBalance = parseFloat(this.props.currentUser.accountBalance.$numberDecimal).toFixed(2);

    const portfolioStocks = Object.values(this.props.portfolio);
    const portfolioLis = portfolioStocks.map((stock, idx) => {
      let currentTickerSymbol = stock.tickerSymbol;
      let quote = this.props.quotes[currentTickerSymbol];
      return <PortfolioIndexItem key={idx} stock={stock} quote={quote} />;
    });

    return (
      <div className="portfolio-page-container">
        <NavbarContainer />
        <div className="portfolio-page-below-nav-container">
          <div className="portfolio-index-container">
            <h1 className="portfolio-index-header">Portfolio</h1>
            <li className="portfolio-index-li portfolio-index-headers">
              <div className="portfolio-index-headers-company-name">
                Company
              </div>
              <div className="portfolio-index-headers-ticker-symbol">
                Ticker Symbol
              </div>
              <div className="portfolio-index-headers-number-of-shares">
                Number of Shares
              </div>
              <div className="portfolio-index-headers-total-value">
                Total Current Value
              </div>
            </li>
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