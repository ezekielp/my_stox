import React from 'react';
import SessionFormContainer from '../session/session_form_container';
import './landing_page.css';

class LandingPage extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
          <div className="landing-page-container-container">
            <div className="landing-page-container">
              <h1 className="main-heading">MyStox</h1>
              <SessionFormContainer />
            </div>
          </div>
        );
    }
}

export default LandingPage;