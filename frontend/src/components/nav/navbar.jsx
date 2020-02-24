import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ul className="navbar-ul">
                <li></li>
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
                <li>Logout</li>
            </ul>


        )
    }
}

export default Navbar;