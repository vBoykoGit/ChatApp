import {
    userConstants
} from './userConstants.js';

// let user = localStorage.getItem('token');
const initialState = {};

export function user(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return action.user
        case userConstants.LOGIN_SUCCESS:
            return action.user
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}