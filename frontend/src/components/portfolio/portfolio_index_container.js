import { connect } from 'react-redux';

import PortfolioIndex from './portfolio_index';


const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);