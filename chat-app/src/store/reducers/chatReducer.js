import {
    chatConstants
} from '../constants/chatConstants';

const chat = (state = {
    channels: []
}, action = {
    channels: [],
    type: null
}) => {
    switch (action.type) {
        case chatConstants.ADD_CHANNEL:
            return {
                channels: [...state.channels.filter(channel => channel._id !== action.channel._id), action.channel]
            }
        case chatConstants.SET_CHANNELS:
            return {
                channels: [...action.channels]
            }
        case chatConstants.ADD_MESSAGE:
            return {
                channels: state.channels.map(channel =>
                    channel._id === action.message.channelId ? {
                        ...channel,
                        messages: { ...channel.messages, [action.message._id]: action.message }
                    } : channel)
            }
        case chatConstants.SET_MESSAGES:
            return {
                channels: state.channels.map(channel =>
                    channel._id === action.channelId ? {
                        ...channel,
                        messages: {
                            ...channel.messages, ...action.messages.reduce((obj, item) => ({ ...obj, [item._id]: item }), {})
                        }
                    } : channel)
            }
        default:
            return state
    }
}

export default chat