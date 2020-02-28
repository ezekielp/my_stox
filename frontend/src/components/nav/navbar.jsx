import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { currentUser, logout } = this.props;

        return (
            <div className="navbar-container">
                <div className="navbar-header">
                    MyStox
                </div>
                <ul className="navbar-ul">
                    <li>Hello, {currentUser.name}!</li>
                    <li>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions">
                            Transactions
                        </Link>
                    </li>
                    <li
                        onClick={() => logout()}
                        className="logout-li"
                    >
                        Logout
                    </li>
                </ul>
            </div>


        )
    }
}

export default Navbar;