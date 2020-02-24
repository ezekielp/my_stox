import React from 'react';

import NavbarContainer from '../nav/navbar_container';

class TransactionsIndex extends React.Component {


  render() {
    return (
      <div className="transactions-page-container">
        <NavbarContainer />
          <div className="transactions-index-container">
            <h1 className="transactions-index-header">Transactions</h1>
          </div>
      </div>
    )
  }

}

export default TransactionsIndex;