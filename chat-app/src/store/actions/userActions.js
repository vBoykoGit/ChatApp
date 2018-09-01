import {
    userConstants
} from '../constants/userConstants.js';
import {
    fetchThenDispatch
} from '../fetcher.js'
import _ from 'lodash'
import {
    connectToChatSocket
} from './socketActions.js';
import { token } from '../../helpers/token';

export function login(email, password) {
    return dispatch => {
        dispatch(request())
        fetchThenDispatch(dispatch, 'http://localhost:3001/api/users/login', 'POST',
            JSON.stringify({
                email,
                password
            })
        ).then((response) => {
            const user = _.get(response, 'user');
            if (!user) {
                dispatch(failure(response))
                return
            }
            localStorage.setItem("user", JSON.stringify(response))
            dispatch(success(user))
            dispatch(connectToChatSocket())
        })
    }

    function request() {
        return {
            type: userConstants.LOGIN_REQUEST
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error
        }
    }
}

export function fetchUserInfoIfNeeded() {
    return (dispatch, getState) => {
        const state = getState()
        if (state.user.userInfo || state.socket.connected || state.socket.loggedIn || state.user.loggingIn || state.socket.connecting || state.socket.loggingIn) {
            return
        }
        dispatch(request())
        fetchThenDispatch(dispatch, 'http://localhost:3001/api/users/me', 'GET', null,
            {
                authorization: token(),
            }
        ).then((response) => {
            const user = _.get(response, 'user');
            if (!user) {
                dispatch(failure(response))
                return
            }
            localStorage.setItem("user", JSON.stringify(response))
            dispatch(success(user))
            dispatch(connectToChatSocket())
        })
    }

    function request() {
        return {
            type: userConstants.LOGIN_REQUEST
        }
    }

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        }
    }

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE,
            error
        }
    }
}

export function register(user) {
    return dispatch => {
        dispatch(request(user));
        fetchThenDispatch(dispatch, 'http://localhost:3001/api/users', 'POST',
            JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            })).then(response => dispatch(success()))
    };


    function request(user) {
        return {
            type: userConstants.REGISTER_REQUEST,
            user
        }
    }

    function success(user) {
        return {
            type: userConstants.REGISTER_SUCCESS,
            user
        }
    }

    // function failure(error) {
    //     return {
    //         type: userConstants.REGISTER_FAILURE,
    //         error
    //     }
    // }
}