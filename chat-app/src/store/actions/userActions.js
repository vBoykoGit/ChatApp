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

export function login(email, password) {
    return dispatch => {
        dispatch(request({
            email
        }));

        fetchThenDispatch('http://localhost:3001/api/users/login', 'POST',
            JSON.stringify({
                email,
                password
            })
        ).then((response) => {
            const user = _.get(response, 'user');
            localStorage.setItem("user", JSON.stringify(response))
            dispatch(success(user))
            dispatch(connectToChatSocket())
        })
    };

    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST,
            user
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
        fetchThenDispatch('http://localhost:3001/api/users', 'POST',
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

    function failure(error) {
        return {
            type: userConstants.REGISTER_FAILURE,
            error
        }
    }
}