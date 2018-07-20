import {
    socketConstants
} from './socketConstants.js';
import {
    authHeader
} from '../helpers/authHeader';
import {
    token
} from '../helpers/token.js'

export function connectToChatSocket() {
    return dispatch => {
        dispatch(connectRequest())

        let socket = new WebSocket('ws://localhost:3001')
        socket.onerror = (event) => {

        }

        socket.onclose = (event) => {
            dispatch(disconnect(event))
        }

        socket.onopen = (event) => {
            dispatch(connectSuccess(socket))
            dispatch(loginChatSocket(socket))
        }
    }

    function connectRequest() {
        return {
            type: socketConstants.ConnectRequest
        }
    }

    function connectSuccess(socket) {
        return {
            type: socketConstants.ConnectSuccess,
            socket
        }
    }

    function connectFailure(error) {
        return {
            type: socketConstants.ConnectFailure,
            error
        }
    }

    function disconnect(error) {
        return {
            type: socketConstants.Disconnected,
            error
        }
    }
}

export function loginChatSocket(socket) {
    return dispatch => {
        console.log('-----------');

        dispatch(authRequest())

        socket.onmessage = (event) => {
            console.log("Auth?", event);
            dispatch(authSuccess())
        }

        console.log('-----------');

        console.log(socket);
        console.log(token());

        console.log('-----------')
        socket.send(JSON.stringify({
            action: 'auth',
            payload: `${token()}`
        }))
    }

    function authRequest() {
        return {
            type: socketConstants.AuthRequest,
        }
    }

    function authSuccess() {
        return {
            type: socketConstants.AuthSuccess,
        }
    }

    function authFailure(error) {
        return {
            type: socketConstants.AuthFailure,
            error
        }
    }
}

// export const sendMessage = (message, toChatId, fromUser, socket, token) => dispatch => {
//     const parseSendMessage = response => {
//         return {
//             type: C.SendMessage,
//             timestamp: new Date().toString(),
//             id: response.userId,
//             chatId: response.toChatId,
//             message: response.message,
//             fromUser: response.fromUser
//         }
//     }

//     socket.send(JSON.stringify({
//         action: 'create_message',
//         payload: {
//             some: 'some'
//         },
//     }))

//     const authRequest = () => ({
//         type: socketConstants.AuthRequest,
//     })
//     const authSuccess = () => ({
//         type: socketConstants.AuthSuccess,
//     })
//     const authFailure = (error) => ({
//         type: socketConstants.AuthFailure,
//         error
//     })
// }