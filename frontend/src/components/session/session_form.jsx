import React from 'react';
import './session_form.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formType: 'signup',
            name: '',
            email: '',
            password: '',
            errors: this.props.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSignupForm = this.renderSignupForm.bind(this);
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

    renderSignupForm() {
        if (this.state.formType !== 'signup') {
            return (
                <></>
            )
        } else {
            return (
                <div className="session-form-container">
                    <h3>Sign Up</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="session-input"
                            type="text"
                            placeholder="Name"
                            onChange={this.update('name')} />
                        <input
                            className="session-input"
                            type="email"
                            placeholder="Email address"
                            onChange={this.update('email')} />
                        <input
                            className="session-input"
                            type="password"
                            placeholder="Password"
                            onChange={this.update('password')} />
                        <input
                            type="submit" className="session-submit-btn" value="Signup"/>
                    </form>
                </div>
            )
        }
    }

    render() {

        return (
            this.renderSignupForm()
        )
    }
}

export default SessionForm;