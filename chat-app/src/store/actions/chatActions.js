import {
    chatConstants
} from '../constants/chatConstants';
import {
    fetchThenDispatch
} from '../fetcher.js'
import _ from 'lodash'
import {
    token
} from '../../helpers/token';
import socketProvider from '../webSocket';
import { ObjectID } from '../../helpers/objectid';

export function getChannels() {
    return dispatch => {
        fetchThenDispatch('http://localhost:3001/api/me/channels', 'GET', null,
            {
                authorization: token(),
            }
        ).then((response) => {
            console.log(response);

            dispatch(setChannels(response))
        })
    };

    function setChannels(channels) {
        return {
            type: chatConstants.SET_CHANNELS,
            channels
        }
    }
}

export function getMessages(channelId) {
    return dispatch => {
        fetchThenDispatch(`http://localhost:3001/api/channels/${channelId}/messages`, 'GET', null,
            {
                authorization: token(),
            }
        ).then((response) => {
            console.log(response);
            const messages = response.data
            dispatch(setMessages(messages))
        })
    }

    function setMessages(messages) {
        return {
            type: chatConstants.SET_MESSAGES,
            messages
        }
    }
}

export const handleMessageFromChannel = (messageText, channel) => {
    return (dispatch, getStore) => {
        console.log(channel);
        
        const { channels } = getStore().chat
        const [existingChannel] = channels.filter(item => item._id === channel._id)
        if (!existingChannel) {
            dispatch(createChannel(messageText, channel))
            setTimeout(() => dispatch(sendMessage(messageText, channel._id)), 500)
            return
        }
        dispatch(sendMessage(messageText, existingChannel._id))
    }
}

const sendMessage = (messageText, toChatId) => {
    return (dispatch, getStore) => {
        const { userInfo } = getStore().user
        const userId = userInfo._id
        const message = {
            _id: new ObjectID().toString(),
            channelId: toChatId,
            body: messageText,
            me: true,
            user: userInfo,
            userId: userId
        };
        socketProvider.socket.send(JSON.stringify({
            action: 'create_message',
            payload: message
        }))
    }
}

const createChannel = (messageText, withUser) => {
    return (dispatch, getStore) => {
        const { userInfo } = getStore().user
        const userId = userInfo._id
        const channel = {
            _id: withUser._id,
            title: withUser.name,
            lastMessage: {},
            members: { [userId]: true, [withUser._id]: true },
            messages: {},
            isNew: true,
            userId: userId,
            created: new Date(),
        };
        channel.lastMessage = messageText.length ? messageText : '';
        socketProvider.socket.send(JSON.stringify({
            action: 'create_channel',
            payload: channel,
        }))
    }
}