import React from 'react';

import NavbarContainer from '../nav/navbar_container';
import TransactionsIndexItem from './transactions_index_item';

class TransactionsIndex extends React.Component {


  componentDidMount() {
    const { currentUser, fetchTransactions } = this.props;
    fetchTransactions(currentUser.id);
  }

  render() {
    const { transactions } = this.props;
    const transactionLis = transactions.map((transaction, idx) => {
      return <TransactionsIndexItem key={idx} transaction={transaction} />
    })

    return (
      <div className="transactions-page-container">
        <NavbarContainer />
          <div className="transactions-index-container">
            <h1 className="transactions-index-header">Transactions</h1>
            <li className="transaction-index-li transactions-index-headers">
              <div className="transactions-index-headers-company-name">
                Company
              </div>
              <div className="transactions-index-headers-ticker-symbol">
                Ticker Symbol
              </div>
              <div className="transactions-index-headers-number-of-shares">
                Number of Shares
              </div>
              <div className="transactions-index-headers-share-price">
                Share Price at Time of Purchase
              </div>
              <div className="transactions-index-headers-total-value">
                Total Current Value
              </div>
            </li>
            {transactionLis}
          </div>
      </div>
    )
  }

}

export default TransactionsIndex;