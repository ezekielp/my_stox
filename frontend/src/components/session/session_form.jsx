import React from 'react';
import './session_form.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {

    }

    render() {

        return (
            <div>
                Hello from the session form component!
            </div>
        )
    }
}

export default SessionForm;