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
                channels: [...state.channels, action.newChannel]
            };
        case chatConstants.SET_CHANNELS:
            return {
                channels: [...action.channels]
            };
        default:
            return state
    }
}

export default chat