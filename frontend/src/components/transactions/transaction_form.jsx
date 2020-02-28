import React from 'react'

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: true,
      quantity: '',
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    const { currentStock, currentUser, createTransaction, receiveCurrentStockQuote } = this.props;
    const { symbol, companyName, latestPrice } = currentStock;
    const { quantity } = this.state;

    const totalPurchasePrice = quantity * latestPrice;
    if (totalPurchasePrice > parseFloat(currentUser.accountBalance.$numberDecimal)) {
      const errors = ["Inadequate funds for this purchase!"];
      this.setState({
        errors
      });
      console.log(errors);
      console.log(this.state.errors);
      return;
    }

    const newTransaction = {
      user: currentUser.id,
      companyName,
      tickerSymbol: symbol,
      numberOfShares: quantity,
      shareValueAtTimeOfPurchase: latestPrice
    }

    createTransaction(newTransaction);
    receiveCurrentStockQuote(this.props.currentStock);

    this.setState({
      quantity: '',
      showForm: false
    });

  }

//   shareValueAtTimeOfPurchase: {
//     type: Number,
//       required: true
//   }

  renderErrors() {
    const { errors } = this.state;
    if (errors[0]) {
      let errorsLis = this.state.errors.map((err, idx) => {
        return <li key={idx}>
          {err}
        </li>
      });
      return (
        <ul>{errorsLis}</ul>
      )
    } else {
      return null;
    }
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  render() {
    // debugger;
    if (!this.props.currentStock) return null;
    if (!this.state.showForm) return null;

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
            onChange={this.update('quantity')}
            value={this.state.quantity} />
          <input
            type="submit"
            className="transaction-form-btn"
            value="Buy" />
        </form>
        {this.renderErrors()}
      </div>
    )
  }
}

export default TransactionForm;