import {
    socketConstants
} from '../constants/socketConstants.js';
import {
    token
} from '../../helpers/token.js'
import _ from 'lodash'
import socketProvider from '../webSocket.js';
import { chatConstants } from '../constants/chatConstants';

export function connectToChatSocket() {
    return dispatch => {
        dispatch(connectRequest())

        socketProvider.connect()
        console.log('socket', socketProvider);

        socketProvider.socket.onerror = (event) => {
            console.log("error", event);

        }

        socketProvider.socket.onclose = (event) => {
            console.log("error", event);
            dispatch(disconnect(event))
        }

        socketProvider.socket.onopen = (event) => {
            dispatch(connectSuccess())
            dispatch(loginChatSocket())
        }

        socketProvider.socket.onmessage = (event) => {
            console.log("Mesage from the server: ", event.data);
            dispatch(readMessage(_.get(event, 'data')))
        }
    }

    function connectRequest() {
        return {
            type: socketConstants.ConnectRequest
        }
    }

    function connectSuccess() {
        return {
            type: socketConstants.ConnectSuccess,
        }
    }

    // function connectFailure(error) {
    //     return {
    //         type: socketConstants.ConnectFailure,
    //         error
    //     }
    // }

    function disconnect(error) {
        return {
            type: socketConstants.Disconnected,
            error
        }
    }
}

function loginChatSocket() {
    return dispatch => {
        dispatch(authRequest())
        socketProvider.socket.send(JSON.stringify({
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

function readMessage(msg) {
    return (dispatch, getState) => {
        const message = decodeMessage(msg);
        const action = _.get(message, 'action', '');
        const payload = _.get(message, 'payload', '');

        switch (action) {
            case 'user_offline':
                //this.onUpdateUserStatus(payload, false);
                break;
            case 'user_online':
                //const isOnline = true;
                //this.onUpdateUserStatus(payload, isOnline);
                break;
            case 'message_added':
                const currentUserId = getState().user.userInfo._id
                const messageObject = {
                    _id: payload._id,
                    body: _.get(payload, 'body', ''),
                    userId: _.get(payload, 'userId'),
                    channelId: _.get(payload, 'channelId'),
                    created: _.get(payload, 'created', new Date()),
                    me: currentUserId === _.toString(_.get(payload, 'userId')),
                    user: _.get(payload, 'user'),
                }
                dispatch(addMessage(messageObject))
                break
            case 'channel_added':
                const channelId = _.toString(_.get(payload, '_id'));
                const userId = `${payload.userId}`;
                const users = _.get(payload, 'users', []);
                let channel = {
                    _id: channelId,
                    title: _.get(payload, 'title', ''),
                    isNew: false,
                    lastMessage: _.get(payload, 'lastMessage'),
                    members: {},
                    messages: {},
                    userId: userId,
                    created: new Date(),
                }
                _.each(users, (user) => channel.members = {
                    ...channel.members,
                    [`${user._id}`]: true
                })
                dispatch(addChannel(channel))
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

    function addMessage(message) {
        return {
            type: chatConstants.ADD_MESSAGE,
            message
        }
    }

    function addChannel(channel) {
        return {
            type: chatConstants.ADD_CHANNEL,
            channel
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