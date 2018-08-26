import {
  userConstants
} from '../constants/userConstants.js';

// let user = localStorage.getItem('token');
const initialState = {};

const user = (state = initialState, action = {
  type: null
}) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        userInfo: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}

export default user