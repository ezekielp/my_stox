import React from 'react'

class StockLookupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerSymbol: '',
      errors: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.fetchStock(this.state.tickerSymbol);
    this.setState({
      tickerSymbol: ''
    })
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
        <h2>Enter a ticker symbol to see current stock price</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="transaction-form-input"
            placeholder="Ticker symbol"
            onChange={this.update('tickerSymbol')} 
            value={this.state.tickerSymbol} />
          <input
            type="submit"
            className="transaction-form-btn"
            value="Submit" />
        </form>
      </div>
    )
  }
}

export default StockLookupForm;