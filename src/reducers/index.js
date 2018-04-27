import { combineReducers } from 'redux';

import projects from './projects.reducer';
import auth, * as authState from './auth.reducer';

export default combineReducers({
  projects,
  auth
});

export const isAuthenticated =
  state => authState.isAuthenticated(state.auth)
export const accessToken =
  state => authState.accessToken(state.auth)
export const isAccessTokenExpired =
  state => authState.isAccessTokenExpired(state.auth)
export const refreshToken =
  state => authState.refreshToken(state.auth)
export const isRefreshTokenExpired =
  state => authState.isRefreshTokenExpired(state.auth)
export const authErrors =
  state => authState.errors(state.auth)
export const isAuthenticating =
  state => authState.loggingIn(state.auth)