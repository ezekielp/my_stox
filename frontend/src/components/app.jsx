import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import LandingPage from './landing_page/landing_page';
import PortfolioIndexContainer from '../components/portfolio/portfolio_index_container';
import TransactionsIndexContainer from '../components/transactions/transactions_index_container';

const App = () => {
    return (
        <Switch>
            <ProtectedRoute path="/portfolio" component={PortfolioIndexContainer} />
            <ProtectedRoute path="/transactions" component={TransactionsIndexContainer} />
            <AuthRoute path="/" component={LandingPage} />
        </Switch>
    )
}

export default App;