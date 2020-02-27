import React from 'react'

// import { fetchStockPrice } from '../../util/stocks_api_util';

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
    // debugger;
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  render() {
    const { currentStock } = this.props;

    if (!currentStock) return null;

    return (
      <div className="transaction-form-container">
        <h2>Buy shares</h2>
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