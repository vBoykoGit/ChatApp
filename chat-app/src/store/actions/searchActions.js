import {
    searchConstants
} from '../constants/searchConstants';
import {
    fetchThenDispatch
} from '../fetcher.js'
import _ from 'lodash'

export function searchChannels(query = '') {
    return dispatch => {
        if (query.length) {
            dispatch(isSearching(true))
            fetchThenDispatch('http://localhost:3001/api/users/search', 'POST',
                JSON.stringify({
                    search: query
                })
            ).then((response) => {
                _.each(response, (channel) => {
                    const channelId = `${channel._id}`;
                });
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