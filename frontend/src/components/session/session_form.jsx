import React from 'react';
import './session_form.css';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formType: 'Signup',
            name: '',
            email: '',
            password: '',
            errors: this.props.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSignupForm = this.renderSignupForm.bind(this);
        this.renderLoginForm = this.renderLoginForm.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        let user;
        const { login, signup } = this.props;
        const { formType, name, email, password } = this.state;

        if (formType === "Signup") {
            user = {
                name,
                email,
                password
            }
            signup(user);
        } else {
            user = {
              email,
              password
            };
            login(user);
        }
    }

    toggleFormType() {
        if (this.state.formType === 'Signup') {
            this.setState({
                formType: 'Login'
            })
        } else {
            this.setState({
                formType: 'Signup'
            })
        }
    }

    renderSignupForm() {
        if (this.state.formType !== 'Signup') {
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
                    <button
                        className="toggle-session-form-btn"
                        onClick={() => this.toggleFormType()}>
                        Already have an account? Log in
                    </button>
                </div>
            )
        }
    }

    renderLoginForm() {
        if (this.state.formType !== 'Login') {
            return (
                <></>
            )
        } else {
            return (
              <div className="session-form-container">
                <h3>Log In</h3>
                <form onSubmit={this.handleSubmit}>
                  <input
                    className="session-input"
                    type="email"
                    placeholder="Email address"
                    onChange={this.update("email")}
                  />
                  <input
                    className="session-input"
                    type="password"
                    placeholder="Password"
                    onChange={this.update("password")}
                  />
                  <input
                    type="submit"
                    className="session-submit-btn"
                    value="Login"
                  />
                </form>
                <button
                  className="toggle-session-form-btn"
                  onClick={() => this.toggleFormType()}
                >
                  Don't have an account? Sign up
                </button>
              </div>
            );
        }
    }

    render() {

        return (
            <>
                {this.renderSignupForm()}
                {this.renderLoginForm()}
            </>
        )
    }
}

export default SessionForm;