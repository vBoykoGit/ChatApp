import {
    socketConstants
} from '../constants/socketConstants.js';
import {
    token
} from '../../helpers/token.js'
import _ from 'lodash'
import {
    ObjectID
} from '../../helpers/objectid.js'

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

        socket.onmessage = (event) => {
            console.log("Mesage from the server: ", event.data);
            dispatch(readMessage(_.get(event, 'data')))
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

function loginChatSocket(socket) {
    return dispatch => {
        dispatch(authRequest())
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
}

export const sendMessage = (message, toChatId, fromUser, socket) => {
    return dispatch => {

        const message = {
            _id: new ObjectID().toString(),
            channelId: toChatId,
            body: message,
            userId: token(),
            me: true,
        };
        const parseSendMessage = response => {
            return {
                timestamp: new Date().toString(),
                id: response.userId,
                chatId: response.toChatId,
                message: response.message,
                fromUser: response.fromUser
            }
        }

        socket.send(JSON.stringify({
            action: 'create_message',
            payload: `${token()}`
        }))
        // var message = {}
        // var id = ""
        // message.user = {};

        // const channelId = _.get(message, 'channelId');
        // socket.send(JSON.stringify({
        //     action: 'create_message',
        //     payload: message,
        // }))
        // if (channelId) {
        //     let channel = this.channels.get(channelId);
        //     channel.lastMessage = _.get(message, 'body', '');
        //     const obj = {

        //         action: 'create_channel',
        //         payload: channel,
        //     };
        //     socket.send(obj);


        //     console.log("channel:", channel);
        //     socket.send({
        //         action: 'create_message',
        //         payload: message,
        //     });
        // }
        //console.log(JSON.stringify(this.messages.toJS()));

        // socket.send(JSON.stringify({
        //     action: 'create_message',
        //     payload: message
        // }))
    }
    const authRequest = () => ({
        type: socketConstants.AuthRequest,
    })
    const authSuccess = () => ({
        type: socketConstants.AuthSuccess,
    })
    const authFailure = (error) => ({
        type: socketConstants.AuthFailure,
        error
    })
}

function readMessage(msg) {
    return dispatch => {
        //const currentUserId = _.toString(_.get(currentUser, '_id'));
        const message = decodeMessage(msg);
        const action = _.get(message, 'action', '');
        const payload = _.get(message, 'payload', '');

        switch (action) {
            case 'user_offline':
                this.onUpdateUserStatus(payload, false);
                break;
            case 'user_online':
                const isOnline = true;
                this.onUpdateUserStatus(payload, isOnline);
                break;
            case 'message_added':
                // const activeChannel = store.getActiveChannel();

                // let notify = _.get(activeChannel, '_id') !== _.get(payload, 'channelId') && currentUserId !== _.get(payload, 'userId');
                // this.onAddMessage(payload, notify);
                break;
            case 'channel_added':
                // to do check payload object and insert new channel to store.
                this.onAddChannel(payload);
                break;
            case 'auth_success':
                dispatch(authSuccess())
                break;
            case 'auth_error':
                dispatch(authFailure(payload))
                break;
            default:
                break;
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

function decodeMessage(msg) {
    let message = {};
    try {
        message = JSON.parse(msg);
    } catch (err) {
        console.log(err);
    }
    return message;
}