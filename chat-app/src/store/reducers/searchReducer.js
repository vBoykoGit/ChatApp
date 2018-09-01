import {
    searchConstants
} from '../constants/searchConstants';

const search = (state = {
    foundChannels: [],
    isSearching: false
}, action = {
    type: null
}) => {
    switch (action.type) {
        case searchConstants.CHANNELS_FOUND:
            return {
                ...state,
                foundChannels: action.channels
            };
        case searchConstants.SEARCH_CHANGED:
            return action.isSearching ? {
                foundChannels: state.foundChannels,
                isSearching: action.isSearching
            } : {
                    foundChannels: [],
                    isSearching: action.isSearching
                }
        case searchConstants.SET_MESSAGES:
            return {
                ...state,
                foundChannels: state.foundChannels.map(channel =>
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

export default search