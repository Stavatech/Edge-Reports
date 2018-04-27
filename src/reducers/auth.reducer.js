import { authConstants } from '../constants';
import jwtDecode from 'jwt-decode';

const initialState = () => {
  let tokens = JSON.parse(localStorage.getItem('tokens'));

  return {
    access: tokens ? tokens.access : undefined,
    refresh:  tokens ? tokens.refresh : undefined,
    errors: {},
    loggingIn: false
  }
};

// reducer
export default (state = initialState(), action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {...state, loggingIn: true};

    case authConstants.LOGIN_SUCCESS:
      let access = {
        token: action.payload.access, ...jwtDecode(action.payload.access)
      };

      let refresh = {
        token: action.payload.refresh, ...jwtDecode(action.payload.refresh)
      };

      localStorage.setItem('tokens', JSON.stringify({access, refresh}));

      return {...state, loggingIn: false, access, refresh, errors: {}};

    case authConstants.REFRESH_SUCCESS:
      let tokens = JSON.parse(localStorage.getItem('tokens'))
      tokens.access = {
        token: action.payload.access, ...jwtDecode(action.payload.access)
      };

      localStorage.setItem('tokens', tokens)

      return {...state, access: tokens.access}

    case authConstants.LOGIN_FAILURE:
    case authConstants.REFRESH_FAILURE:
      localStorage.removeItem('tokens');
      return initialState();

    case authConstants.LOGOUT:
      localStorage.removeItem('tokens');
      return initialState();

    default:
      return state
  }
};

// state access methods
export const accessToken = (state) => {
  if (state.access) {
    return state.access.token
  }
}

export const refreshToken = (state) => {
  if (state.refresh) {
    return state.refresh.token
  }
}

export const isAccessTokenExpired = (state) => {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - (new Date()).getTime() < 5000
  }
  return true
}

export const isRefreshTokenExpired = (state) => {
  if (state.refresh && state.refresh.exp) {
    return 1000 * state.refresh.exp - (new Date()).getTime() < 5000
  }
  return true
}

export const isAuthenticated = (state) => {
  return !isRefreshTokenExpired(state)
}

export const errors = (state) => {
  return state.errors
}

export const loggingIn = (state) => {
  return state.loggingIn;
}
