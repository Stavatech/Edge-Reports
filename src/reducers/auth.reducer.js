import { authConstants } from '../constants';

let tokens = JSON.parse(localStorage.getItem('tokens'));
const initialState = tokens ? { loggedIn: true, tokens } : {};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        username: action.username
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        loggedIn: true,
        tokens: action.tokens
      };
    case authConstants.LOGIN_FAILURE:
      return {};
    case authConstants.LOGOUT:
      return {};
    default:
      return state
  }
};

export default auth;
