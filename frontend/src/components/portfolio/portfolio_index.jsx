import React from 'react';

import NavbarContainer from '../nav/navbar_container';
import TransactionForm from '../transactions/transaction_form';
import './portfolio.css';

class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="portfolio-page-container">
        <NavbarContainer />
        <div className="portfolio-page-below-nav-container">
          <h1 className="portfolio-index-header">Portfolio</h1>
          <div className="portfolio-index-container">
          </div>
          <TransactionForm />
        </div>

      </div>
    )
  }

}

export default PortfolioIndex;