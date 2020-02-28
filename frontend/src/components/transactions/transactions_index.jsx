import React from 'react';

import NavbarContainer from '../nav/navbar_container';
import TransactionsIndexItem from './transactions_index_item';

class TransactionsIndex extends React.Component {


  componentDidMount() {
    const { currentUser, transactions, fetchTransactions } = this.props;
    fetchTransactions(currentUser.id);
    // if (!transactions[0]) {
    //   fetchTransactions(currentUser.id);
    // }
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
            <ul className="transactions-index-ul">
              {transactionLis}
            </ul>
          </div>
      </div>
    )
  }

}

export default TransactionsIndex;