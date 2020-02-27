import React from 'react';

const TransactionsIndexItem = ({ transaction }) => {
  const { companyName, tickerSymbol, numberOfShares, shareValueAtTimeOfPurchase } = transaction;

  const aggregateValue = (numberOfShares * shareValueAtTimeOfPurchase).toFixed(2);

    return (
      <li className="transaction-index-li">
        <div className="transaction-index-company-name">
          {companyName}
        </div>
        <div className="transaction-index-ticker-symbol">
          {tickerSymbol}
        </div>
        <div className="transaction-index-number-of-shares">
          {numberOfShares}
        </div>
        <div className="transaction-index-share-value">
          ${shareValueAtTimeOfPurchase.toFixed(2)}
        </div>
        <div className="transaction-index-aggregate-value">
          ${aggregateValue}
        </div>
      </li>
    )
}

export default TransactionsIndexItem;