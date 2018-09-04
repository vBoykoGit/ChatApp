import {
    searchConstants
} from '../constants/searchConstants';
import {
    fetchThenDispatch
} from '../fetcher.js'

export function searchChannels(query = '') {
    return dispatch => {
        if (query.length) {
            dispatch(isSearching(true))
            fetchThenDispatch(dispatch, '/api/users/search', 'POST',
                JSON.stringify({
                    search: query
                })
            ).then((response) => {
                dispatch(searchResult(response))
            })
        } else {
            dispatch(isSearching(false))
        }
    };

    function searchResult(channels) {
        return {
            type: searchConstants.CHANNELS_FOUND,
            channels
        }
    }

    function isSearching(isSearching) {
        return {
            type: searchConstants.SEARCH_CHANGED,
            isSearching
        }
    }
}