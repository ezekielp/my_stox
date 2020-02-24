import React from 'react'

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickerSymbol: '',
      quantity: ''
    }
  }

  handleSubmit(e) {

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
        <form>
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
            className=""
            value="Buy" />
        </form>
      </div>
    )
  }
}

export default TransactionForm;