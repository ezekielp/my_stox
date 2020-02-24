import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;

        return (

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
                >Logout</li>
            </ul>


        )
    }
}

export default Navbar;