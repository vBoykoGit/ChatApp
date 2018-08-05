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
            console.log("reduce", action);

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
        default:
            return state
    }
}

export default search