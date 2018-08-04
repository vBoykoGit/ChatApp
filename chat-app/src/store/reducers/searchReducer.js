import {
    searchConstants
} from '../constants/searchConstants';

const search = (state = {}, action = {
    type: null
}) => {
    switch (action.type) {
        case searchConstants.USERS_FOUND:
            return {
                foundUsers: action.users,
                isSearching: state.isSearching
            };
        case searchConstants.SEARCH_CHANGED:
            return {
                foundUsers: [],
                isSearching: action.isSearching
            };
        default:
            return state
    }
}

export default search