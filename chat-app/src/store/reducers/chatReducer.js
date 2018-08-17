import {
    chatConstants
} from '../constants/chatConstants';

const chat = (state = {
    channels: []
}, action = {
    type: null
}) => {
    switch (action.type) {
        case chatConstants.ADD_CHANNEL:
            return {
                channels: [...state.channels, action.channel]
            }
        case chatConstants.SET_CHANNELS:
            return {
                channels: [...action.channels]
            }
        case chatConstants.ADD_MESSAGE:
            return {
                channels: state.channels.map(channel =>
                    channel._id == action.message.channelId ? {
                        ...channel,
                        messages: { ...channel.messages, [action.message._id]: action.message }
                    } : channel)
            }
        default:
            return state
    }
}

export default chat