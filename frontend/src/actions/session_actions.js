import * as SessionAPIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

const loginLogic = res => {
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    SessionAPIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded));
}

export const login = user => dispatch => {
    return SessionAPIUtil.login(user).then(res => {
        loginLogic(res);
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
}

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user).then(res => {
        loginLogic(res);
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionAPIUtil.setAuthToken(false);
    dispatch(logoutUser());
}