import {
    userConstants
} from '../constants/userConstants.js';

const registration = (state = {}, action = {
    type: null
}) => {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                registering: true
            };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}

export default registration