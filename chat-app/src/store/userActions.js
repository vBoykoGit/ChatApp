import {
    userConstants
} from './userConstants.js';
import {
    fetchThenDispatch
} from './fetcher.js'
import _ from 'lodash'
import {
    history
} from '../history/history.js';

export const login = (email, password) => {
    return dispatch => {
        dispatch(request({
            email
        }));

        fetchThenDispatch(dispatch,
            'http://localhost:3001/api/users/login',
            'POST',
            JSON.stringify({
                email,
                password
            }), response => {
                const user = _.get(response, 'user');
                localStorage["user"] = JSON.stringify(user);
                return success(user)
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

// function logout() {
//     userService.logout();
//     return {
//         type: userConstants.LOGOUT
//     };
// }

export const register = (user) => {
    return dispatch => {
        dispatch(request(user));
        fetchThenDispatch(dispatch,
            'http://localhost:3001/api/users',
            'POST',
            JSON.stringify({
                name: user.name,
                email: user.email,
                password: user.password
            }), response => {
                dispatch(success());
            })
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

export const connectToChatSocket = () => dispatch => {
    dispatch({
        type: 'CONNECTING'
    })

    let socket = new WebSocket('ws://localhost:3001')
    socket.onerror = (event) => {

        console.log("event", event);
    }

    socket.onclose = (event) => {

        console.log("event", event);
    }
    socket.onmessage = (event) => {

        console.log("event", event);
    }

    socket.onopen = (event) => {

        socket.send(JSON.stringify({
            action: 'create_message',
            payload: {some: 'some'},
        }))

    }
}