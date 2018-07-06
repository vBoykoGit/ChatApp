import {
    userConstants
} from './userConstants.js';
import {
    fetchThenDispatch
} from './fetcher.js'
import _ from 'lodash'

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
                console.log(response);
                const accessToken = _.get(response, 'data');
                const user = _.get(accessToken, 'user');
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
                console.log(response);
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