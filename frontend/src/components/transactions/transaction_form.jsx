import React from 'react'

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: '',
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { currentStock, currentUser, createTransaction } = this.props;
    const { symbol, companyName, latestPrice } = currentStock;

    const newTransaction = {
      user: currentUser.id,
      companyName,
      tickerSymbol: symbol,
      numberOfShares: this.state.quantity,
      shareValueAtTimeOfPurchase: latestPrice
    }

    createTransaction(newTransaction);

  }

//   shareValueAtTimeOfPurchase: {
//     type: Number,
//       required: true
//   }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  render() {
    if (!this.props.currentStock) return null;

    let { symbol, companyName, latestPrice, latestTime, change, changePercent } = this.props.currentStock;

    changePercent = changePercent * 100;

    return (
      <div className="transaction-form-container">
        <h2>Buy shares</h2>
        <div className="stock-info-container">
          <div className="company-name-container">
            {companyName}
          </div>
          <div className="company-ticker-symbol-container">
            {symbol}
          </div>
          <div className="stock-price-and-change-container">
            <div className="stock-price-container">
              {latestPrice} USD
            </div>
            <div className="raw-price-change-container">
              {change}
            </div>
            <div className="percent-price-change-container">
              {changePercent}%
            </div>
          </div>
          <div className="price-quote-time-container">
            {latestTime}
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="transaction-form-input"
            placeholder="Number of shares"
            onChange={this.update('quantity')} />
          <input
            type="submit"
            className="transaction-form-btn"
            value="Buy" />
        </form>
      </div>
    )
  }
}

export default TransactionForm;