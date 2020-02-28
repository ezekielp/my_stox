import React from 'react';
import './transactions.css';

class StockLookupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerSymbol: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    this.props.fetchStock(this.state.tickerSymbol);
    this.setState({
      tickerSymbol: ''
    })
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <div className="error-message">
          Oops, something went wrong! Please enter a valid ticker symbol and try again.
        </div>
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
    return (
      <div className="stock-lookup-form-container">
        <h2 className="stock-lookup-message">Enter a ticker symbol to see current stock information</h2>
        <form className="stock-lookup-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="stock-lookup-form-input"
            placeholder="Ticker symbol"
            onChange={this.update('tickerSymbol')} 
            value={this.state.tickerSymbol} />
          <input
            type="submit"
            className="stock-lookup-form-btn"
            value="Submit" />
        </form>
        {this.renderErrors()}
      </div>
    )
  }
}

export default StockLookupForm;