import React from 'react';

import NavbarContainer from '../nav/navbar_container';
import TransactionFormContainer from '../transactions/transaction_form_container';
import './portfolio.css';

class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props)

    let { currentUser } = this.props;

    this.state = {
      accountBalance: parseInt(currentUser.accountBalance.$numberDecimal)
    }

  }



  render() {
    return (
      <div className="portfolio-page-container">
        <NavbarContainer />
        <div className="portfolio-page-below-nav-container">
          <h1 className="portfolio-index-header">Portfolio</h1>
          <div className="portfolio-index-container">
          </div>
          <div className="portfolio-page-right-side-container">
            <div className="account-balance-container">
              Current account balance: ${this.state.accountBalance.toFixed(2)}
            </div>
            <TransactionFormContainer />
          </div>
        </div>

      </div>
    )
  }

}

export default PortfolioIndex;