import { RSAA } from 'redux-api-middleware';

import { authConstants } from '../constants';

export const login = (username, password) => ({
  [RSAA]: {
    endpoint: '/api/accounts/auth/token/obtain/',
    method: 'POST',
    body: JSON.stringify({username, password}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      authConstants.LOGIN_REQUEST, authConstants.LOGIN_SUCCESS, authConstants.LOGIN_FAILURE
    ]
  }
});

export const refreshAccessToken = (token) => ({
  [RSAA]: {
    endpoint: '/api/accounts/auth/token/refresh/',
    method: 'POST',
    body: JSON.stringify({refresh: token}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      authConstants.REFRESH_REQUEST, authConstants.REFRESH_SUCCESS, authConstants.REFRESH_FAILURE
    ]
  }
});

export const logout = () => {
  return {
      type: authConstants.LOGOUT
  }
}