import {
    searchConstants
} from '../constants/searchConstants';
import {
    fetchThenDispatch
} from '../fetcher.js'
import _ from 'lodash'

export function searchChannels(query) {
    return dispatch => {
        fetchThenDispatch('http://localhost:3001/api/users/search', 'POST',
            JSON.stringify({
                search: query
            })
        ).then((response) => {
            console.log(response);
            
            const channels = _.get(response, 'data', [])
            _.each(channels, (channel) => {
                channel.avatar = this.loadUserAvatar(channel);
                const channelId = `${channel._id}`;
            });
            dispatch(searchResult(channels))
        })
    };

    function searchResult(channels) {
        return {
            type: searchConstants.CHANNELS_FOUND,
            channels
        }
    }
}