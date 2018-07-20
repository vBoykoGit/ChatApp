import {
    socketConstants
} from './socketConstants';

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
                socket: action.socket,
                connected: true
            };
        case socketConstants.ConnectFailure:
            return {
                connected: false
            };
        case socketConstants.AuthRequest:
            return {
                socket: state.socket,
                connected: true,
                loggingIn: true
            };
        case socketConstants.AuthSuccess:
            return {
                socket: state.socket,
                connected: true,
                loggedIn: true
            };
        case socketConstants.AuthFailure:
            return {
                socket: state.socket,
                connected: state.connected,
                loggedIn: false
            };
        default:
            return state
    }
}

export default socket