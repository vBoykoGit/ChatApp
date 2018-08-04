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

export function getChannels() {
    return dispatch => {
        fetchThenDispatch('http://localhost:3001/api/me/channels', 'GET',
            JSON.stringify({
                headers: {
                    authorization: token(),
                }
            })
        ).then((response) => {
            const channels = response.data
            dispatch(setChannels(channels))
        })
    };

    function setChannels(channels) {
        return {
            type: chatConstants.SET_CHANNELS,
            channels
        }
    }
}