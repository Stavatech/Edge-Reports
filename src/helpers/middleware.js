import { isRSAA, apiMiddleware } from 'redux-api-middleware';

import { authConstants } from '../constants';
import { refreshAccessToken } from '../actions';
import { refreshToken, isAccessTokenExpired } from '../reducers';

export function createApiMiddleware() {
  let postponedRSAAs = [];

  return ({ dispatch, getState }) => {
    const rsaaMiddleware = apiMiddleware({dispatch, getState});
    return (next) => (action) => {
      const nextCheckPostoned = (nextAction) => {
        if (nextAction.type === authConstants.REFRESH_SUCCESS) {
          next(nextAction);
          postponedRSAAs.forEach((postponed) => {
            rsaaMiddleware(next)(postponed)
          });
          postponedRSAAs = [];
        } else {
          next(nextAction)
        }
      };

      if(isRSAA(action)) {
        const state = getState(), token = refreshToken(state);

        if(token && isAccessTokenExpired(state)) {
          postponedRSAAs.push(action);
          if(postponedRSAAs.length === 1) {
            const action = refreshAccessToken(token);
            return rsaaMiddleware(nextCheckPostoned)(action);
          } else {
            return;
          }
        }
        return rsaaMiddleware(next)(action);
      }
      return next(action);
    }
  }
};

export default createApiMiddleware();