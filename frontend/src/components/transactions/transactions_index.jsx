import React from 'react';


class TransactionsIndex extends React.Component {
  constructor(props) {
    super(props)

  }



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