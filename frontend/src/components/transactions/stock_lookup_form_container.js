import { connect } from 'react-redux';

import { fetchStock } from '../../actions/stock_actions';
import StockLookupForm from './stock_lookup_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.stocks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStock: tickerSymbol => dispatch(fetchStock(tickerSymbol))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockLookupForm);