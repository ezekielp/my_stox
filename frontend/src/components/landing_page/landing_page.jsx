import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import './landing_page.css';

class LandingPage extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
          <div>
            <h1 className="main-heading">MyStox</h1>
            <SessionFormContainer />
          </div>
        );
    }
}

export default LandingPage;