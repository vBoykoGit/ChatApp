import {
    socketConstants
} from '../constants/socketConstants';

const socket = (state = {}, action = {
    type: null
}) => {
    switch (action.type) {
        case socketConstants.ConnectRequest:
            return {
                connecting: true
            };
        case socketConstants.ConnectSuccess:
            return {
                connected: true
            };
        case socketConstants.ConnectFailure:
            return {
                connected: false
            };
        case socketConstants.AuthRequest:
            return {
                connected: true,
                loggingIn: true
            };
        case socketConstants.AuthSuccess:
            return {
                connected: true,
                loggedIn: true
            };
        case socketConstants.AuthFailure:
            return {
                connected: state.connected,
                loggedIn: false
            };
        default:
            return state
    }
}

export default socket