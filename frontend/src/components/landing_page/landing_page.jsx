import React from 'react';
import SessionFormContainer from '../session/session_form_container';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div>
            <p>Hello from the landing page component!</p>
            <SessionFormContainer />
          </div>
        );
    }
}

export default LandingPage;