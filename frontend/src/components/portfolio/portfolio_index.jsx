import React from 'react';

import NavbarContainer from '../nav/navbar_container';
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
      fetchTransactions(currentUser.id)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props);
  }

  render() {

    const accountBalance = this.state.accountBalance.toFixed(2);

    // this.props.transactions.forEach(transaction => {
    //   const { companyName, tickerSymbol, numberOfShares } = transaction;
    //   let portfolio = { ...this.state.portfolio };

    //   if (!this.state.portfolio[tickerSymbol]) {
    //     portfolio[tickerSymbol] = { tickerSymbol, companyName, numberOfShares };
    //   } else {
    //     portfolio[tickerSymbol].numberOfShares += numberOfShares;
    //   }

    //   this.setState({
    //     portfolio
    //   })
    // })

    return (
      <div className="portfolio-page-container">
        <NavbarContainer />
        <div className="portfolio-page-below-nav-container">
          <h1 className="portfolio-index-header">Portfolio</h1>
          <div className="portfolio-index-container">
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