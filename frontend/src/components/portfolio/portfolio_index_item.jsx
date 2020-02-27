import React from 'react';

const PortfolioIndexItem = ({ stock }) => {
  const { tickerSymbol, companyName, numberOfShares } = stock;

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
    </li>
  )
}

export default PortfolioIndexItem;