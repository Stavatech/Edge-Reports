import { RSAA } from 'redux-api-middleware';

import { projectConstants } from '../constants';
import { authHeader } from '../helpers';

export const listProjects = () => {
  let headers = authHeader();
  console.log(headers);

  return {
    [RSAA]: {
      endpoint: '/api/projects/',
      method: 'GET',
      headers: { ...headers, 'Content-Type': 'application/json' },
      types: [
        projectConstants.LIST_REQUEST, projectConstants.LIST_SUCCESS, projectConstants.LIST_FAILURE
      ]
    }
  }
};
