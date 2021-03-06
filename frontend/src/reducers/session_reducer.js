import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (state = initialState, action) => {
    // debugger;
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger;
            return {
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            }
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        default:
            return state;
    }
}

export default sessionReducer;