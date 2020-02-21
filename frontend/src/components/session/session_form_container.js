import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        isAuthenticated: state.session.isAuthenticated,
        errors: Object.values(state.errors.session)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        signup: user => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);