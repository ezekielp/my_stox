import { connect } from 'react-redux';

import { fetchStock } from '../../actions/stock_actions';
import TransactionForm from './transaction_form';

const mapStateToProps = state => {
  return {
    currentStock: state.entities.stocks.currentStock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStock: tickerSymbol => dispatch(fetchStock(tickerSymbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);