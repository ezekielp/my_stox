import React from 'react';

const PortfolioIndexItem = ({ stock, quote }) => {
  const { tickerSymbol, companyName, numberOfShares } = stock;
  const aggregateValue = quote ? (numberOfShares * quote).toFixed(2) : "0";

  return (
    <li className="portfolio-index-li">
      <div className="portfolio-index-item-company-name">
        {companyName}
      </div>
      <div className="portfolio-index-item-tickerSymbol">
        {tickerSymbol}
      </div>
      <div className="portfolio-index-item-number-of-shares">
        {numberOfShares}
      </div>
      <div className="portfolio-index-item-aggregate-value">
        ${aggregateValue}
      </div>
    </li>
  )
}

export default PortfolioIndexItem;