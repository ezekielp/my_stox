import React from 'react'

// import { fetchStockPrice } from '../../util/stocks_api_util';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerSymbol: '',
      quantity: '',
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // debugger;
    this.props.fetchStock(this.state.tickerSymbol);
    // const stockData = fetchStockPrice(this.state.tickerSymbol);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  render() {
    return (
      <div className="transaction-form-container">
        <h2>Make a new investment</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="transaction-form-input"
            placeholder="Ticker symbol"
            onChange={this.update('tickerSymbol')} />
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