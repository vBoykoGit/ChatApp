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


export const sendMessage = (messageText, toChatId) => {
    return (dispatch, getStore) => {
        const { channels } = getStore().chat
        const { userInfo } = getStore().user
        const userId = userInfo._id
        const [channel] = channels.filter(item => item._id == toChatId)
        const message = {
            _id: new ObjectID().toString(),
            channelId: toChatId,
            body: messageText,
            me: true,
            user: userInfo,
            userId: userId
        };
        console.log('userId ', userId);
        console.log('toChatId ', toChatId);

        console.log('channels ', channels);
        console.log('channel ', channel);
        if (!channel) {
            const channel = {
                _id: toChatId,
                title: '',
                lastMessage: {},
                members: { [userId]: true, [toChatId]: true },
                messages: {},
                isNew: true,
                userId: userId,
                created: new Date(),
            };
            channel.lastMessage = _.get(message, 'body', '');
            socketProvider.socket.send(JSON.stringify({
                action: 'create_channel',
                payload: channel,
            }))
        }

        socketProvider.socket.send(JSON.stringify({
            action: 'create_message',
            payload: message
        }))
    }
}